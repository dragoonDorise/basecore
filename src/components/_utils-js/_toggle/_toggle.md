---
name: toggle
category: Utils JS
---

** Version: 1.1 **

Button that shows the indicated Id and hides another one by animating animate.css

You can limit the number of times you want to allow the toggle with a numeric value

Sin data-times - Endless Toggles

data-times="1" - Once use toggle

```
  <button type="button" data-toggle="toggle"
    data-id-show="#id-mostrar"
    data-id-hide="#id-ocultar"
    data-animation-show="nombreAnimacion"
    data-animation-hide="nombreAnimacion"
    data-times="1"
  >
    Run
  </button>
```

```toggle.html
  <button type="button" class="btn-simple btn-simple--1" data-toggle="toggle"
    data-id-show="#toggle-show"
    data-id-hide="#toggle-hide"
    data-animation-show="fadeIn"
    data-animation-hide="fadeOut"
    data-times="0"
  >
    Run
  </button>

  <div id="toggle-show" class="is-hidden"> No me veias, ahora si</div>
  <div id="toggle-hide">Me ves</div>

```
