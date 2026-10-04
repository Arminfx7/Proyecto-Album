# Apertura y recomendaciones — 2026-10-04

## Cambios

- Se quitó la espera de 950 ms que ocultaba el libro antes de navegar.
- La transición entre documentos comienza con la página de destino disponible. La navegación sigue siendo un enlace HTML real.
- Fondo tecnológico de pantalla completa con circuitos, órbitas y puntos luminosos. Superficies grandes estáticas; movimiento limitado a transformaciones, opacidad y pequeños trazos SVG.
- 81 elecciones editoriales con explicaciones independientes y una insignia en la ficha elegida.
- No se cambia la recomendación automáticamente para favorecer un resultado de búsqueda. Si la elección queda fuera del filtro, se omite su panel.

## Verificación

- 11 pruebas Node aprobadas.
- 25 categorías recorridas: tres paneles y tres insignias por categoría.
- Celulares: elección media POCO X7 Pro, consistente con el texto. Buscar Samsung oculta las recomendaciones no coincidentes; buscar X7 conserva su panel.
- Portada a 375×844, 768×1024, 1440×900 y 844×390: sin desbordamiento horizontal; toda la portada cabe en la altura probada.
- Prueba Playwright con Chrome: transición de llegada alcanzó ready; navegación por clic, regreso y reapertura por Enter correctas. Cero errores JS durante ese recorrido.
- Movimiento reducido: órbitas sin animación y navegación funcionando.
- Se probaron claro y oscuro en las recomendaciones; ejemplo móvil revisado visualmente.
- Lighthouse snapshot de celulares: accesibilidad 100, buenas prácticas 100, SEO 100. No equivale a una auditoría manual completa.
- La primera prueba de clic automatizado esperaba que terminara la flotación infinita; se corrigió la prueba para pulsar el centro visible del libro con el ratón.
- No se midieron Core Web Vitals en dispositivos físicos. No se promete idéntica fluidez en todo hardware o navegador.
- Regresión visual contra baseline: INCONCLUSIVE, sin referencia aprobada para la portada nueva.

## Veredicto

SHIP para estos cambios locales de navegación y recomendaciones; no se publicó ni se mezcló con main. Continúan los pendientes de fotografías heredadas documentados en QA-pages.md.

Referencia técnica: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
