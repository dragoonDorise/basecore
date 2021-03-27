---
name: Input Simple
category: Atoms
---

```input-simple-horizontal.html
<form class="form form--simple">

 <fieldset class="container">
    <legend>Personal information:</legend>
  <div class="form__group">
    <label for="input-text">Input disabled</label>
    <input  class="form__control" disabled type="text">
  </div>


  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input readonly</label>
        <input  class="form__control" readonly type="text">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input color</label>
        <input  class="form__control" type="color">
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input date</label>
        <input  class="form__control" type="date">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input datetime</label>
        <input  class="form__control" type="datetime">
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input datetime-local</label>
        <input  class="form__control" type="datetime-local">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input month</label>
        <input  class="form__control" type="month">
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input range</label>
        <input  class="form__control" type="range">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input search</label>
        <input  class="form__control" type="search">
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input tel</label>
        <input  class="form__control" type="tel">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input time</label>
        <input  class="form__control" type="time">
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input url</label>
        <input  class="form__control" type="url">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input week</label>
        <input  class="form__control" type="week">
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label for="input-text">Input text</label>
        <input  type="text" class="form__control"  id="input-text" placeholder="Campo de texto">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group form__group--addon--right">
        <label for="input-text-group">Input con addon password</label>
        <input  type="password" class="form__control"  id="input-text-group" placeholder="Campo de texto">
        <button class="form__addon js-reveal-pass">Go</button>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group form__group--addon--left">
        <label for="input-text-group">Input con addon</label>
        <input  type="text" class="form__control"  id="input-text-group" placeholder="Campo de texto">
        <button class="form__addon">Go</button>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group form__group--addon">
        <label for="input-text-group">Input con addon</label>
        <button class="form__addon">Back</button>
        <input  type="text" class="form__control"  id="input-text-group" placeholder="Campo de texto">
        <button class="form__addon">Go</button>
      </div>
    </div>



  </div>

  <div class="row">

    <div class="col-sm-12">
      <div class="form__group">
        <label for="" class="show-sr"></label>
        <select class="form__select" role="listbox" name="" id="">
        <option role="option" value="-1">Selecciona opción</option>
          <option role="option" value="">Opción 1</option>
          <option role="option" value="">Opción 2</option>
          <option role="option" value="">Opción 3</option>
        </select>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="form__group">
        <label for="">Label Textarea</label>
        <textarea name="textarea" rows="4" cols="2" placeholder="Textarea"></textarea>
      </div>
    </div>

  </div>


  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <button class="btn-simple btn-simple--success btn--block">Go</button>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <button class="btn-simple btn-simple--1 btn--block" disabled>Go disabled</button>
      </div>
    </div>

  </div>

</form>

```

```
<module
  href="/components/_atoms/_form-input-simple/_form-input-simple.html"
  locals='{
  "id":"button",
  "type":"text",
  "text":"label",
  "placeholder":"Your text here"
  }'
></module>
```

## Locals

| Name        | Description                      |
| ----------- | -------------------------------- |
| id          | ID                               |
| type        | Type of input: text, range, etc. |
| text        | Text to show in the label        |
| placeholder | Placeholder text                 |

```
 <module
  href="/components/_atoms/_form-input-simple/_form-input-simple-addon.html"
  locals='{"placeholder":"placeholder",
  "id":"input-id3",
  "type":"password",
  "text":"Input Label",
  "icon":"form-warning",
  "icon_size":"icon--xs",
  "addon_params":"js-reveal-pass",
  "addon_position":"right",
  "addon_text":""
}'></module>
></module>
```

## Locals

| Name           | Description                                           |
| -------------- | ----------------------------------------------------- |
| id             | ID                                                    |
| type           | Type of input: text, range, etc.                      |
| text           | Text to show in the label                             |
| icon           | ID of the icon                                        |
| icon_size      | Size, icon--xs, icon--lg, etc.                        |
| addon_params   | Additional CSS clases for JS                          |
| addon_position | Position of the addon: left or right                  |
| addon_text     | If text if defined it will appear instead of the icon |

```
 <module
href="/components/_atoms/_form-input-simple/_form-input-simple-select.html"
  locals='{
  "id":"input-id4",
  "text":"Input Label"}'
>
  <option role="option" value="1">Option 1</option>
  <option role="option" value="2">Option 2</option>
  <option role="option" value="3">Option 3</option>

</module>

></module>
```

## Locals

| Name | Description                |
| ---- | -------------------------- |
| id   | ID used to check / uncheck |
| text | Text to show in the label  |

```
<module
  href="/components/_atoms/_form-input-simple/_form-input-simple-textarea.html"
  locals='{
    "id":"input-id5",
    "placeholder":"placeholder",
    "text":"Input Label"}'
></module>
```

## Locals

| Name        | Description               |
| ----------- | ------------------------- |
| id          | ID                        |
| text        | Text to show in the label |
| placeholder | Placeholder text          |

## Tamaño XS

```xs.html

<form class="form form--simple form--xs">
  <div class="form__group">
    <label for="input-text">Label</label>
    <input  type="text" class="form__control"  id="input-text" placeholder="Campo de texto">
  </div>
</form>
```

## Tamaño SM

```sm.html
<form class="form form--simple form--sm">
  <div class="form__group">
    <label for="input-text">Label</label>
    <input  type="text" class="form__control"  id="input-text" placeholder="Campo de texto">
  </div>
</form>
```

## Tamaño LG

```lg.html
<form class="form form--simple form--lg">
  <div class="form__group">
    <label for="input-text">Label</label>
    <input  type="text" class="form__control"  id="input-text" placeholder="Campo de texto">
  </div>
</form>
```

## Validaciones

```validation.html
<form class="form form--simple">

  <div class="form__group form__group--danger">
    <label for="input-text">Mensaje de error</label>
    <input required data-validation-required-message="Campo requerido" type="text" class="form__control"  id="input-text" placeholder="Campo de texto">

    <span class="form__icon" aria-hidden="true">
      <svg class="icon" role="presentation">
          <use xlink:href="../svg/sprite.svg#form-danger"></use>
      </svg>
    </span>

    <div class="form__group__help">
      <ul>
        <li>Mensaje Error</li>
      </ul>
    </div>
  </div>

  <div class="form__group form__group--warning">
    <label for="input-text">Mensaje de aviso</label>
    <input  type="text" class="form__control"  id="input-text" placeholder="Campo de texto">
    <span class="form__icon" aria-hidden="true">
      <svg class="icon" role="presentation">
          <use xlink:href="../svg/sprite.svg#form-warning"></use>
      </svg>
    </span>
    <div class="form__group__help">
      <ul>
        <li>Mensaje Error</li>
      </ul>
    </div>
  </div>

  <div class="form__group form__group--success">
    <label for="input-text">Mensaje de éxito</label>
    <input  type="text" class="form__control"  id="input-text" placeholder="Campo de texto">
    <span class="form__icon" aria-hidden="true">
      <svg class="icon" role="presentation">
          <use xlink:href="../svg/sprite.svg#form-success"></use>
      </svg>
    </span>
    <div class="form__group__help">
      <ul>
        <li>Mensaje Error</li>
      </ul>
    </div>
  </div>
 </fieldset>
</form>
```

## CSS Variables

| Name                         | Description                                        |
| ---------------------------- | -------------------------------------------------- |
| \$form-help-padding          | Form validation error message padding              |
| \$form-help-text-size        | Form validation error message font size            |
| \$form-icon-size             | Form validation message icon size                  |
| \$form-icon-right            | Form validation icon position from right           |
| \$form-icon-top              | Form validation icon position from top             |
| \$form-label-mb              | Label margin bottom                                |
| \$form-control-border        | Input border - Use shorthand declaration           |
| \$form-control-border-radius | Input border-radius                                |
| \$form-control-padding       | Input paddding                                     |
| \$form-control-box-shadow    | Input box shadow                                   |
| \$form-control-bg            | Input background color                             |
| \$form-control-border-hover  | Input border on :hover - Use shorthand declaration |
| \$form-control-bg-hover      | Input border background color on :hover            |
| \$form-select-caret-size     | Select Caret Size                                  |
| \$form-select-caret-position | Select Caret position                              |
