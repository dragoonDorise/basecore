---
name: Progress Bars
category: Atoms
---

Barras de progreso

```progress-bar.html
<progress class="progress progress--success" value="22" max="100">
  <div class="progress">
    <span style="width: 20%">
      20%
    </span>
  </div>
</progress>

```

```
<module
href="/components/atoms/_progress-bar/_progress-bar.html"
  locals='{
  "variant":"progress--success",
  "value":"20"
  }'
></module>
```

## Locals

| Name    | Description                |
| ------- | -------------------------- |
| Variant | CSS Class to show variants |
| Value   | % completed                |

## Variants

| Name               | Description       |
| ------------------ | ----------------- |
| \progress--warning | Warning Alert     |
| \progress--info    | Information Alert |
| \progress--success | Success Alert     |
| \progress--danger  | Danger Alert      |

## CSS Variables

| Name                  | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| \$progress-height     | Element Height                                                         |
| \$progress-mb         | Element margin bottom                                                  |
| \$progress-bg         | Element background color                                               |
| \$progress-color      | Element text color                                                     |
| \$progress-font-size  | Element text size                                                      |
| \$progress-transition | Element transition from active to inactive - Use shorthand declaration |

## Mixin

**generate-progress**

Allow us to create different versions of the Atom

```css
  generate-progress($name, $progress-color, $progress-bg, $progress-value-bg)
```

| Name                | Description                            |
| ------------------- | -------------------------------------- |
| \$name              | Element number or string diferenciator |
| \$progress-color    | Text color                             |
| \$progress-bg       | Background color                       |
| \$progress-value-bg | Actual progrees bar background color   |

**Example**

```scss
@include generate-progress(success, white, $progress-bg, var(--color-success));
```

```css
.progress--success {
  ...;
}
```
