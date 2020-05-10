<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use Webmozart\Assert\Assert;

final class UiElementRegistry implements UiElementRegistryInterface
{
    /**
     * @var UiElementInterface[]
     */
    private $uiElements = [];

    /**
     * @inheritDoc
     */
    public function addUiElement(UiElementInterface $uiElement): void
    {
        $uiElementClass = get_class($uiElement);
        Assert::keyNotExists($this->uiElements, $uiElementClass, 'UiElement "%s" is already registered.');

        $this->uiElements[$uiElementClass] = $uiElement;
    }

    /**
     * @inheritDoc
     */
    public function hasUiElement(string $className): bool
    {
        return array_key_exists($className, $this->uiElements);
    }

    /**
     * @inheritDoc
     */
    public function getUiElement(string $className): UiElementInterface
    {
        if (!$this->hasUiElement($className)) {
            throw new UiElementNotFoundException($className);
        }

        return $this->uiElements[$className];
    }

    /**
     * @inheritDoc
     */
    public function getUiElements(): array
    {
        return $this->uiElements;
    }
}
