---
name: Buttons
category: Atoms
---

## btn

Atom used to create the button architecture for the rest of the buttons created. Provide these functionalities to the rest of the buttons:

- btn groups
- btn sizes
- toggle radio
- toggle checkbox

In order to inherit all this properties, any custom button that is created needs to start its CSS selector with .btn-:

We're providing a btn-simple component to use as a simple button component, if you create a new one remember to call it _btn-whatever_ allways starting with _btn-_

```html
<buttton class="btn-simple btn-simple--1" type="button">Button</button>
<buttton class="btn-my-style btn-my-style--primary" type="button">Button</button>
```
