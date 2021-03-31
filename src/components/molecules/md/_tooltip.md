---
name: Tooltip
category: Molecules
---

```tooltip.html

<div class="row">

  <div class="col-sm-3">
    <span class="tooltip" aria-describedby="tooltip1">
      Tooltip top
      <span id="tooltip1" role="tooltip" class="tooltip__text">
        Inner HTML tooltip
      </span>
    </span>
  </div>

  <div class="col-sm-3">
    <span class="tooltip tooltip--bottom" aria-describedby="tooltip2">
      Tooltip bottom
      <span id="tooltip2" role="tooltip" class="tooltip__text">
        Inner HTML tooltip
      </span>
    </span>
  </div>

  <div class="col-sm-3">
    <span class="tooltip tooltip--right" aria-describedby="tooltip3">
      Tooltip right
      <span id="tooltip3" role="tooltip" class="tooltip__text">
        Inner HTML tooltip
      </span>
    </span>
  </div>

  <div class="col-sm-3">
    <span class="tooltip tooltip--left" aria-describedby="tooltip4">
      Tooltip left
      <span id="tooltip4" role="tooltip" class="tooltip__text">
        Inner HTML tooltip
      </span>
    </span>
  </div>


</div>

```

```
<module
  href="/components/_molecules/_tooltip/_tooltip.html"
  locals='{
        "id":"tooltip",
        "button_text":"Hi, am a tooltip",
        "variant":"tooltip--top"}'
>
  Text inside the tooltip
</module>
```

## Locals

| Name        | Description  |
| ----------- | ------------ |
| id          | ID           |
| button_text | Text to show |
| variant     | Variants     |

## Variants

| Name            | Description                          |
| --------------- | ------------------------------------ |
| tooltip--top    | Appears at the top of the element    |
| tooltip--bottom | Appears at the bottom of the element |
| tooltip--left   | Appears left of the element          |
| tooltip--right  | Appears right of the element         |

## CSS Variables

| Name                     | Description                  |
| ------------------------ | ---------------------------- |
| \$tooltip-background     | Element background color     |
| \$tooltip-color          | Element text color           |
| \$tooltip-padding        | Element padding              |
| \$tooltip-bottom         | Element bottom position      |
| \$tooltip-transform-from | Element animation transition |
| \$tooltip-transition     | Element animation transition |
| \$tooltip-triangle-size  | Element caret size           |
