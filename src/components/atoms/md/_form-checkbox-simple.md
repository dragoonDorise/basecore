---
name: Checkbox
category: Atoms
---

Checkbox with a slight transition from checked to unchecked. The checked options uses a base64 SVG located in src/components/\_utils-sass/\_base64/\_custom_base64.scss. Requires being inside .form\_\_group

```checkbox-simple.html
  <form class="form">

      <div class="form__group">
        <div class="checkbox-simple">
          <input id="form-checkbox" name="p-1"  type="checkbox" value="">
          <label for="form-checkbox">Checkbox</label>
        </div>
      </div>

  </div>
```

```
<module
href="/components/atoms/_form-checkbox-simple/_form-checkbox-simple.html"
  locals='{
  "id":"form-checkbox-simple",
  "value":"1",
  "text":"checkbox",
  "name":"checkboxes"
  }'
></module>

```

## Locals

| Name  | Description                         |
| ----- | ----------------------------------- |
| id    | ID used to check / uncheck          |
| value | Input Value                         |
| text  | Text to show                        |
| name  | Name to use for the input and label |

## CSS Variables

| Name                                       | Description                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| \$checkbox-simple-size                     | Global size of the atom, size MD                                                         |
| \$checkbox-simple-size-xs                  | Global size of the atom, size XS                                                         |
| \$checkbox-simple-size-sm                  | Global size of the atom, size SM                                                         |
| \$checkbox-simple-size-lg                  | Global size of the atom, size LG                                                         |
| \$checkbox-simple-border                   | Defines the outside border - use full short property                                     |
| \$checkbox-simple-border-check             | Defines the outside border when checked - use full short property                        |
| \$checkbox-simple-focus                    | Defines the outside border when :focus - use full short property                         |
| \$checkbox-simple-inner-bg                 | Inner element background color                                                           |
| \$checkbox-simple-inner-bg-check           | Inner element background color when checked                                              |
| \$checkbox-simple-inner-transition-check   | Defines the inner element transition animation when checked - use full short property    |
| \$checkbox-simple-inner-transition-uncheck | Defines the inner element transition animation when un checked - use full short property |

## Mixin

**checkbox-simple-sizes**

Allow us to create different sizes of the Atom

```css
@mixin checkbox-simple-sizes($size, $checkbox-simple-size);
```

| Name                   | Description                                                                       |
| ---------------------- | --------------------------------------------------------------------------------- |
| \$size                 | Name size : xs, sm, lg. - Outputs .checkbox-simple--xs, .checkbox-simple--sm, etc |
| \$checkbox-simple-size | Size in pixels                                                                    |

**Example**

```scss
@include checkbox-simple-sizes(xs, $checkbox-simple-size-xs);
```

```css
.checkbox-simple--xs {
  ...;
}
```
