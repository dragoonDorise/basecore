---
name: Collapse
category: Utils JS
---

Collapse layers

```collapse.html
<button type="button" class="btn-simple" data-toggle="collapse" data-target="#collapse-demo" aria-controls="collapse-demo" aria-expanded="false" aria-label="This button will do something">
  Collapse button
</button>

<div id="collapse-demo" class="collapse" data-responsive-auto-open="xs">
  Hidden in Desktop, visible in Mobile
</div>
```

## Vanilla Methods

| Name                   | Description             |
| ---------------------- | ----------------------- |
| collapse.show('#id')   | It shows the Collapse   |
| collapse.hide('#id')   | It hides the Collapse   |
| collapse.toggle('#id') | It toggles the Collapse |

## Events

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| bc.is.visible | Event fired when the layer is done animating and it's visible |
| bc.is.showing | Event fired when the layer is animating to show itself        |
| bc.is.hiding  | Event fired when the layer is animating to hide itself        |
| bc.is.hidden  | Event fired when the layer is done animating and it's visible |

We can make a collapse to be shown depending of the browser's window size using data-responsive-auto-open

```
data-responsive-auto-open="xs"
data-responsive-auto-open="sm"
data-responsive-auto-open="md"
```
