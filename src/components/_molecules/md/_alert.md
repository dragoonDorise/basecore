---
name: Alerts
category: Molecules
---

Alertas y mensajes de error

```alert.html
<div class="alert alert--success" role="alert">
    <button type="button" class="alert__close" data-id-dismiss="this" aria-hidden="true">
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#close"></use>
    </svg>
    </button>
    Texto
</div>
<div class="alert alert--info" role="alert">
    <button type="button" class="alert__close" data-id-dismiss="this" aria-hidden="true">
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#close"></use>
    </svg>
    </button>
    Texto
</div>
<div class="alert alert--warning" role="alert">
    <button type="button" class="alert__close" data-id-dismiss="this" aria-hidden="true">
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#close"></use>
    </svg>
    </button>
    Texto
</div>
<div class="alert alert--danger" role="alert">
    <button type="button" class="alert__close" data-id-dismiss="this" aria-hidden="true">
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#close"></use>
    </svg>
    </button>
    Texto
</div>

```

```
<module
  href="/components/_molecules/_alert/_alert.html"
  locals='{
  "text":"Alert component",
  "variant":"alert--warning"
  }'
></module>
```

## Locals

| Name    | Description     |
| ------- | --------------- |
| text    | Text to show    |
| variant | Variant to show |

## Variants

| Name            | Description       |
| --------------- | ----------------- |
| \alert--warning | Warning Alert     |
| \alert--info    | Information Alert |
| \alert--success | Success Alert     |
| \alert--danger  | Danger Alert      |

## CSS Variables

| Name                         | Description                          |
| ---------------------------- | ------------------------------------ |
| \$alert-padding              | Internal padding                     |
| \$alert-pr                   | Right padding ( for close button)    |
| \$alert-border-radius        | Box border radius                    |
| \$alert-mb                   | Margin bottom                        |
| \$alert-border-size          | Border size                          |
| \$alert-icon-size            | Size of the close icon               |
| \$alert-success-color-text   | Success Alert : Inner text color     |
| \$alert-success-border-color | Success Alert : Border color         |
| \$alert-success-icon-color   | Success Alert : Icon color           |
| \$alert-info-color-text      | Information Alert : Inner text color |
| \$alert-info-border-color    | Information Alert : Border color     |
| \$alert-info-icon-color      | Information Alert : Icon color       |
| \$alert-warning-color-text   | Warning Alert : Inner text color     |
| \$alert-warning-border-color | Warning Alert : Border color         |
| \$alert-warning-icon-color   | Warning Alert : Icon color           |
| \$alert-danger-color-text    | Danger Alert : Inner text color      |
| \$alert-danger-border-color  | Danger Alert : Border color          |
| \$alert-danger-icon-color    | Danger Alert : Icon color            |
