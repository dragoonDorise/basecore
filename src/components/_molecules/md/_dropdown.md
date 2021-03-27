---
name: Dropdown
category: Molecules
---

```dropdown.html

<div id="dropdown" class="dropdown">
  <button class="btn-simple btn-simple--1" type="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
    Dropdown
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>
  </button>
  <ul class="dropdown__menu" role="menu" aria-expanded="false">
    <li role="presentation" class="dropdown__header">Dropdown header</li>
    <li role="presentation"><a class="link-simple link-simple--1" role="menuitem" href="./">Action</a></li>
    <li role="presentation" class="dropdown__divider"></li>
    <li role="presentation"><a class="link-simple link-simple--1" role="menuitem" href="./">Another action</a></li>
    <li role="presentation"><a class="link-simple link-simple--1" role="menuitem" href="./">Something else here</a></li>
    <li role="presentation"><a class="link-simple link-simple--1" role="menuitem" href="./">Separated link</a></li>
  </ul>
</div>

```

```
<module
  href="/components/_molecules/_dropdown/_dropdown.html"
  locals='{
  "id":"dropdown",
  "button_style":"btn-simple btn-simple--1",
  "button_text":"I am a nice Dropdown"
  }'
>
  <li role="presentation">
    <module
      href="/components/atoms/_link-simple/_link-simple.html"
      locals='{
        "href":"button",
        "variant":"link-simple--1",
        "text":"Link simple module"
        }'
    ></module>
  </li>

  <li role="presentation">
    <module
      href="/components/atoms/_link-simple/_link-simple.html"
      locals='{
        "href":"button",
        "variant":"link-simple--1",
        "text":"Another link simple module"
        }'
    ></module>
  </li>
</module>
```

## Locals

| Name         | Description            |
| ------------ | ---------------------- |
| id           | ID                     |
| button_style | CSS to add to the text |
| button_text  | Text to show           |

## CSS Variables

| Name                             | Description                                                          |
| -------------------------------- | -------------------------------------------------------------------- |
| \$dropdown-icon-size             | SVG icon size                                                        |
| \$dropdown-icon-color            | SVG icon color                                                       |
| \$dropdown-menu-border           | Dropdown menu border - Use shorthand declaration                     |
| \$dropdown-menu-bg               | Dropdown menu background color                                       |
| \$dropdown-menu-padding          | Dropdown menu inner padding                                          |
| \$dropdown-menu-transition-open  | Dropdown menu transition open animation - Use shorthand declaration  |
| \$dropdown-menu-transition-close | Dropdown menu transition close animation - Use shorthand declaration |
| \$dropdown-menu-item-mb          | Dropdown menu inner items margin bottom                              |

## Vanilla Methods

| Name                   | Description             |
| ---------------------- | ----------------------- |
| dropdown.show('#id')   | It shows the Dropdown   |
| dropdown.hide('#id')   | It hides the Dropdown   |
| dropdown.toggle('#id') | It toggles the Dropdown |

## Events

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| bc.is.visible | Event fired when the layer is done animating and it's visible |
| bc.is.showing | Event fired when the layer is animating to show itself        |
| bc.is.hiding  | Event fired when the layer is animating to hide itself        |
| bc.is.hidden  | Event fired when the layer is done animating and it's visible |
