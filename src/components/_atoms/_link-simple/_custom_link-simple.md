---
name: Links
category: Atoms
---

## Link Simple

Link with a slight color transition on :hover, can be used in `<a>` or `<buttons>`

```link-simple.html
<a href="#" class="link-simple link-simple--1">Enlace 1</a>
<a href="#" class="link-simple link-simple--2">Enlace 2</a>
```

```
  <module
  href="/components/_atoms/_link-simple/_link-simple.html"
    locals='{
    "href":"button",
    "variant":"link-simple--1",
    "text":"Link simple"
    }'
  ></module>
```

## Locals

| Name    | Description                                               |
| ------- | --------------------------------------------------------- |
| href    | Href target                                               |
| variant | CSS Class from variants you create in the custom css file |
| text    | Text to show                                              |

## CSS Variables

| Name                     | Description                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| \$link-simple-transition | Transition time when hover                                                                         |
| \$link-simple-content    | If you want to add any special caracter after the text. http://nealchester.com/special-characters/ |

## Mixin

**generate-link-simple**

Allow us to create different sizes of the Atom

```css
  generate-link-simple($name, $color, $color-hover)
```

| Name          | Description                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| \$name        | Link number or string diferenciator - outputs CSS clases like: link-simple--1, link-simple--2, link-simple--primary, link-simple--secondary |
| \$color       | Text color                                                                                                                                  |
| \$color-hover | Text color when :hover                                                                                                                      |

**Example**

```scss
  generate-link-simple(1, var(--color-text-1), var(--color-text-2))
```

```css
.link-simple--1 {
  ...;
}
```
