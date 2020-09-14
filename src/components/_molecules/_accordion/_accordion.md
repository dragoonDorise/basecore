---
name: Accordion
category: Molecules
---

Accordions, they use the Collapse component so the same methods and events also apply here.

```accordion.html
<div id="accordion-example" class="accordion">

  <button id="collapse-button" type="button" data-toggle="collapse" data-target="#collapse" data-parent="#accordion-example" aria-expanded="false" aria-controls="collapse">
    Lorem ipsum dolor sit amet

    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>


  </button>

  <div id="collapse" class="accordion__collapse" aria-expanded="false">

    <div class="accordion__panel">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <button id="collapse-button-2" type="button" data-toggle="collapse" data-target="#collapse2" data-parent="#accordion-example"  aria-expanded="false" aria-controls="collapse2">
    Lorem ipsum dolor sit amet
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>
  </button>

  <div id="collapse2" class="accordion__collapse" aria-expanded="false">
    <div class="accordion__panel">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <button id="collapse-button-3" type="button" data-toggle="collapse" data-target="#collapse3" data-parent="#accordion-example" aria-expanded="false" aria-controls="collapse3">
    Lorem ipsum dolor sit amet
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>
  </button>

  <div id="collapse3" class="accordion__collapse" aria-expanded="false"">
    <div class="accordion__panel">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

</div>
```

```
  <module
    href="/components/_molecules/_accordion/_accordion.html"
    locals='{"id_accordion":"accordion-example"}'
  >
    <module
      href="/components/_molecules/_accordion/_accordion-item.html"
      locals='{
      "id_slide":"collapse1",
      "id_accordion":"accordion-example",
      "title": "Accordion button 1"
      }'
    >
      Content inside Accordion Slide 1
    </module>
    <module
      href="/components/_molecules/_accordion/_accordion-item.html"
      locals='{
      "id_slide":"collapse2",
      "id_accordion":"accordion-example",
      "title": "Accordion button 2"
      }'
    >
      Content inside Accordion Slide 2
    </module>
  </module>

```

## Locals

| Name         | Description                   |
| ------------ | ----------------------------- |
| id_accordion | ID of the parent accordion    |
| id_slide     | ID of each different slide    |
| title        | Title of each accordion slide |

We can control an accordion with a select with data-accordion-select

```accordion-select.html


<form class="form">
  <div class="form__group">
    <label for="" class="show-sr"></label>
    <select data-accordion-select class="form__select" role="listbox" name="" id="">
      <option role="option" value="-1">Selecciona opción</option>
      <option data-target="#collapse-button-select-1" role="option" value="">Opción 1</option>
      <option data-target="#collapse-button-select-2" role="option" value="">Opción 2</option>
      <option data-target="#collapse-button-select-3" role="option" value="">Opción 3</option>
    </select>
  </div>
</form>

<div id="accordion-example" class="accordion">

  <button id="collapse-button-select-1" type="button" data-toggle="collapse" data-target="#collapse" data-parent="#accordion-example" aria-expanded="false" aria-controls="collapse">
    Lorem ipsum dolor sit amet

    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>


  </button>

  <div id="collapse" class="accordion__collapse" aria-expanded="false">

    <div class="accordion__panel">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <button id="collapse-button-select-2" type="button" data-toggle="collapse" data-target="#collapse2" data-parent="#accordion-example"  aria-expanded="false" aria-controls="collapse2">
    Lorem ipsum dolor sit amet
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>
  </button>

  <div id="collapse2" class="accordion__collapse" aria-expanded="false">
    <div class="accordion__panel">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <button id="collapse-button-select-3" type="button" data-toggle="collapse" data-target="#collapse3" data-parent="#accordion-example" aria-expanded="false" aria-controls="collapse3">
    Lorem ipsum dolor sit amet
    <svg class="icon" role="presentation">
        <use xlink:href="../svg/sprite.svg#caret-arrow"></use>
    </svg>
  </button>

  <div id="collapse3" class="accordion__collapse" aria-expanded="false"">
    <div class="accordion__panel">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

</div>



```
