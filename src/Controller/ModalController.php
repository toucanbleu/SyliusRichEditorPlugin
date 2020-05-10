<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Controller;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\Factory\UiElementFactoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

class ModalController extends AbstractController
{
    /**
     * @var Environment
     */
    private Environment $twigEnvironment;

    /**
     * @var UiElementFactoryInterface
     */
    private UiElementFactoryInterface $uiElementFactory;

    /**
     * @var TranslatorInterface
     */
    private TranslatorInterface $translator;

    /**
     * ModalController constructor.
     *
     * @param Environment $twigEnvironment
     * @param UiElementFactoryInterface $uiElementFactory
     * @param TranslatorInterface $translator
     */
    public function __construct(
        Environment $twigEnvironment,
        UiElementFactoryInterface $uiElementFactory,
        TranslatorInterface $translator
    ) {
        $this->twigEnvironment = $twigEnvironment;
        $this->uiElementFactory = $uiElementFactory;
        $this->translator = $translator;
    }

    /**
     * Generate the form and render the edit markup
     *
     * @param Request $request
     * @return Response
     */
    public function formAction(Request $request): Response
    {
        // Check request
        $data = $request->get('data') ?? null;
        if (empty($data)) {
            throw $this->createNotFoundException();
        }

        // Correct JSON decode data
        $data = json_decode($data, true);
        if (!isset($data['type']) || !isset($data['fields'])) {
            throw $this->createNotFoundException();
        }

        // Find UI Element from class name
        try {
            $uiElement = $this->uiElementFactory->getUiElementByClassName($data['type']);
        } catch (UiElementNotFoundException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create form depending on UI Element with data
        $form = $this->createForm(get_class($uiElement), $data['fields']);

        return new Response(
            $this->twigEnvironment->render('@MonsieurBizSyliusRichEditorPlugin/Admin/Modal/edit.html.twig', [
                'form' => $form->createView(),
                'uiElement' => $uiElement,
                'data' => $data['fields'],
            ])
        );
    }

    /**
     * Validate submitted data and return an UI Element JSON if everything is OK
     *
     * @param Request $request
     * @return Response
     */
    public function submitAction(Request $request): Response
    {
        $uiElementClass = $request->request->get('uiElementType');
        if (!$request->isXmlHttpRequest() || empty($uiElementClass)) {
            throw $this->createNotFoundException();
        }

        // Find UI Element from type
        try {
            $uiElement = $this->uiElementFactory->getUiElementByClassName($uiElementClass);
        } catch (UiElementNotFoundException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create and validate form
        $data = $request->request->get($uiElement->getType());
        $form = $this->createForm(get_class($uiElement), $data);
        $form->handleRequest($request);
        if (!$form->isSubmitted()) {
            throw $this->createNotFoundException();
        }

        // Generate array of errors with field name
        if (!$form->isValid()) {
            $errors = [];
            foreach ($form as $child) {
                if (!$child->isValid()) {
                    foreach ($child->getErrors() as $error) {
                        $childLabel = $this->translator->trans(sprintf('monsieurbiz_richeditor_plugin.ui_element.%s.field.%s', $uiElementClass, $child->getName()));
                        $errors[$childLabel][] = $error->getMessage();
                    }
                }
            }
            return new JsonResponse(['errors' => $errors], Response::HTTP_NOT_ACCEPTABLE);
        }

        // Create object with UiElement data
        $element = new \stdClass();
        $element->type = get_class($uiElement);
        $element->fields = new \stdClass();
        foreach ($uiElement->getFields() as $field) {
            // If file, upload it and retrieve the path
            if (($file = $request->files->get($uiElement->getType())) && isset($file[$field])) {
                $element->fields->{$field} = $this->uploadAndReturnPath($file[$field]);
            // Value in form exists, we take it
            } elseif (($value = $request->request->get($uiElement->getType())) && isset($value[$field])) {
                // Allow array if choices inputs
                if (is_array($value[$field])) {
                    $element->fields->{$field} = $value[$field];
                } else {
                    $element->fields->{$field} = (string) $value[$field];
                }
            // Value is not set, set an empty one
            } else {
                $element->fields->{$field} = '';
            }
        }

        return new JsonResponse(['element' => $element]);
    }

    /**
     * Upload file in folder in config and return the path from public folder
     *
     * @param UploadedFile $file
     * @return mixed
     */
    private function uploadAndReturnPath(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
        $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        // Move the file to the directory where brochures are stored
        $file = $file->move(
            $this->getParameter('monsieur_biz_sylius_rich_editor.upload_directory'),
            $newFilename
        );

        // Generate path from public folder
        $relativePath = str_replace($this->getParameter('kernel.project_dir'), '', $file->getPathname());
        $relativePath = str_replace('/public', '', $relativePath);

        return $relativePath;
    }
}
