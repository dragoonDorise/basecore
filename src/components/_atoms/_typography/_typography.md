---
name: Typographic scale
category: Atoms
---

Usamos rems para las fuentes con un font-size base de 62.5%, lo que supo que 1.6rem = 16px, haciendo mucho más fácil el uso de esta unidad, más adecuada para webs accesibles.

En breakpoint XS se aplica un ajuste de un % para hacer los textos más pequeños manteniendo la jerarquía, esto supone que todo elemento que tenga su tamaño definido con rems se escalará en el tamaño XS.

# Titulares

```typography.html
<span class="h1">TiemposHeadline, Light, 40px</span>
<span class="h2">TiemposHeadline, Regular, 32px</span>
<span class="h3">TiemposHeadline, Regular, 24px</span>
<span class="h4">WorkSans, Medium, 22px</span>
<span class="h5">WorkSans, Regular, 20px</span>
<span class="h6">WorkSans, Regular, 18px</span>

```

Los titulares pueden tener una versión alternativa con borde añadiendo .h--border y un texto destacado con .h\_\_highlight

```t-border.html
<span class="h1 h--border">TiemposHeadline, Light, <span class="h__highlight">40px</span></span>
<span class="h2 h--border">TiemposHeadline, Regular, 32px</span>
<span class="h3 h--border">TiemposHeadline, Regular, 24px</span>
<span class="h4 h--border">WorkSans, Medium, 22px</span>
<span class="h5 h--border">WorkSans, Regular, 20px</span>
<span class="h6 h--border">WorkSans, Regular, 18px</span>

```

## Mixin

**generate_titles**

Allow us to create different headlings sizes ( a miximun of 6 is recommended)

```css
  generate_titles($title-name, $font-size, $line-height, $font-family, $font-weight,  $color, $mb, $bg:none, $pb:0, $border:0)
```

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| \$title-name  | Name of the headling selector                                |
| \$font-size   | Font size                                                    |
| \$line-height | Font size                                                    |
| \$font-family | Font Family                                                  |
| \$font-weight | Font weight                                                  |
| \$color       | Text color                                                   |
| \$mb          | Margin Bottom                                                |
| \$bg          | Background color - Optional                                  |
| \$pb          | Padding bottom - Optional, use only if you are using borders |
| \$border      | Border - Use shorthand declaration - Optional                |

**Example**

```scss
@include generate_titles("h1", 3.8rem, "Arial", bold, var(--color-text-1), $margin1);
```

```css
.h1 {
  ...;
}
```

# Texto destacado / entradilla

```typography-lead.html
<p class="lead">TiemposHeadline, Light, 80px</p>
```

# Texto corrido

```typography-paragraph.html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nibh at metus hendrerit pretium. Phasellus eu suscipit nulla. Praesent eros mi, fringilla sit amet luctus quis, suscipit ut justo. Fusce <a href="./" class="link-simple link-simple--1">link primary</a> urna eu tristique. Duis et rhoncus nisl. Phasellus massa ligula, finibus ac odio non, <i>suscipit sagittis diam</i>. Sed sit amet <abbr>augue justo</abbr>. Duis condimentum risus id orci
<strong>Bold text</strong> ac massa placerat accumsan. Quisque placerat ut neque id pretium. Aliquam eu ligula nec nibh vestibulum dictum blandit at sapien. Fusce egestas nisl quis eros aliquam, vel pulvinar justo aliquet. Aenean tincidunt, risus nec congue vehicula, metus libero viverra justo, ac cursus eros nulla non mi</p>

<p class="capitular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nibh at metus hendrerit pretium. Phasellus eu suscipit nulla. Praesent eros mi, fringilla sit amet luctus quis, suscipit ut justo.</p>

<mark>mark</mark>
<del>del</del>
<ins>ins</ins>
<sub>sub</sub>
<sup>sup</sup>
<blockquote>blockquote</blockquote>
<address>address</address>
<cite>cita</cite>
<code>code</code>
```

# Texto small

```typography-small.html
<small>lorem ipsum dolor sit amet</small>

```

## CSS Variables

| Name                      | Description                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| \$body-font-size          | Global font size, used as default for all texts                                                                  |
| \$body-font-family        | Global font family, used as default for all texts                                                                |
| \$body-text-color         | Global font color , used as default for all texts                                                                |
| \$body-selection-bg-color | Background color when selecting texts                                                                            |
| \$body-selection-color    | Text color when selecting texts                                                                                  |
| \$xs-adjustment           | Font global size adjustment in XS breakpoint. IE: a value of 50% means all texts are scaled 50% in XS breakpoint |
| \$p-mb                    | Margin bottom for paragraphs                                                                                     |
| \$lead-font-size          | Font size for lead parragraphs                                                                                   |
| \$small-font-size         | Font size for small texts                                                                                        |
