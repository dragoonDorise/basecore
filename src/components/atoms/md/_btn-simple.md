---
name: Buttons
category: Atoms
---

Tamaños de botones

```btn-simple.html
<button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1 btn-simple--xs">Extra Small</button>
<button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1 btn-simple--sm">Small</button>
<button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1">Normal</button>
<button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1 btn-simple--lg">Grande</button>
```

Button groups

```btn-simple-group.html
<div class="btn-group" role="group">
  <button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1">Botón</button>
  <button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--2">Botón</button>
  <button type="button" aria-label="Describes the button action" class="btn-simple btn-simple--1">Botón</button>
</div>
```

```
      <module href="/components/atoms/_btn-simple/_btn-simple-group.html" >

            <module
              href="/components/atoms/_btn-simple/_btn-simple.html"
              locals='{
                "button_aria_label": "",
                "button_variant": "btn-simple--1",
                "button_size": "",
                "button_text": "Text button"
              }'
            ></module>
            <module
              href="/components/atoms/_btn-simple/_btn-simple.html"
              locals='{
                "button_aria_label": "",
                "button_variant": "btn-simple--1",
                "button_size": "",
                "button_text": "Text button"
              }'
            ></module>

      </module>
```

Toggle radio

```btn-simple-toggle-radio.html
<div class="btn-group" role="group">
  <input id="radio-group-1" name="radio-group" type="radio" autocomplete="off" checked>
  <label tabindex="0" for="radio-group-1" class="btn-simple btn-simple--1 active">Radio 1 (pre-checked)</label>

  <input id="radio-group-2" name="radio-group" type="radio" autocomplete="off">
  <label tabindex="0" for="radio-group-2" class="btn-simple btn-simple--1 active">Radio 2</label>
</div>
```

```
<module href="/components/atoms/_btn-simple/_btn-simple-group.html" >

  <module href="/components/atoms/_btn-simple/_btn-simple-toggle.html"
  locals='{
  	"button_type":"radio",
  	"button_id":"toggle-1",
  	"button_name":"toggles",
  	"button_variant":"btn-simple--1",
  	"button_size":"",
  	"button_text":"Option 1",
  	"button_checked":""
    }'
  </module>

  <module href="/components/atoms/_btn-simple/_btn-simple-toggle.html"
  locals='{
  	"button_type":"radio",
  	"button_id":"toggle-1",
  	"button_name":"toggles",
  	"button_variant":"btn-simple--1",
  	"button_size":"",
  	"button_text":"Option 2",
  	"button_checked":""
    }'
  </module>

</module>

```

Toggle checkbox

```btn-simple-checkbox.html
<div class="btn-group" role="group">
  <input id="check-group-1" name="check-group" type="checkbox" autocomplete="off" checked>
  <label tabindex="0" for="check-group-1" class="btn-simple btn-simple--1 active">Check 1 (pre-checked)</label>

  <input id="check-group-2" name="check-group" type="checkbox" autocomplete="off">
  <label tabindex="0" for="check-group-2" class="btn-simple btn-simple--1 active">Check 2</label>
</div>

```

```
<module href="/components/atoms/_btn-simple/_btn-simple-group.html" >

  <module href="/components/atoms/_btn-simple/_btn-simple-toggle.html"
  locals='{
  	"button_type":"radio",
  	"button_id":"toggle-1",
  	"button_name":"toggles",
  	"button_variant":"btn-simple--1",
  	"button_size":"",
  	"button_text":"Option 1",
  	"button_checked":""
    }'
  </module>

  <module href="/components/atoms/_btn-simple/_btn-simple-toggle.html"
  locals='{
  	"button_type":"radio",
  	"button_id":"toggle-1",
  	"button_name":"toggles",
  	"button_variant":"btn-simple--1",
  	"button_size":"",
  	"button_text":"Option 2",
  	"button_checked":""
    }'
  </module>

</module>

```
