<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Factory;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;

interface UiElementFactoryInterface
{

    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array;

    /**
     * @param string $className
     *
     * @return UiElementInterface
     * @throws UiElementNotFoundException
     */
    public function getUiElementByClassName(string $className): UiElementInterface;

}
