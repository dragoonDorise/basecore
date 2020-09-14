---
name: offcanvas
category: Utils JS
---

** Version: 1.0 **

Off canvas menus

They can appear from the top, right, bottom or left by setting their data attributes.

** It is only possible to have one Off Canvas displayed at a time **

    data-side

It can have top, right, bottom, left values that have to be changed in the class of the layer that is displayed
data-target

The ID of the canvas to attack.

    data-push

Values true or false, true for pushing the content, false for overlay behavior

The canvas can change its position depending on the button that invokes it, if

```canvas.html
	<div class="off-canvas off-canvas--left" id="off-canvas-id">

		Contenido

		<button type="button" class="js-close-off-canvas">Cerrar</button>

	</div>

	<button type="button" class="js-off-canvas" data-side="left" data-push="false" data-target="#off-canvas-id">Left!</button>

```

## Vanilla Methods

| Name                    | Description                       |
| ----------------------- | --------------------------------- |
| offcanvas.show('#id')   | Makes the off-canvas visible      |
| offcanvas.toggle('#id') | Toggles the off-canvas visibility |
| offcanvas.hide()        | Hides the off-canvas              |

## Events

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| bc.is.visible | Event fired when the layer is done animating and it's visible |
| bc.is.showing | Event fired when the layer is animating to show itself        |
| bc.is.hiding  | Event fired when the layer is animating to hide itself        |
| bc.is.hidden  | Event fired when the layer is done animating and it's visible |

## CSS Variables

| Name                    | Description                                  |
| ----------------------- | -------------------------------------------- |
| off-canvas-overlay-time | Time it takes to the overlay to appear       |
| off-canvas-left-width   | Width of the left offcanvas                  |
| off-canvas-left-time    | Time it takes the left offcanvas to appear   |
| off-canvas-right-width  | Width of the right offcanvas                 |
| off-canvas-right-time   | Time it takes the left offcanvas to appear   |
| off-canvas-top-time     | Time it takes the top offcanvas to appear    |
| off-canvas-bottom-time  | Time it takes the bottom offcanvas to appear |
