# Hardware GT

Álbum académico en español. Sitio estático: HTML, CSS y JavaScript, sin compilación.

## Ejecutar

Desde esta carpeta:

```powershell
python -m http.server 4173
```

Abrir http://127.0.0.1:4173/. La portada del libro abre el índice del álbum.

## Páginas

| Archivo | Contenido |
| --- | --- |
| index.html | Portada animada del libro |
| album.html | Inicio, computadora holográfica, FOX e índice de capítulos |
| componentes.html | 28 categorías; 252 modelos, tres por gama |
| celulares.html | Nueve celulares; tres por gama |
| laptops.html | Nueve laptops; tres por gama |
| software.html | Seis sistemas y herramientas |
| acerca.html | Creadores |

Las fichas muestran características importantes, sin bloques de opinión individuales. La recomendación se conserva por separado al final de cada gama. La clasificación de gama es editorial, relativa a cada categoría; no constituye un benchmark. En laptops se indican las variantes de configuración cuando corresponden.

## Dónde editar

- `css/site.css`: estilos compartidos, tarjetas, tema claro/oscuro y responsive.
- `js/site.js`: cambio de tema, volver arriba y animación ambiental del inicio.
- `js/catalog-page.js`: renderizado, búsqueda, gamas y hojas de componentes. No contiene datos de productos.
- `js/hardware-data.js`: catálogo base de hardware y ensamblaje de las categorías.
- `js/catalog-extra.js`: categorías adicionales, variantes y software.
- `js/catalog-tiers.js`: selección de tres modelos por gama.
- `js/devices-data.js`: celulares y laptops, especificaciones y enlace oficial. El campo histórico de opinión ya no se muestra.
- `js/product-specs.js`: especificaciones adicionales verificadas y notas de uso/instalación, sin alterar los datos base.
- `js/hardware-images.js`: 131 fotografías asociadas al modelo exacto, con procedencia.
- `js/product-prices.js`: precio de referencia en quetzales de cada producto (hardware, celulares, laptops y software). Las cotizaciones locales traen tienda y enlace; el resto es una estimación convertida de dólares a Q 7.70 y lo indica en la ficha.
- `js/device-images.js`: asociación explícita de cada dispositivo nuevo con su foto y procedencia.
- `js/tier-advice.js`: 81 recomendaciones editoriales específicas, una por gama de cada categoría de hardware, celulares y laptops. No son rankings automáticos ni afirmaciones de precio.
- `css/page-transition.css`: transición nativa entre portada e inicio. Sin soporte o con movimiento reducido, el enlace conserva la navegación normal.
- `media/devices/`: 18 fotografías nuevas de fabricantes.
- `media/products/`: imágenes heredadas de componentes y software.
- `js/entrance.js`, `css/entrance.css`: portada del libro.
- Otros CSS del inicio conservan la computadora, los orbes y FOX.
- `js/app.js`, `js/album-book.js` y estilos del catálogo anterior se conservan como implementación previa, pero las páginas nuevas no los cargan.

Para añadir un dispositivo, registrar un ID único en devices-data.js y su imagen específica en device-images.js. No reutilizar fotografías de otro modelo. Mantener tres modelos por gama si se conserva el criterio actual.

## Imágenes y pendientes

Los 18 nuevos dispositivos tienen fotografías asociadas a páginas o PDFs oficiales. Las tres Lenovo se extrajeron como JPEG del PDF técnico, sin modificar el contenido. Las fotografías conservan los derechos de sus titulares; la procedencia no equivale a una licencia de redistribución.

Los 252 modelos de hardware, los 18 dispositivos y los 6 programas muestran una fotografía propia; ninguna se repite entre modelos. Las fotografías conservan los derechos de sus titulares; la procedencia no equivale a una licencia de redistribución. Los metadatos de procedencia están en `js/hardware-images.js` y `js/device-images.js`.

## Precios

Todos los productos muestran un precio de referencia en quetzales (GTQ). Si existe una cotización de una tienda guatemalteca, la ficha enlaza a ella; si no, el precio es una estimación (precio de lista en dólares × Q 7.70) y la ficha lo indica. Son orientativos: confirmar vigencia y existencia antes de comprar. Para actualizar un precio, editar su entrada en `js/product-prices.js`.

## Pruebas

Requiere Node.js 20 o posterior:

```powershell
node --test tests/*.test.cjs
```

Validan cantidades, distribución por gama, duplicados, páginas/recursos locales, que todo producto tenga precio en quetzales y una fotografía propia sin repetirse, y la procedencia de las fotos. Estas pruebas no sustituyen la revisión visual del modelo.

## Herramientas de imágenes

`scripts/inspect-device-images.mjs` descubre candidatos; no los aprueba automáticamente.
`scripts/download-device-images.mjs` descarga una selección explícita.
`scripts/extract-lenovo-images.mjs` extrae fotografías de PDFs oficiales y requiere pdf-lib.
Los archivos de .impeccable son resultados de revisión, no recursos necesarios para servir el sitio.

`scripts/research-hardware-images.mjs` descubre candidatos oficiales de hardware y `scripts/import-hardware-images.mjs` descarga la selección revisada. No aprobar imágenes solo porque una URL responda: varias páginas redirigen a otras versiones del producto. Conservar el manifiesto explícito y revisar el modelo antes de ampliar la selección.
