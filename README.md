Autoescuela Génesis - README

Descripción:
Este proyecto es el sitio web oficial de Autoescuela Génesis. Está construido con HTML, CSS y JavaScript puro, y hospeda en GitHub Pages con dominio personalizado.

Estructura de archivos:

* index.html       : Página principal con estructura y contenido.
* style.css        : Estilos principales y media-queries para responsive.
* assets/          : Carpeta con imágenes y otros recursos (logo, fotos, favicon).
* README.txt       : Este archivo con instrucciones de uso y despliegue.
* CNAME            : Archivo para dominio personalizado (solo contiene [www.autoescuelagenesis.com](http://www.autoescuelagenesis.com)).

Requisitos:

* Navegador web moderno (Chrome, Firefox, Edge, Safari).
* Git y una cuenta de GitHub (para actualizaciones y despliegue).

Instalación local:

1. Clonar el repositorio:
   git clone [https://github.com/TU\_USUARIO/AutoescuelaGenesis.git](https://github.com/TU_USUARIO/AutoescuelaGenesis.git)
2. Abrir index.html en tu navegador o servir con un servidor local:
   cd AutoescuelaGenesis
   npx http-server  # o python -m http.server

Personalización:

* Cambiar textos y enlaces: Edita index.html.
* Ajustar estilos: Modifica style.css. Las media-queries están al final.
* Slider de imágenes: En el bloque <script> cerca de </body>, se controla el auto-play y botones.
* Redes sociales: Modifica los enlaces dentro del <div class="links">.
* Botón Ubicación: Descomenta y actualiza la URL de Google Maps en index.html.
* SEO/metadata: En <head>, puedes editar meta description, keywords y Open Graph tags.

Despliegue en GitHub Pages:

1. Añadir CNAME en la rama main con tu dominio.
2. Configurar en Settings > Pages y forzar HTTPS.
3. Los cambios en main se publican automáticamente.

Probando en rama de desarrollo:

* Crear rama (seo-test) para pruebas de SEO y responsive.
* No incluir CNAME en esa rama para usar la URL github.io.

Contacto:
Para soporte o dudas, contacta a 
