# Hardware GT

Álbum web interactivo de componentes de hardware orientado al mercado guatemalteco.

## Ejecutar

Abre `index.html` directamente en el navegador. Para una revisión local con servidor, puedes ejecutar:

```bash
python -m http.server 4173
```

## Estructura

- `index.html`: estructura semántica y contenido principal.
- `css/styles.css`: sistema visual, responsive y animaciones.
- `js/app.js`: datos, filtros, búsqueda, contador y navegación.
- `images/`: reservado para fotografías propias y retratos de los creadores.

## Personalización

Los productos, precios, tiendas, fuentes y creadores se editan en `js/app.js` y `index.html`. Los precios son referencias editoriales aproximadas: verifica la tienda y la fecha antes de publicar.

Las imágenes actuales son referencias visuales remotas de Unsplash para prototipado; para una entrega final conviene sustituirlas por fotografías exactas del modelo con licencia de uso o por assets propios de fabricantes/tiendas.
