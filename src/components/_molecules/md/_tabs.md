---
name: Tabs
category: Molecules
---

Pestañas

```tabs.html

<ul class="nav nav--tabs" role="tablist">
  <li role="presentation" class="active"><button type="button" aria-selected="true" aria-controls="home" role="tab" data-toggle="tab">Tab 1</button></li>
  <li role="presentation"><button type="button" aria-selected="false" aria-controls="profile" role="tab" data-toggle="tab">Tab 2</button></li>
  <li role="presentation"><button type="button" aria-selected="false" aria-controls="messages" role="tab" data-toggle="tab">Tab 3</button></li>
  <li role="presentation"><button type="button" aria-selected="false" aria-controls="settings" role="tab" data-toggle="tab">Tab 4</button></li>
</ul>

<div class="tab-content">
  <div role="tabpanel" class="tab-content__panel is-active" id="home">Tab 1 Content</div>
  <div role="tabpanel" class="tab-content__panel" id="profile">Tab 2 Content</div>
  <div role="tabpanel" class="tab-content__panel" id="messages">Tab 3 Content</div>
  <div role="tabpanel" class="tab-content__panel" id="settings">Tab 4 Content</div>
</div>

```

This component is composed of four different subcomponents:

| Name          | Description                                        |
| ------------- | -------------------------------------------------- |
| \_tabs_header | Component that contains the buttons are defined    |
| \_tabs_button | Chidren of tabs_header                             |
| \_tabs_body   | Component that contains the panels to be shown     |
| \_tabs_panel  | Children of tabs_body, containing the real content |

```
<module href="/components/_molecules/_tabs/_tabs_header.html">
  <module
    href="/components/_molecules/_tabs/_tabs_button.html"
    locals='{
        "id":"tab-1",
        "text":"Tab 1",
        "active":"is-active"
        }'
  >
  </module>
  <module
    href="/components/_molecules/_tabs/_tabs_button.html"
    locals='{
        "id":"tab-2",
        "text":"Tab 2",
        "active":""
        }'
  >
  </module>
  <module
    href="/components/_molecules/_tabs/_tabs_button.html"
    locals='{
        "id":"tab-3",
        "text":"Tab 3",
        "active":""
        }'
  >
  </module>
</module>

<module href="/components/_molecules/_tabs/_tabs_body.html">
  <module
    href="/components/_molecules/_tabs/_tabs_panel.html"
    locals='{
        "id":"tab-1",
        "active":"is-active"}'
  >
    Tab Panel number 1
  </module>
  <module
    href="/components/_molecules/_tabs/_tabs_panel.html"
    locals='{
        "id":"tab-2","active":""}'
  >
    Tab Panel number 2
  </module>
  <module
    href="/components/_molecules/_tabs/_tabs_panel.html"
    locals='{
        "id":"tab-3","active":""}'
  >
    Tab Panel number 3
  </module>
</module>
```

## Locals

### \_tabs_button

| Name | Description                                                    |
| ---- | -------------------------------------------------------------- |
| id   | ID of the panel it will control                                |
| text | Button text                                                    |
| text | Defines the active button, set it with the css class is-active |

### \_tabs_panel

| Name   | Description                                                         |
| ------ | ------------------------------------------------------------------- |
| id     | ID of the panel. It has to be the same that we set in \_tabs_button |
| active | Defines the active panel, set it with the css class is-active       |

## CSS Variables

| Name                       | Description                                     |
| -------------------------- | ----------------------------------------------- |
| \$nav-tabs-border          | Tabs outside border - Use shorthand declaration |
| \$nav-tabs-padding         | Tabs button padding                             |
| \$nav-tabs-bg              | Tabs background color                           |
| \$nav-tabs-color           | Tabs text color                                 |
| \$nav-tabs-bg-hover        | Tabs background color on :hover                 |
| \$nav-tabs-color-hover     | Tabs text color on :hover                       |
| \$nav-tabs-bg-active       | Tabs background color when active               |
| \$nav-tabs-color-active    | Tabs text color when active                     |
| \$nav-tabs-content-mb      | Tabs content margin bottom                      |
| \$nav-tabs-content-padding | Tabs content padding                            |
| \$nav-tabs-content-bg      | Tabs content background color                   |
| \$nav-tabs-content-border  | Tabs content border - Use shorthand declaration |

## Vanilla Methods

| Name             | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| tabs.show('#id') | Makes this tab visible, and hides their siblings. No # needed for the ID |

## Events

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| bc.is.visible | Event fired when the layer is done animating and it's visible |
| bc.is.showing | Event fired when the layer is animating to show itself        |
| bc.is.hiding  | Event fired when the layer is animating to hide itself        |
| bc.is.hidden  | Event fired when the layer is done animating and it's visible |
