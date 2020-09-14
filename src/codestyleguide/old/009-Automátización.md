---
name: 09 Automatización
category: Code Style Guide
---

Gracias al poder de Gulp y a su comunidad BaseCore permite desde el minuto 1 multitud de automatizaciones.

## Configuración de gulp

Dentro del archivo config.json podemos configurar variables de rutas del proyecto:

```
{
	"gitName" : "basecore",
	"indexPath" : "./",
	"imgCMS" : "img",
	"theme" : "theme",
	"scss" : "theme/scss",
	"css" : "theme/css",
	"js" : "theme/js",
	"fonts" : "theme/fonts",
	"svg" : "theme/svg",
	"img" : "theme/img",
	"components" : "theme/components",
	"blocks" : "theme/blocks",
	"ext" : "html",
	"app" : "http://localhost/basecore/"
}
```

Dentro del archivo config.json podemos configurar datos secretos como el API de mailgun o los datos SFTP para subir las imagos para hacer pruebas de mails. Este archivo ha de estar en el gitignore ya que contiene información delicada!

```
{
	"mailgunAPI" : "basecore",
	"mailgunSender" : "",
	"sftpHost": "192.168.1.1",
	"sftpPort": "2220",
	"sftpUser": "user",
	"sftpPass": "pass",
	"sftpRemotePath": "/var/www/vhosts/dominio.com/test/new",
}
```

### 9.1 Automatizaciones disponibles:

# _To do: Añadir Template a la documentación para cliente._

Template a usar en cada uno de los plugins de Gulp:

```
Nombre
Descripción
Uso: gulp xxxx
Link al plugin
```

- Build process desde SRC
- Browsersync
- Sass
- Sass modular
- PostCSS
- CSS Concat + Minify
- CSS Critical
- JS Lint
- JS Concat
- JS Minify
- Mail Inliner
- Mail sender
- Sftp Upload
- Icon SVG Generator
- Icon Font Generator
- Favicon Generator
- Static HTML Generator
- Variables
- Partials
- UIKit Generator
- IMG Optimization
- SVG Optimization

#### 9.1.1 SVG icon system

Para crear un sistema de iconos que permita usar varios colores y varios tamaños en BaseCore usamos svg externos

```
 <svg class="icon icon--xs" role="presentation">
    <use xlink:href="../theme/svg/symbol/svg/sprite.symbol.svg#twitter"></use>
</svg>
```

Crear un icono es tan fácil como copiar su archivo nombre.svg en **theme/svg/icons** y ejecutar el comando de gulp, esta tarea se encargará de optimizar el SVG y de crear el symbol.

```
gulp svgicon
```

Si bien se recomienda el uso de un Icon system ( https://css-tricks.com/icon-fonts-vs-svg/ ), **BaseCore** incluye la arquitectura necesaria para usar Icon fonts si así fuera necesario. En este caso la fuente se crea copiando el archivo en la carpeta **theme/svg/icons** y ejecutar el comando de gulp

```
gulp iconfont
```
