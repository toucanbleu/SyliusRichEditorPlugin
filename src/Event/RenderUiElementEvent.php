<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Event;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use Symfony\Contracts\EventDispatcher\Event;

class RenderUiElementEvent extends Event
{
    /**
     * @var UiElementInterface
     */
    protected UiElementInterface $uiElement;

    /**
     * RenderUiElementEvent constructor.
     *
     * @param UiElementInterface $uiElement
     */
    public function __construct(UiElementInterface $uiElement)
    {
        $this->uiElement = $uiElement;
    }

    /**
     * @return UiElementInterface
     */
    public function getUiElement(): UiElementInterface
    {
        return $this->uiElement;
    }
}
