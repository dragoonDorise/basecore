---
name: Columns
category: Grid Layout
---

Inside the containers we separate the content in a layout composed of columns based on CSS Grid. Containers are equivalent to rows.

The columns organize the content horizontally and also serve as the maximum size for the interior elements.

In this way we do not need to give a fixed width to a component that limits its behavior, but its width will be defined by the width of its containing column.

In the columns the mediaqueries are made with min, so a col-sm-2 affects all sizes greater than sm. XS is the exception as it has its own grid of 4 columns and not 12.

# Columns

## [data-col-xx="yy"]

xx: Size xs, sm, md, lg or xl

yy: Number of columns, from 1 to 12. 1 to 4 in XS

```grid-layout-columns.html
<div class="container-grid">

    <div class="demo" data-col-sm="4">Column 1</div>

    <div class="demo" data-col-sm="3">Column 2</div>

    <div class="demo" data-col-sm="5">Column 3</div>

</div>
```

## [data-col-start-xx="yy"]

It allows creating gaps between columns indicating the beginning of each of them.

xx: Size xs, sm, md, lg or xl

yy: Column where it will start, 1 being the first.

```grid-layout-start-columns.html
<div class="container-grid">

    <div class="demo" data-col-sm="3" data-col-start-sm="2">Column 1</div>

    <div class="demo" data-col-sm="4">Column 2</div>

    <div class="demo" data-col-sm="3">Column 3</div>

</div>
```

## .container--no-padding

Adding this modifier class we will eliminate the inner margin between columns

```grid-layout-no-padding.html
<div class="container-grid container-grid--no-padding">

    <div class="demo" data-col-sm="4">Column 1</div>

    <div class="demo" data-col-sm="3">Column 2</div>

    <div class="demo" data-col-sm="5">Column 3</div>

</div>
```
