---
name: Input Material
category: Atoms
---

```input-horizontal.html
<form class="form form--material">

 <fieldset class="container">

    <legend>Personal information:</legend>

  <div class="form__group">
    <input placeholder="placeholder" class="form__control" disabled type="text">
    <label class="form--material__label" for="input-text">Input disabled</label>
	<div class="form__line"></div>
  </div>



  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" readonly type="text">
        <label class="form--material__label" for="input-text">Input readonly</label>
    	<div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="color">
        <label class="form--material__label" for="input-text">Input color</label>
        <div class="form__line"></div>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="date">
        <label class="form--material__label" for="input-text">Input date</label>
        <div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="datetime">
        <label class="form--material__label" for="input-text">Input datetime</label>
        <div class="form__line"></div>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="datetime-local">
        <label class="form--material__label" for="input-text">Input datetime-local</label>
		<div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="month">
        <label class="form--material__label" for="input-text">Input month</label>
		<div class="form__line"></div>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <label class="form--material__label" for="input-text">Input range</label>
        <input placeholder="placeholder" class="form__control" type="range">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="search">
        <label class="form--material__label" for="input-text">Input search</label>
		<div class="form__line"></div>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="tel">
        <label class="form--material__label" for="input-text">Input tel</label>
		<div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="time">
        <label class="form--material__label" for="input-text">Input time</label>
		<div class="form__line"></div>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="url">
        <label class="form--material__label" for="input-text">Input url</label>
		<div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" class="form__control" type="week">
        <label class="form--material__label" for="input-text">Input week</label>
		<div class="form__line"></div>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <input placeholder="placeholder" type="text" class="form__control" required  id="input-text" >
        <label class="form--material__label" for="input-text">Input text</label>
        <div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group form__group--addon--right">
        <input placeholder="placeholder" type="password" class="form__control"  id="input-text-group" >
        <label class="form--material__label" for="input-text-group">Input con addon Password</label>
        <div class="form__line"></div>
        <button type="button" class="form__addon js-reveal-pass">
          <svg class="icon icon--sm" role="presentation">
            <use xlink:href="../svg/sprite.svg#form-warning"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group form__group--addon--left">
        <input placeholder="placeholder" type="text" class="form__control"  id="input-text-group" >
        <label class="form--material__label" for="input-text-group">Input con addon</label>
        <div class="form__line"></div>
        <button type="button" class="form__addon">
          <svg class="icon icon--sm" role="presentation">
            <use xlink:href="../svg/sprite.svg#form-warning"></use>
          </svg>
        </button>

      </div>
    </div>


  </div>

  <div class="row">

    <div class="col-sm-12">
      <div class="form__group">
        <select class="form__select" role="listbox" name="" id="" onclick="this.setAttribute('value', this.value);" value="-1">
          <option role="option" value="-1"></option>
          <option role="option" value="1">Option 1</option>
          <option role="option" value="2">Option 2</option>
          <option role="option" value="3">Option 3</option>
        </select>
        <label class="form--material__label" for="">Selecciona</label>
        <div class="form__line"></div>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="form__group">
        <label class="form--material__label" for="">Label Textarea</label>
        <textarea name="textarea" rows="4" cols="2" ></textarea>
        <div class="form__line"></div>
      </div>
    </div>

  </div>


  <div class="row">

    <div class="col-sm-6">
      <div class="form__group">
        <button class="btn-material btn-material--success btn--block">Go</button>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form__group">
        <button class="btn-material btn-material--1 btn--block" disabled>Go disabled</button>
      </div>
    </div>

  </div>

</form>

```

```
<module
  href="/components/_atoms/_form-input-material/_form-input-material.html"
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
  href="/components/_atoms/_form-input-material/_form-input-material-addon.html"
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
href="/components/_atoms/_form-input-material/_form-input-material-select.html"
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
  href="/components/_atoms/_form-input-material/_form-input-material-textarea.html"
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

<form class="form form--material form--xs">
  <div class="form__group">
    <input placeholder="placeholder" type="text" class="form__control"  id="input-text" >
    <label class="form--material__label" for="input-text">Label</label>

  </div>
</form>
```

## Tamaño SM

```sm.html
<form class="form form--material form--sm">
  <div class="form__group">
    <input placeholder="placeholder" type="text" class="form__control"  id="input-text" >
    <label class="form--material__label" for="input-text">Label</label>
  </div>
</form>
```

## Tamaño LG

```lg.html
<form class="form form--material form--lg">
  <div class="form__group">
    <input placeholder="placeholder" type="text" class="form__control"  id="input-text" >
    <label class="form--material__label" for="input-text">Label</label>
  </div>
</form>
```

## Validaciones

```validation.html
<form class="form form--material">

  <div class="form__group form__group--danger">
    <input placeholder="placeholder" type="text" class="form__control"  id="input-text" >
    <label class="form--material__label" for="input-text">Mensaje de Error</label>
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

  <div class="form__group form__group--warning">
    <input placeholder="placeholder" type="text" class="form__control"  id="input-text" >
    <label class="form--material__label" for="input-text">Mensaje de Error</label>
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
    <input placeholder="placeholder" type="text" class="form__control"  id="input-text" >
    <label class="form--material__label" for="input-text">Mensaje de Error</label>
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
| \$form-control-border-focus  | Line when on focus                                 |
| \$form-control-padding       | Input paddding                                     |
| \$form-control-box-shadow    | Input box shadow                                   |
| \$form-control-bg            | Input background color                             |
| \$form-control-border-hover  | Input border on :hover - Use shorthand declaration |
| \$form-control-bg-hover      | Input border background color on :hover            |
| \$form-label-size            | Label font size                                    |
| \$form-select-caret-size     | Select Caret Size                                  |
| \$form-select-caret-position | Select Caret position                              |
| \$form-label-size-xs         | Label font size XS                                 |
| \$form-input-size-xs         | Input font size XS                                 |
| \$form-label-size-sm         | Label font size SM                                 |
| \$form-input-size-sm         | Input font size SM                                 |
| \$form-label-size-lg         | Label font size LG                                 |
| \$form-input-size-lg         | Input font size LG                                 |
