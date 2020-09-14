---
name: 04 Componentes
category: Code Style Guide
---

Componente es aquel conjunto de código reutilizable, puede ser sólo HTML, HTML + CSS o HTML + CSS + JS.

Por defecto BaseCore viene con varios componentes fácilmente personalizables gracias al concepto **Core - Custom**

Ejemplo de componentes:

    ⁃	Modal
    ⁃	Botones
    ⁃	Listas
    ⁃	Tipografía
    ⁃	Tabs
    ⁃	etc

Estos componentes se unirán para formar los bloques, que a su vez se unen para formar estructuras que formarán las páginas del proyecto.

**Bloque : contenedor + tipografía + img + botón**

**Componente -> bloque -> estructura -> página**

Es por esto que la estructura de los componentes es **inalterable** independientemente de su contenedor / bloque.

**Un botón .btn-simple siempre tendrá el mismo comportamiento sin importar donde se encuentre.**

### 4.1 - Arquitectura de componentes, dualidad Core - Custom.

```
_nombre-componente
  _core_nombre-componente.scss
  _custom_nombre-componente.scss
  _core_nombre-componente.js
  _LIB_nombre-componente.js
```

#### 4.1.1 - \_core_nombre-componente.scss

Cada componente tiene un archivo en el cual aparecen propiedades CSS que no son personalizables ya que forman parte del funcionamiento del componente. A este CSS le llamaremos CSS Funcional

En este archivo además irá la documentación en markdown sobre el módulo que luego Hologram convertirá en una UIKit viva.

#### 4.1.2 - \_custom_nombre-componente.scss

En el archivo \_custom introduciremos todas las propiedades personalizables del componente ya sean colores, márgenes, paddings, etc. Es lo que se conoce como CSS Decorativo.

Estas propiedades van dentro de variables CSS siguiendo el patrón definido en las escalas para que sean fáciles de personalizar y de transplantar entre proyectos.

El separar Core de Custom nos permite actualizar componentes y solucionar bugs con sólo actualizar el archivo \_core_nombre-componente.scss sin perder las personalizaciones de estilo.

Estos SCSS serán compilados en un único CSS en theme/css/styles.min.css para aprovechar la cache del navegador, para solventar que este CSS crezca demasiado y afecte al performance aplicaremos técnicas WPO como "Critical Path" que puedes ver aquí o leer más adelante.

**Ejemplo de separación CSS \_core y \_custom**

Partiendo de un componente "modal", tenemos la propiedad CSS:

    position: absolute

Esta propiedad ira en **\_core** al ser una propiedad funcional que no afecta al aspecto visual

    background: reba(0,0,0,.5)

Esta propiedad irá en \_custom al ser una propiedad visual que no afecta al comportamiento funcional.

#### 4.1.3 - \_nombre-componente.js

Cada componente aparte del marcado HTML y los estilos CSS tiene también su lógica JS y al igual que los CSS, será compilado a un único JS de carga asíncrona en themes/js/async.js.

### 4.2 - ¿Cómo construir tu propio componente?

Creamos la estructura de carpetas descrita antes:

```
_nombre-componente
	_core_nombre-componente.scss
	_custom_nombre-componente.scss
	_nombre-componente.hbs
	_LIB_nombre-componente.js
```

Empezamos a definir los estilos del componente en \_core siguiendo los consejos de buenas prácticas CSS y una vez que lo tengamos testado y funcionando duplicamos su contenido a \_custom.

- Caso completo

```
.modal-overlay{
	position: fixed;
	height: 100vh;
	width: 100vw;
	opacity: 0;
        background: rgba(0,0,0,.5);

	&.is-visible{
		animation-name: modal-show;
		animation-duration: 1s;
		opacity: 1;
	}

	&.is-hidden{
		animation-name: modal-hide;
		animation-duration: 1s;
		opacity: 0;
	}


}

```

Pasamos a eliminar en \_core las lineas que correspondan a colores, márgenes, paddings y demás dejando sólo aquellas propiedades que no puedan cambiar para mantener el correcto funcionamiento del componente.

```

.modal-overlay{
	position: fixed;
	height: 100vh;
	width: 100vw;
	opacity: 0;

	&.is-visible{
		opacity: 1;
	}

	&.is-hidden{
		opacity: 0;
	}

}

```

En \_custom hacemos lo mismo pero al contrario, dejando sólo las propiedades que personalicen el look & feel del componente, colores, bordes, paddings, animaciones, etc.

```
@keyframes modal-show {
    ...
}

@keyframes modal-hide {
    ...
}

.modal-overlay{
	opacity: 0;
        background: rgba(0,0,0,.5);;

	&.is-visible{
		animation-name: modal-show;
		animation-duration: 1s;
	}

	&.is-hidden{
		animation-name: modal-hide;
		animation-duration: 1s;
	}

}
```

Una vez que esté limpio pasaremos a cambiar las propiedades por variables con esta nomenclatura:

```
// --------------------------------------------------
// Template variables para componentes
// --------------------------------------------------


//Variables para CSS habitual
// $component-padding:
// $component-mb:
// $component-bg-color:
// $component-color-text:
// $component-border:
// $component-border-radius:

// $component-subcomponent-color:
// $component-subcomponent-bg-color:
// $component-subcomponent-padding:
// $component-subcomponent-content:

// $component-subcomponent-color-hover:
// $component-subcomponent-bg-color-hover:

// Variables opcionales como border, shadowbox han de tener un if porque no siempre se usará
```

```
$modal-backdrop-bg: var(--color-bg-1);

@keyframes modal-show {
    ...
}

@keyframes modal-hide {
    ...
}

.modal-overlay{
	opacity: 0;
  background: $modal-backdrop-bg;

	&.is-visible{
		animation-name: modal-show;
		animation-duration: 1s;
	}

	&.is-hidden{
		animation-name: modal-hide;
		animation-duration: 1s;
	}


}
```

Estas variables siempre que se pueda tendrán como valor otras variables de las Escalas.

```
$modal-backdrop-bg: var(--color-bg-1);
```

Importante añadir la documentación en el .md

#### En el .scss creamos la documentación principal:

````
/*doc
---
title: Nombre del componente
name: nombre-del-componente
category: Components NombreDelComponente
---

Descripción de como funciona el componente, comentarios sobre casos de uso o implicaciones especiales.
```html_example

Código HTML

`` `

*/
````

### 4.3 ¿Cómo construir tu propio componente a partir de un plugin de terceros?

Es tan fácil como crear una carpeta con su nombre dentro de la carpeta \_vendor y renombrar sus archivos para que siga la nomenclatura de BaseCore. Para no complicar la integración de plugins de terceros no aplicamos la dualidad \_core / \_custom.

Ejemplo:

```
 _vendor/_jq-slickslider
   _jq-slickslider.scss
   _js-slickslider.js
```

Un bloque, al igual que un componente es un snippet de código reutilizable pero que al contrario que los componentes su cantidad dentro de un proyecto será mayor

Ejemplo de bloques:

    ⁃	header
    ⁃	footer
    ⁃	slider
    ⁃	hero-banner
    ⁃	product-block
    ⁃	etc.

### 5.1 Arquitectura de bloques

La arquitectura de los bloques es similar a la de los componentes, pero al ser bloques que se han de estar creando y modificando con más asiduidad que los componentes se prescinde de la estructura Core - Custom para no perder agilidad.

```
_nombre-bloque
	_nombre-bloque.scss
	_nombre-bloque.html
	_LIB_nombre-bloque.js
```

#### 5.1.1 \_nombre-bloque.scss

Propiedades del bloque, al ser seguramente un elemento creado adhoc para el proyecto, el CSS \_core y el CSS \_custom no se separa pero el CSS \_custom sí se ha de crear mediante variables de _Escalas_ para facilitar su mantenimiento y grantizar su transplantabilidad.

#### 5.1.2 \_nombre-bloque.hbs

En el caso de los proyectos de HTML estático éste html se usará como HTML parcial a la hora de construir las estructuras y páginas del proyecto. Cada bloque tiene un HTML inmutable a lo largo del proyecto, es por ello que se recomienda hacer un bloque a máximos e ir renderizando mediante condicionales y reemplazar los posibles textos o demás partes contribuibles por variables

```
<div class="block-user">
	<div class="block-user__img">
		<img width="200" height="400" class="lazyload" src="../html/img/blank.gif"
			data-src="../html/img/user.jpg"
			alt=""
		/>
	</div>
	<div class="block-user__text">
		<span class="h3">@@1.text</span>
		<p>@@2.text</p>
		<a class="link-simple" href="">Saber más</a>
	</div>
</div>
```
