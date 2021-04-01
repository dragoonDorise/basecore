---
name: Containers
category: Grid Layout
---

Containers limit the maximum width of the content and in turn provide a 12-column grid using CSS Grid

## .container-grid

Self-centered, they give lateral limit to the content that will go inside rows respecting responsive cuts

```
<div class="container-grid"></div>
```

## .container-grid--fluid

Unlimited width, they fit 100% of the screen

```
<div class="container-grid container-grid--fluid"></div>
```

## .container-grid--mixed

They are adjusted to 100% of the screen up to a maximum defined in a variable, at which time they become fixed

```
<div class="container-grid container-grid--mixed"></div>
```
