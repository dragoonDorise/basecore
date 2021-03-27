---
name: Modal
category: Molecules
---

Modales de aviso

```modal.html

<!-- Button trigger modal -->
<button type="button" class="link link--1" data-toggle="modal" data-target="#modal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal" id="modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-description" aria-hidden="true">
  <div class="modal__dialog" role="document">
    <div id="modal-description" class="modal__description">
      Modal description
    </div>
    <div class="modal__content">

      <button type="button" class="modal__close" aria-label="Close modal" data-dismiss="modal">
        <svg class="icon" role="presentation">
            <use xlink:href="../svg/sprite.svg#close"></use>
        </svg>
      </button>

      <div class="modal__body">
        <p>...</p>
        <button type="button" class="btn-simple btn-simple--1" data-dismiss="modal">Close</button>
        <button type="button" class="btn-simple btn-simple--2">Save changes</button>
      </div>

    </div>
  </div>
</div><!-- Modal -->

```

```

<button type="button" class="link link--1" data-toggle="modal" data-target="#modal">
  Launch demo modal
</button>


<module
  href="/components/_molecules/_modal/_modal.html"
  locals='{
        "id":"modal",
        "aria_labelledby":"Aria description",
        "aria_label_close":"Modal Close"
        }'
>
  <p>Modal content</p>
</module>
```

## Locals

| Name             | Description                            |
| ---------------- | -------------------------------------- |
| id               | ID                                     |
| aria_labelledby  | Aria text to describe the modal        |
| aria_label_close | Aria text to describe the close button |

## CSS Variables

| Name                   | Description                   |
| ---------------------- | ----------------------------- |
| \$modal-backdrop-bg    | Backdrop background color     |
| \$modal-dialog-bg      | Modal dialog background color |
| \$modal-dialog-padding | Modal dialog background color |
| \$modal-close-size     | Close button size             |
| \$modal-close-color    | Close button color            |
| \$modal-close-top      | Close button top position     |
| \$modal-close-right    | Close button right position   |
| \$modal-anim-top       | Modal top position animation  |

## Vanilla Methods

| Name                                | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| tabs.tabShow('','ariaControlsName') | Makes this tab visible, and hides their siblings. No # needed for the ID |

## Events

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| bc.is.visible | Event fired when the layer is done animating and it's visible |
| bc.is.showing | Event fired when the layer is animating to show itself        |
| bc.is.hiding  | Event fired when the layer is animating to hide itself        |
| bc.is.hidden  | Event fired when the layer is done animating and it's visible |
