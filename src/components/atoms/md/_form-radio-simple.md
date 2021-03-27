---
name: Radio Button
category: Atoms
---

## Radio simple

Radio button with a slight transition from checked to unchecked. Requires being inside .form\_\_group

```radio-simple.html
  <form class="form">

      <div class="form__group">
        <div class="radio-simple">
          <input id="form-radio-1" name="form-radio"  type="radio" value="">
          <label for="form-radio-1">Opción 1</label>

          <input id="form-radio-2" name="form-radio"  type="radio" value="">
          <label for="form-radio-2">Opcion 2</label>
        </div>
      </div>

  </div>
```

```
<module
href="/components/atoms/_form-radio-simple/_form-radio-simple.html"
  locals='{
  "id":"form-radio-simple",
  "value":"1",
  "text":"radioB",
  "name":"radios"
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

| Name                                    | Description                                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------------------- |
| \$radio-simple-size                     | Global size of the atom, breakpoint MD                                                   |
| \$radio-simple-size-xs                  | Global size of the atom, size XS                                                         |
| \$radio-simple-size-sm                  | Global size of the atom, size SM                                                         |
| \$radio-simple-size-lg                  | Global size of the atom, size LG                                                         |
| \$radio-simple-border                   | Defines the outside border - use full short property                                     |
| \$radio-simple-fosus                    | Defines the outside border when :focus - use full short property                         |
| \$radio-simple-inner-bg                 | Inner element background color                                                           |
| \$radio-simple-inner-transition-check   | Defines the inner element transition animation when checked - use full short property    |
| \$radio-simple-inner-transition-uncheck | Defines the inner element transition animation when un checked - use full short property |

## Mixin

**radio-simple-sizes**

Allow us to create different sizes of the Atom

```css
@include radio-simple-sizes($size, $radio-simple-size);
```

| Name                | Description             |
| ------------------- | ----------------------- |
| \$size              | Name size : xs, sm, lg. |
| \$radio-simple-size | Size in pixels          |

**Example**

```scss
@include radio-simple-sizes(xs, $radio-simple-size-xs);
```

```css
.radio-simple--xs {
  ...;
}
```
