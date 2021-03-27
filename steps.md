0 Hacer menu inicial para saber si es una instalación nueva o una existente, de momento solo soportaremos instalaciones nuevas de CRA

1 Limpiar carpetas.
src excepto: reportWebVitals.js, setupTests.js

2 Instalar dependencias

- react router npm install --save react-router-dom
- node-sass npm install node-sass --save
- animate.css - REVISAR npm install --save animate.css-react npm install --save animate.css

3 Crear carpetas con su contenido por defecto:

src
components
fonts
hooks
pages
routers

4 Editar el package.json para indicar la variable de entorno para poder usar subcarpetas
"build": "react-scripts build", se cambia por
"build": "PUBLIC_URL=/ react-scripts build",
