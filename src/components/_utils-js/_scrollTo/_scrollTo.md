---
name: scrollTo
category: Utils JS
---

** Version: 1.0 **

We move the scroll to the indicated element by clicking, it allows to indicate a number of px to take into account fixed layers

```
<button type="button" data-id-scroll="#id" data-speed="1000">Scroll to</button>

```

## Vanilla Methods

| Name                                               | Description                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| scrollTo(element, scrollToPosition, scrollToSpeed) | It scrolls the element to the scrollToPosition (px) at scrollToSpeed (ms) |

# Events

| Name                 | Description                                   |
| -------------------- | --------------------------------------------- |
| bc.animation.started | Event fired when the in animation is starting |
| bc.animation.ended   | Event fired when the in animation is done     |
