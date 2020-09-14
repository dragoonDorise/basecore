---
name: Breadcrumbs
category: Molecules
---

```breadcrumb.html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="./">Home</a></li>
    <li><a href="./">Library</a></li>
    <li class="breadcrumb__active" aria-current="page"><a href="./">Data</a></li>
  </ol>
</nav>
```

```
<module href="/components/_molecules/_breadcrumb/_breadcrumb.html">
  <li><a href="./">Home</a></li>
  <li><a href="./">Library</a></li>
  <li class="breadcrumb__active" aria-current="page">
    <a href="./">Data</a>
  </li>
</module>
```

## CSS Variables

| Name                            | Description                                |
| ------------------------------- | ------------------------------------------ |
| \$breadcrumb-mb                 | Elements margin bottom                     |
| \$breadcrumb-a-padding          | Inner buttons padding                      |
| \$breadcrumb-a-bg-color         | Inner buttons background color             |
| \$breadcrumb-a-color            | Inner buttons text color when              |
| \$breadcrumb-a-bg-color-hover   | Inner buttons background color when :hover |
| \$breadcrumb-a-color-hover      | Inner buttons text color when :hover       |
| \$breadcrumb-a-active-bg-color  | Inner buttons background color when active |
| \$breadcrumb-a-active-color     | Inner buttons text color when active       |
| \$breadcrumb-caret-border-color | Caret element border color                 |
| \$breadcrumb-caret-height       | Caret element height adjustment            |
| \$breadcrumb-caret-width        | Caret element width adjustment             |
