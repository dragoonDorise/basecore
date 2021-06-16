---
name: Pagination
category: Atoms
---

```pagination.html

<nav role="navigation" class="pagination" aria-label="Page navigation">
  <ul>
    <li>
      <a href="./" aria-label="Previous">
        <svg class="icon" role="presentation" aria-hidden="true">
            <use xlink:href="../svg/sprite.svg#arrow-left"></use>
        </svg>
      </a>
    </li>

    <li class="is-active">
      <a href="./" aria-label="Page 1">1</a>
    </li>

    <li>
      <a href="./" aria-label="Page 2">2</a>
    </li>

    <li>
      <a href="./" aria-label="Next">
        <svg class="icon" role="presentation" aria-hidden="true">
            <use xlink:href="../svg/sprite.svg#arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</nav>

```

```
<modulehref="/components/atoms/_pagination/_pagination.html">
	<li class="is-active">
		<a href="./" aria-label="Page 1">1</a>
	</li>

	<li>
		  <a href="./" aria-label="Page 2">2</a>
	</li>
</module>

```

## CSS Variables

| Name                      | Description                                     |
| ------------------------- | ----------------------------------------------- |
| \$pagination-border       | Outside border - Use the full short declaration |
| \$pagination-mb           | Element margin botom                            |
| \$pagination-padding      | Pagination inner items padding                  |
| \$pagination-width        | Pagination inner items width                    |
| \$pagination-height       | Pagination inner items height                   |
| \$pagination-font-size    | Font size                                       |
| \$pagination-line-height  | Font line - height                              |
| \$pagination-bg           | Inner items background color                    |
| \$pagination-color        | Inner items text color                          |
| \$pagination-bg-hover     | Inner items background color :hover             |
| \$pagination-color-hover  | Inner items text color :hover                   |
| \$pagination-bg-active    | Inner items background color when active        |
| \$pagination-color-active | Inner items text color when active              |
| \$pagination-icon-color   | Inner items icons color                         |
| \$pagination-icon-size    | Inner items icons size                          |
