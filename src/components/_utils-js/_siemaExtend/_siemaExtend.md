---
name: siemaExtend
category: Utils JS
---

** Version: 1.0 **

Enables navigation and arrows to Siema Sliders.

** Dot Group Navigation: **

```
	onInit: function(){
		siemaCreateGroupDots(this.config.loop, this, sliderSelector);
	},
```

** Dot per item Navigation:**

```
	onInit: function(){
		siemaCreateDots(this.config.loop, this, sliderSelector);
	},
```

**Arrow navigation:**

```
	onInit: function(){
		siemaCreateArrows(this, sliderSelector);
	},
```

It's important to init the sliders like this:

- 1 Declare the selector in the variable sliderSelector

- 2 Declare the slides per breakpoint using variables slidesXS, slidesSM, slidesMD, etc.

```
var sliderSelector = '#demo-slider';

if (document.querySelector(sliderSelector)){

	var heroSiema = new Siema({
	  selector: sliderSelector,
	  perPage: {
	    320: slidesXS = 1,
	    768: slidesSM = 2,
	    992: slidesMD = 3,
	    1200: slidesLG = 3,
		1440: slidesXL = 4
	  },
	  onInit: function(){
	    siemaCreateDots(this.config.loop, this, sliderSelector);
	    siemaCreateArrows(this, sliderSelector);
	  },
	});

}
```

The final HTML should look like this:

```demo.html

	<div id="hero-slides" class="js-siema-slides">
		<div class="item">A</div>
		<div class="item">B</div>
		<div class="item">C</div>
		<div class="item">D</div>
	</div>

	<div>

		<button type="button" class="js-siema-prev">

		Prev

		</button>

		<button type="button" class="js-siema-next">

		Next

		</button>

	</div>

	<nav class="js-siema-dots"></nav>

```
