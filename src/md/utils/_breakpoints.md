---
name: Breakpoints
category: Grid Layout
---

12-column, 32px (16 + 16) grid of interior gutter with various responsive slices:

| Name | Min    | Max    | Container |
| ---- | ------ | ------ | --------- |
| xs   | 320px  | 767px  | 100%      |
| sm   | 768px  | 991px  | 720px     |
| md   | 992px  | 1199px | 944px     |
| lg   | 1200px | 1439px | 1136px    |
| xl   | 1440px | -      | 1248px    |

In the XS cut the grid becomes 4 columns

These responsive cuts can be used in the column system to vary the width of the components according to the responsive cut

```grid.html
<div class="container-grid">
    <div class="demo" data-col-md="3">Content</div>
</div><!-- row -->
```
