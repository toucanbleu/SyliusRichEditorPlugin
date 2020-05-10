<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\WysiwygType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints;

class Text extends AbstractUiElement implements UiElementInterface
{
    public function getType(): string
    {
        return 'text';
    }

    public function getFields(): array
    {
        return ['content'];
    }

    public function getImagePath(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/text.svg';
    }

    public function getDescription(): string
    {
        return 'Description text';
    }

    public function getShortDescription(): string
    {
        return 'Short description text';
    }

    public function getName(): string
    {
        return 'Name text';
    }

    public function getValues(): array
    {
        return [];
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('content', WysiwygType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.text.field.content',
                'constraints' => [
                    new Constraints\NotBlank()
                ],
            ])
        ;
    }

    public function getTemplate(): string
    {
        return '@MonsieurBizSyliusRichEditorPlugin/UiElement/text.html.twig';
    }
}
