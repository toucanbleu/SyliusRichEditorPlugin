<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Event\RenderUiElementEvent;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

abstract class AbstractUiElement extends AbstractType implements UiElementInterface
{
    protected TranslatorInterface $translator;

    protected EventDispatcherInterface $eventDispatcher;

    public function __construct(TranslatorInterface $translator, EventDispatcherInterface $eventDispatcher)
    {
        $this->translator = $translator;
        $this->eventDispatcher = $eventDispatcher;
    }

    public function jsonSerialize(): array
    {
        return [
            '_class' => get_class($this),
            'type' => $this->getType(),
            'description' => $this->getDescription(),
            'name' => $this->getName(),
            'title' => $this->getName(),
            'image' => $this->getImagePath(),
            'image_path' => $this->getImagePath(),
            'values' => $this->getValues(),
        ];
    }

    public function getImagePath(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/default.svg';
    }

    public function getFormattedContent(Environment $twigEnvironment): string
    {
        $event = new RenderUiElementEvent($this);
        $this->eventDispatcher->dispatch($event);

        $element = $event->getUiElement();

        return $twigEnvironment->render($this->getTemplate(), [
            'uiElement' => $element,
        ]);
    }

}
