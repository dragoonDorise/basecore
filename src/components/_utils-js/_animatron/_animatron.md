---
name: Animatron
category: Animations
---

** Version: 1.0 **

Funciones que permite mostrar y ocultar elementos indicando animaciones de entrada / salida en clases CSS. **El elemento ha de tener la clase is-hidden**

Usa clases CSS para controlar los estados: .is-hidden, .is-hiding, .is-showing, .is-showing-more

## animateIn & animateOut

animatron.animateIn(idToShow, showAnimation)

animatron.animateOut(idToHide, hideAnimation)

```example

animatron.animateIn ('#id-to-show", 'fadeIn')
animatron.animateOut ('#id-to-hide", 'fadeOut')

```

## Events

| Name                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| bc.animation.in.started  | Event fired when the in animation is starting  |
| bc.animation.in.ended    | Event fired when the in animation is done      |
| bc.animation.out.started | Event fired when the out animation is starting |
| bc.animation.out.ended   | Event fired when the out animation is done     |

## animateChain

Función que permite encadenar animaciones CSS

animatron.animateChain([
['#id-animate',delay,'claseCSS']
]);

```example

animating.animateChain([
    ['#id-animate1',100,'clase1'],
    ['#id-animate2',1000,'clase2'],
    ['#id-animate1',500,'clase3'],
    ['#id-animate2',400,'clase4'],
]);


```

Estados de animaciones para mostrar / ocultar elementos. Se usan para las funcionaes animateIn y animateOut, es necesario que se incluyan en un orden específico para que funcionen correctamente:

## Ocultar elementos:

### Orden de clases:

**1 .anim-is-hiding**

Eliminamos la altura del elemento para que cuando deje de ocupar espacio en el DOM la animación sea fluida.

**2 .is-hidden, .anim-is-hidden**

El elemento tiene display:none para evitar que sea visible a lectores de pantalla o validaciones JS

## Mostrar elementos:

### Orden de clases:

**1 .anim-is-showing**

Prepara el elemento para que esté oculto visualmente, para poder animar su altura al ser visible en el siguiente paso

**2 .anim-is-waiting**

El elemento recupera su altura, pero se mantiene sin opacidad a la espera de incluir la animación de entrada, evitando saltos en la pantalla
