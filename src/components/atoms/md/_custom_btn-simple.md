---
name: Buttons
category: Atoms
---

## Btn Simple

Button with a slight color transition on :hover

```btn-simple-site.html
<button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1">Boton primario</button>
<button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--2">Boton secundario</button>
```

```
<module
  href="/components/atoms/_btn-simple/_btn-simple.html"
  locals='{
    "button_aria_label": "",
    "button_variant": "btn-simple--1",
    "button_size": "",
    "button_text": "El mantenimiento adecuado para tu bmw"
  }'
></module>
```

## Locals

| Name               | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| \button_aria_label | Define an Aria explanation of the button if the text is not descriptive enough |
| \button_variant    | CSS Class from variants you create in the custom css file                      |
| \button_size       | Defines button size: xs, sm, etc. Leave empty for normal size                  |
| \button_text       | The text the button will show                                                  |

## CSS Variables

| Name                        | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| \$btn-simple-padding        | Defines button padding in MD breakpoint                  |
| \$btn-simple-text-size      | Font text size in MD breakpoint                          |
| \$btn-simple-mt             | Pixel separation when buttons stack in the XS breakpoint |
| \$btn-simple-border-radius  | Border radius                                            |
| \$btn-simple-transition-in  | Transition time when hover in                            |
| \$btn-simple-transition-out | Transition time when hover out                           |
| \$btn-simple-padding-xs     | Defines button padding in XS breakpoint                  |
| \$btn-simple-text-size-xs   | Font text size in XS breakpoint                          |
| \$btn-simple-padding-sm     | Defines button padding in SM breakpoint                  |
| \$btn-simple-text-size-sm   | Font text size in SM breakpoint                          |
| \$btn-simple-padding-lg     | Defines button padding in LG breakpoint                  |
| \$btn-simple-text-size-lg   | Font text size in LG breakpoint                          |

## Mixin

**generate-btn-simple**

Allows us to create several buttons with different color schemes

```css
  generate-btn-simple($name, $color, $bg, $color-hover, $bg-hover, $bg-active, $color-disabled, $bg-disabled)
```

| Name             | Description                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| \$name           | Button number or string diferenciator - outputs CSS clases like: btn-simple--1, btn-simple--2, btn-simple--primary, btn-simple--secondary |
| \$color          | Text color                                                                                                                                |
| \$bg             | Background color                                                                                                                          |
| \$color-hover    | Text color when :hover                                                                                                                    |
| \$bg-hover       | Background color when :hover                                                                                                              |
| \$bg-active      | Background color when active                                                                                                              |
| \$color-disabled | Text color when disabled                                                                                                                  |
| \$bg-disabled    | Background color when disabled                                                                                                            |

**Example**

```scss
  generate-btn-simple(1, white, var(--color-bg-secondary), white, darken( var(--color-bg-secondary), 10% ), var(--color-bg-primary), white, var(--color-bg-1));
```

```css
.btn-simple--1 {
  ...;
}
```
