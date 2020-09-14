---
name: 01 Orientation 101
category: Code Style Guide
---

# ¡Bienvenido a tu orientación!

![alt text](lost_season_5_dharma_initiative_orientation_kit_banner.jpg "Orientación!")

A lo largo de este documento conocerás las bases comunes de buenas prácticas, arquitectura y de estilo a la hora de escribir código que tenemos dentro de la agencia.

Las ventajas de tener unas pautas comunes a todos son varias:

- Reutilización de codigo dentro y fuera de un mismo proyecto.
- Menos bugs y más rápidez de desarrollo gracias a esa reutilización.
- Comprender la estructuración del código sin querer matar al compañero.
- No reinventar la rueda en cada proyecto y poder
- Un mismo criterio a la hora de trabajar para que sin importar quién de nosotros haga el proyecto, los clientes tengan la misma experiencia.

# Valor añadido: Tecnología al servicio del usuario

¿Qué nos hace diferentes? Cuanta gente sabe HTML, CSS y Javacript? Lo que nos hace diferente es el enfoque con el que tratamos la tecnología, no somos meros ejecutores picando código sin cuestionarnos más allá.

El pilar principal de nuestra metodologia y el mantra bajo la cual hemos de tomar **cualquier decision** es saber exactamente para quien estamos realmente trabajando.

- **No trabajamos para nuestros jefes, ni para nuestros clientes.**

- **No creamos código con premisas de probar el último framework disponible, de llegar a una fecha de entrega, de ahorrar tiempo usando un plugin, de contentar al cliente o al gestor de proyecto.**

Trabajamos por y para el usuario final del activo que crearemos, esto nos hace trabajar con 3 pilares básicos en mente para cualquier decisión que tengamos que tomar: **Performance, Microinteración y Reutilización**.

Toda decisión que tomemos ha de responder a la pregunta de la siguiente sección.

### ¿Mí decisión mejora la experiencia del usario?

Ésta máxima se puede aplicar a varias preguntas que podrás llegar a hacerte a lo largo de tu carrera con nosotros:

- Necesito un carrusel, he visto uno que tiene 20 opciones diferentes, es muy completo!.

_Pregunta: ¿Realmente necesitas un plugin de 100k que sólo hace que la página sea más lenta, que gaste más datos?_

Respuesta: No. Si no hay tiempo de usar alguno de los plugins creados / aprobados internamente ( te contaré más sobre esto más adelante ) busca uno que sea ligero y que cumpla la función que necesitas y que no tenga dependencias de librerías. Usar jQuery no está permitido, con JS vanilla se puede hacer todo sin añadir peso adicional. **Este es un ejemplo de nuestro pilar Performance**

Puedes ver en que afecta el performance en el mundo real aqui: https://wpostats.com

- Tengo un desarrollo que implica interacción con el usuario, según navega se ocultan ciertas capas.

_Pregunta: ¿Pongo un display none y listo?_

Respuesta: Nope. Todas las interacciones que el usuario tiene han de ser fluidas y sutiles para que se perciba como una acción agradable, piensa en la vida real. Todas las sensaciones que son agradables son calmadas y pausadas, aquellas que son bruscas generan en nuestro cerebro una reacción de miedo o repulsión ya que las asociamos con ataques, movimientos bruscos y repentinos. **Este es un ejemplo de nuestro pilar Microninteracción**

Puedes leer más sobre esto aqui: https://uxplanet.org/best-practices-for-microinteractions-9456211aeed0

- Necesito crear una landing nueva.

_Pregunta: ¿Con CSS clásico me sirve, no necesito crear un nuevo proyecto, generar componentes, blablabla, verdad?_

Respuesta: Salvo excepciones muy claras no. Nunca sabes si esa landing sencilla se va a convertir en el inicio de un proyecto más grande donde puedas reutilizar algo o incluso si algunos componentes que necesites ya los pueda haber hecho otro compañero. Si nos ceñimos a nuestra base de código trabajaremos menos y seremos más felices con menos dramas :). **Este es nuestro último pilar: Reutilización**

Recordamos los pilares:

Usamos tecnología orientada al usuario que se desglosa en:

- Performance
- Microinteracción
- Reutilización

# Trabajando con el departamento de diseño visual

Si bien el departamento de diseñadores visuales son especialistas con objetivos, herramientas y skills diferentes nos une algo: La creación de un producto digital.

Es vital que no haya muros con tus compañeros de visual, trabaja siempre con ellos, valida sus diseños antes de que lleguen a cliente, comparte tus desarrollos para que validen que hemos seguido sus directrices, habla con ellos, comparte noticias, somos todos un equipo y cuanto más próximos seamos mejor será nuestro día a día.

Parte de este acercamiento ha supuesto el adoptar metodologías de diseño a como trabajamos en Front, de esta manera creamos sinergias con ellos y conseguimos hablar el mismo lenguaje. Una de estos acercamientos ha generado el uso de Atomic Design como modelo de arquitectura.

Para evitar tener entregables no actualizados usamos Zeplin para las entregas Diseño -> Front.

# Atomic Design.

Es una metodología de diseño que separa un activo en componentes reutilizables, y es la base que usaremos para cumplir con uno de los pilares: **Reutilización.**

![alt text](atomic-design-molecules.png "Atomic Design!")

El uso de estos componentes reutilizables ha desembocado en un Framework similar al conocido Bootstrap con varios componentes básicos predefinidos para reutilizar en todos los proyectos y que se adapta a los pilares del departamento: es ligero, modular y con el uso de microinteraciones en mente.

Más adelante hablaremos de él, pero de momento volvamos a la definición de Atomic Design aplicada a código.

Los componentes se separan según su organización visual y funcional en Átomos, Moléculas y Organismos.

## Atomos

Son los elementos más básicos, cada uno de ellos es una entidad única que al ser definida una única vez se pueden reutilizar en toda la web.

Están formados de HTML + SCSS.
No suelen tener funcionalidad javascript, si lo tienen es sólo para ajustes visuales que le afecten a si mismo, nunca definiremos por ejemplo en un Botón una función de llamada a un Webservice porque entonces ese botón no se podrá reutilizar más, hemos convertido un caso de uso reutilizable en un caso único.

Ejemplo:
Si necesitamos usar botones crearemos un único boton que tendrá el mismo SCSS y mismo HTML en toda la página, de esta manera si cambiamos un botón cambiamos todos, teniendo un comportamiento global y evitando uno de los grandes problemas en Front, las excepciones.

Todos hemos tenido que modificar 4758934 botones que visualmente eran iguales pero cada uno tenía su CSS definido en base al bloque donde vivieran, en lugar de tener un estilo único global.

Ejemplo de átomos:

- Botones
- Checkbox, radio buttons e inputs
- Iconos
- Links
- Loaders
- Tipografía
- Paginación
- Barras de progreso

## Moleculas

Cuando unimos más de un átomo creamos una molécula, es tan reusable como un átomo pero empieza a ganar en complejidad.

Están formados de HTML + SCSS y JS
Suelen tener javascript pero que al igual que los átomos solo es JS que les afecta a ellos mismos como por ejemplo un dropdown que usamos JS para animarlo.

Ejemplo de Moléculas:

- Acordeón
- Mensaje de alerta
- Breadcrumb
- Dropdown
- Modales
- Tablas
- Pestañas
- Tooltip
- Contenedores

## Organismos

Cuando unimos varios atomos y moléculas es cuando tenemos el tipico bloque que vemos en una web y lo que suele usarse como selector para crear CSS: Un buscador, el header y footer de la página, un listado de productos, etc.
Es aqui donde se almacenará la lógica de la aplicación, ya que los componentes que compongan el organismo serán aquellos.

## Aclarando todo con un ejemplo

En el siguiente Wireframes podemos ver varios elementos:

![alt text](wireframe-design-guide.png "Atomic Design!")

Vamos a ver como serían los átomos, moléculas y organismos

### Átomos

![alt text](atoms.png "Atoms!")

En color blanco podéis ver los átomos:

En la cabecera:

- Logo
- Enlace del menú de navegación
- Icono de buscar

Ya en el body:

- Titular Lorem Ipsum ( h1 )
- Parrafo o h2
- Icono de buscar dentro del input
- Input
- Botón

En el listado de productos:

- Foto
- Titular (h3)
- Parrafo

### Moléculas

![alt text](molecules.png "Molecules")

En color blanco podéis ver las moléculas, si os fijais, son la unión de los átomos anteriores.

En la cabecera:

- Los enlaces se unen y forman la molécula "Navegación"

Ya en el body:

- El titular y el parrafo forman una molécula "Titular"
- El icono, el input y el botón se unen para genera molécula "Buscador"

En el listado de productos:

- La foto, el titular y el parrafo se unen para formar una molécula "Producto"

### Organismos

![alt text](organisms.png "Organisms")

En color blanco podéis ver los organismos, aqui hay una sorpresa

En la cabecera:

- El logo, más la Navegación y el icono de buscar crean el organismo Header. Este sería un organismo visual

Ya en el body:

- Se mantiene la molécula de Titular, aqui es donde seguramente pienses..y el Buscador?

En el listado de productos:

- Tenemos un organismo que engloba tanto las moléculas "Producto" como la molécula "Buscador"

La lógica te dira seguramente que porque no hemos creado esta organización de Organismos:

![alt text](organisms-mal.png "Organisms")

Esta es la organización que se haría seguramente en Diseño, pero nosotros tenemos que hacer componentes autocontenidos para que sea drag & drop sin dependencias, esto quiere decir, que cada componente es responsable de almacenar su propio HTML, CSS y JS para que por si mismo pueda funcionar.

Cuando añadimos funcionalidades JS es cuando ya no podemos seguir el mismo criterio que los compañeros de Diseño.

En el ejemplo tenemos un buscador, ese buscador ha de tener un JS para llamar a un WS y con la información devuelta pinte el listado de productos, visualmente no comparten nada, **pero funcionalmente están unidos:** Sin buscador no podemos tener listado de productos y sin listado de productos el buscador no tendría donde pintar los resultados.

Imagina que ese buscador se reutiliza en otra página, visualmente es exactamente igual pero no devuelve resultados de productos, sino resultados de un listado de contactos.

Si defines el funcionamiento a nivel del buscador tendríamos el problema que al reutilizar ese componente la lógica de pintar productos ya no serviría y aparte la parte visual no es la misma, supondría repetir el código para un caso de uso que en realidad visualmente es muy similar, ahora tendríamos que mantener 2 CSS diferentes pero que son lo mismo..

Es por eso que los unimos en un organismo y en ese organismo definimos la funcionalidad, de esta manera:

- La molecula se puede reutilizar en otros organismos donde solo se le definirá la capa funcional.
- El organismo es completo, si lo incluyes en otra página..funcionara
- Si actualizamos la molécula del buscador cambiando el botón...ese cambio se replicará a todos los organismos que la emplen.

Como ves, con esta forma de organizar el código hacemos proyectos muy muy reutilizables y mantenibles, supone un poco de más pensamiento al inicio pero al final merece muchisimo la pena, imagina un proyecto donde ya tienes el 80% hecho por otros compañeros y solo tienes que importar componentes y crear una lógica nueva :D

## Templates y páginas

Un template sería ya una sección web como puede ser una home donde hemos unido varios organismos y tenemos algo que el usuario ya puede usar. Si el template tiene contenido real lo llamamos página.

Por hacerlo más sencillo siempre hablaremos de Páginas y obviaremos los templates porque a nivel de código son lo mismo y solo cambia el contenido.

Una duda que pueden surgirte es:

- Si creo un botón cuadrado y de repente aparece un botón rectangular dentro de un sólo organismo, puedo usar la cascada de CSS para que sólo ese botón tenga ese comportamiento diferente?

La lógica te puede decir que si, que para un solo botón usemos la cascada y modifiquemos las propiedades de ese único botón pero lo más seguro es que más adelante veas ese mismo botón y tengas que volver a crear una excepción y como hemos visto antes hay que evitar las excepciones.

En este caso habría que crear un nuevo botón independiente. Tranquil@, más adelante veras como, aun queda un poco más de literatura hasta ver algo de código!

## Construcción de páginas con Atomic Design

Por norma general la primera página que diseño te entrega no es una página como tal sino un UI Kit donde están definidos los átomos, moleculas, etc. con este Kit inicial podrás ir creando una buena cantidad de componentes antes de tener que crear código nuevo para el proyecto.

Antes de seguir comentar que usamos Jira para toda la gestión de proyecto

Sabiendo eso el proceso de trabajo es el siguiente:

- Hacer catálogo de los atomos, moléculas, etc que hay que realizar y trasladarlo a Jira para poder hacer seguimiento, cada átomo / molécula / Organismo será una tarea en Jira.

- Una vez que tengamos hecho el Pattern Library ( el UIKIT convertido en código ) es el momento de crear páginas. Verás que una vez que has creado los componentes que se definen en el Pattern Library la creación del proyecto ahora es muy muy rápida.

- Una vez hayas hecho tu proceso de QA de navegadores no olvides compartir con diseño tu creación para que ellos puedan hacer su parte de QA visual antes de enseñarlo a cliente.
