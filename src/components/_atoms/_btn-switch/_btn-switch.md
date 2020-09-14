---
name: Buttons
category: Atoms
---

```btn-switch.html

<div class="btn-switch">
    <input type="checkbox" name="switch" class="btn-switch__checkbox" id="switch" checked>
    <label class="btn-switch__label" for="switch"></label>
</div>
```

```
<module
href="/components/_atoms/_btn-switch/_btn-switch.html"
	locals='{
	"button_id":"button"
	}'>
</module>
```

## Locals

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| button_id | ID of the button, used to check and uncheck it |

## CSS Variables

| Name                        | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| \$btn-switch-width          | Defines the toggle's width                            |
| \$btn-switch-height         | Defines the toggle's height                           |
| \$btn-switch-border         | Defines the toggle's border - use full short property |
| \$btn-switch-transition-in  | Animation when changing state from inactive to active |
| \$btn-switch-transition-out | Animation when changing state from active to inactive |
| \$btn-switch-button-bg      | Toggle background color                               |
| \$btn-switch-bg-active      | Button background when active                         |
| \$btn-switch-bg-inactive    | Button background when inactive                       |
