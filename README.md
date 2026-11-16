# Horno Pajaritos — Landing page para pyme

Landing de una página para una panadería de barrio ficticia en Maipú: hero, servicios con precios, galería con lightbox, testimonios de ejemplo, ubicación con mapa ilustrativo, botón flotante de WhatsApp y formulario de pedidos con validación en el cliente (celular chileno, fecha mínima, etc.).

> Negocio ficticio. Sitio demo diseñado y desarrollado por Mauricio Caneo (HTML, CSS y JavaScript sin frameworks ni build).

## Estructura
- index.html
- assets/css/styles.css
- assets/js/main.js
- CREDITS.md — fuentes y licencias de imágenes y tipografías

## Ver en local
```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```


## Publicar en GitHub Pages
1. Crear el repositorio `demo-landing-pyme` y subir el contenido de esta carpeta a la raíz.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Si el usuario de GitHub o el nombre del repo cambian, actualizar las URLs absolutas (`canonical`, `og:url`, `og:image`) en los HTML, `robots.txt` y `sitemap.xml` (hoy apuntan a `https://mauripy.github.io/demo-landing-pyme/`).

## Características
- Responsive (móvil, tablet, escritorio), navegación con teclado, enlace "saltar al contenido", textos alternativos.
- Imágenes WebP locales con `loading="lazy"`, fuentes WOFF2 alojadas localmente.
- Meta descripción, canonical, Open Graph, favicon SVG, robots.txt y sitemap.xml.
