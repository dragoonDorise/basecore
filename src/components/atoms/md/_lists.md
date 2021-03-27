---
name: Lists
category: Atoms
---

Vertical list

```lists.html
<ul class="list">
  <li>Item</li>
  <li>Item</li>
</ul>
```

```
<module
href="/components/atoms/_lists/_lists.html"
  locals='{
  "variant":""
  }'
>
	<li>Option</li>
	<li>Option</li>
</module>

```

## Locals

| Name    | Description                              |
| ------- | ---------------------------------------- |
| variant | list--inline, list--bullets, list--icons |

Horizontal list

```lists-inline.html
<ul class="list list--inline">
  <li>Item</li>
  <li>Item</li>
</ul>
```

```
<module
href="/components/atoms/_lists/_lists.html"
  locals='{
  "variant":"list-inline"
  }'
>
	<li>Option</li>
	<li>Option</li>
</module>
```

Order list

```lists-order.html
<ol class="list">
  <li>Item</li>
  <li>Item</li>
</ol>
```

Con bullets, bullet creado mediante :before

```lists-bullets.html
<ul class="list list--bullets">
  <li>Item</li>
  <li>Item</li>
</ul>
```

```
<module
href="/components/atoms/_lists/_lists.html"
  locals='{
  "variant":"list--bullets"
  }'
>
	<li>Option</li>
	<li>Option</li>
</module>
```

Con iconos SVG

```lists-icons.html
<ul class="list list--icons list--icons--xs">
    <li>
        <div class="text">
            <svg class="icon"><use xlink:href="../svg/sprite.svg#twitter"></use></svg>
            Lorem ipsum dolor sit amet
        </div>
    </li>
</ul>
<ul class="list list--icons list--icons--sm">
    <li>
        <div class="text">
            <svg class="icon"><use xlink:href="../svg/sprite.svg#twitter"></use></svg>
            Lorem ipsum dolor sit amet
        </div>
    </li>
</ul>
<ul class="list list--icons list--icons--md">
    <li>
        <div class="text">
            <svg class="icon"><use xlink:href="../svg/sprite.svg#twitter"></use></svg>
            Lorem ipsum dolor sit amet
        </div>
    </li>
</ul>
<ul class="list list--icons list--icons--lg">
    <li>
        <div class="text">
            <svg class="icon"><use xlink:href="../svg/sprite.svg#twitter"></use></svg>
            Lorem ipsum dolor sit amet
        </div>
    </li>
</ul>
```

```
<module
href="/components/atoms/_lists/_lists.html"
  locals='{
  "variant":"list--icons list--icons--md"
  }'
>
	<module
  href="/components/atoms/_lists/_lists-icons.html"
  locals='{
    	"text":"Option",
      "icon":"twitter"
  }'
  ></module>
	<module
  href="/components/atoms/_lists/_lists-icons.html"
  locals='{
    	"text":"Option",
      "icon":"twitter"
  }'
  ></module>
</module>


```

## Locals

| Name | Description                   |
| ---- | ----------------------------- |
| text | Text to show next to the icon |
| icon | Id of the icon to show        |

## CSS Variables

| Name                 | Description                             |
| -------------------- | --------------------------------------- |
| \$list-mb            | Margin bottom of the list               |
| \$list-li-mb         | Margin between items of the list        |
| \$list-bullets-size  | Size of size bullet                     |
| \$list-bullets-top   | Adjustment position of list bullet      |
| \$list-bullets-color | Bullet color                            |
| \$ol-padding         | Padding left width to show an OL number |

Lista de definición

```lists-def.html
<dl class="desc-list">
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

Lista de definición horizontal

```lists-def-horizontal.html
<dl class="desc-list desc-list--horizontal">
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

## CSS Variables

| Name                 | Description                                      |
| -------------------- | ------------------------------------------------ |
| \$desc-list-mb       | Margin bottom of the definition list             |
| \$desc-list-dt-mb    | Margin bottom of the definition term item        |
| \$desc-list-dd-mb    | Margin bottom of the definition description item |
| \$desc-list-dt-width | Width of the definition term item                |
