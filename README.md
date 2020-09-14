# baseCore
Modular, easy to upgrade and high performance HTML framework

## Instalando baseCore por primera vez:

Necesitamos instalar varios paquetes en el Mac:

### Node >12
https://nodejs.org/es/download/

### Parcel
Necesitamos instalar Parcel de manera global
  npm install -g parcel-bundler
De igual manera necesitamos instalar otro paquete para generar el sistema de iconos  
  npm install -g svg-sprite-generator

### Primer setup
Para poder usar basecore necesitamos
  npm install

## Creación de nuevos proyectos

Si queremos usar basecore para un único proyecto ya no es necesaria más configruación, pasa a leer al paso

Opcion A - Usar basecore como librería de componentes globales

Desde la carpeta basecore ejecutamos sh create.sh

Este script creará una nueva carpeta con varios enlace simbólicos para que los archivos principales del proyecto siempre estén en la carpeta de basecore. De esta manera los proyectos siempre están al día con los bugfixes necesarios.

Se entiende que el repositorio local de basecore servirá de librería padre común para todos los proyectos hijos.

Los enlaces simbólicos creados afectan a estos archivos:

  node_modules
  .browserslistrc
  .editorconfig
  .htaccess
  .imageminrd
  .postcssrc
  .posthtmlrc
  imagemin.config.js
  package-lock.json
  package.json
  src/components/atoms/**/*.js
  src/components/atoms/**/_core*.scss

El usar enlaces simbólicos nos ayuda a montar proyectos más ligeros y más fáciles de actualizar pero supone tener especial cuidado, ya que cualquier cambio en alguno de los archivos de la lista anterior supondrá un cambio en el padre, que si se sube al repositorio supondrá un cambio en todo el resto de proyectos.



## Actualizando proyectos hijos
Para actualizar la versión de los proyectos, solo necesitamos hacer un git pull del repositorio de la base. Siempre usar la rama master.

## Ejecutando los proyectos hijos

  npm start

## Compilando proyectos hijos

  npm run build

