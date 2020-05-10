<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use Symfony\Component\Form\FormTypeInterface;
use Twig\Environment;

interface UiElementInterface extends \JsonSerializable, FormTypeInterface
{
    public function getType(): string;

    public function getFields(): array;

    public function getDescription(): string;

    public function getImagePath(): string;

    public function getName(): string;

    public function getShortDescription(): string;

    public function getTemplate(): string;

    public function getValues(): array;

    public function getFormattedContent(Environment $twigEnvironment): string;
}
