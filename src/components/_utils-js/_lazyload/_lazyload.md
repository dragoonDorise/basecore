---
name: Lazyload
category: Utils JS
---

Basecore provides a simple out of the box lazyload component.

Once a element has been loaded the class .lazyloaded is added.

### Usage with images

Use a 1x1 transparent gif data-uri based for the src attr and put the real img source in a data-src attribute or/adn data-srcset for responsive images

```lazyload.html
<figure class="img">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="img/lazyload.jpg" alt="">
</figure>

```

### Usage with any other element

Add data-lazyload to your html element

```
<div data-lazyload>
  Content
</div>
```

### Usage with animations

Everytime the lazy loads completes it adds a CSS class ".is-lazyloaded" you can use this to add animations later.

```
.element{
  &.is-lazyloaded{
    @extend .fadeIn;
  }
}
```

## Events

| Name                 | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| bc.animation.started | Event fired when the layer is animating to show itself        |
| bc.animation.ended   | Event fired when the layer is done animating and it's visible |
