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
| componentes.html | 25 categorías; 225 modelos, tres por gama |
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
- `js/hardware-images.js`: 51 fotografías nuevas asociadas al modelo exacto, con procedencia oficial.
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

En el catálogo heredado había 130 modelos que reutilizaban la imagen de otro producto. Se retiró esa asociación. Se incorporaron 51 fotografías oficiales específicas, revisadas visualmente; quedan 79 modelos con “Fotografía exacta pendiente”. Las otras 95 asociaciones heredadas se conservan; no se afirma una auditoría visual exhaustiva de todas ellas. Los metadatos de procedencia están en `js/hardware-images.js`; no equivalen a una licencia de redistribución.

No se publican precios ni puntuaciones de rendimiento en las fichas nuevas.

## Pruebas

Requiere Node.js 20 o posterior:

```powershell
node --test tests/*.test.cjs
```

Validan cantidades, distribución por gama, duplicados, páginas/recursos locales, procedencia de las 18 fotos nuevas y ausencia de imágenes genéricas asignadas a modelos nuevos. Estas pruebas no sustituyen la revisión visual del modelo.

## Herramientas de imágenes

`scripts/inspect-device-images.mjs` descubre candidatos; no los aprueba automáticamente.
`scripts/download-device-images.mjs` descarga una selección explícita.
`scripts/extract-lenovo-images.mjs` extrae fotografías de PDFs oficiales y requiere pdf-lib.
Los archivos de .impeccable son resultados de revisión, no recursos necesarios para servir el sitio.

`scripts/research-hardware-images.mjs` descubre candidatos oficiales de hardware y `scripts/import-hardware-images.mjs` descarga la selección revisada. No aprobar imágenes solo porque una URL responda: varias páginas redirigen a otras versiones del producto. Conservar el manifiesto explícito y revisar el modelo antes de ampliar la selección.
