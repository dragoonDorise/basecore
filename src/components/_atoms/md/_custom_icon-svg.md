---
name: Icon System - SVG
category: Atoms
---

The icons are created from SVG arranged in the src/svg/icons/ folder using an SVG + CSS system that allows you to change their color or size using CSS, these are the defined sizes:

| CSS      | Icon size |
| -------- | --------- |
| icon--xs | 12x12     |
| icon--sm | 16x16     |
| icon--md | 24x24     |
| icon--lg | 32x32     |
| icon--xl | 128x128   |

```icon-svg.html
<svg class="icon icon--xs" role="presentation">
  <use xlink:href="../svg/sprite.svg#twitter"></use>
</svg>
<svg class="icon icon--sm" role="presentation">
  <use xlink:href="../svg/sprite.svg#twitter"></use>
</svg>
<svg class="icon icon--md" role="presentation">
  <use xlink:href="../svg/sprite.svg#twitter"></use>
</svg>
<svg class="icon icon--lg" role="presentation">
  <use xlink:href="../svg/sprite.svg#twitter"></use>
</svg>
<svg class="icon icon--xl" role="presentation">
  <use xlink:href="../svg/sprite.svg#twitter"></use>
</svg>

```
