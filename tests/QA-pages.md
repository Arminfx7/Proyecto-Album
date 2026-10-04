# Revisión local — páginas del catálogo

Fecha: 2026-10-03. Rama: feature-nombre-prueba-ecc. Sin publicación ni merge.

## Resultado

Estructura y comportamiento comprobados localmente. **No considerar completa la petición de imágenes**: faltan 130 fotos específicas de hardware. Se retiraron asociaciones incorrectas en lugar de ocultar el problema.

## Comprobaciones realizadas

- Ocho pruebas Node aprobadas: cantidades, tres por gama, duplicados, recursos, páginas e imágenes nuevas.
- 25 categorías recorridas en navegador: nueve fichas y nueve opiniones en cada una.
- Filtro de gama: tres resultados; búsqueda global Ryzen: siete resultados; búsqueda sin coincidencias: mensaje vacío correcto.
- Botones anterior/siguiente y selector de categoría responden correctamente.
- 18 imágenes nuevas decodificadas en navegador. Se conservan sin recortes mediante object-fit: contain.
- Componentes a 375, 768 y 1440 px: sin desbordamiento horizontal.
- Laptops e inicio a 375 px: sin desbordamiento horizontal.
- Modo claro y oscuro comprobados en el catálogo; tema compartido y compatibilidad con el inicio.
- Inicio conserva computadora y FOX. Animaciones fuera de pantalla se pausan internamente, sin botón de pausa.
- Seis fichas de software y dos retratos cargan.
- Sin errores/advertencias de consola en inicio y componentes durante la revisión.
- Lighthouse snapshot móvil de laptops: accesibilidad, buenas prácticas y SEO 100. Es una revisión automática puntual, no certificación de accesibilidad.
- No se midieron Core Web Vitals de navegación ni se hizo un pase con lector de pantalla.
- Comparación visual automática con baseline: INCONCLUSIVE; no existe baseline aprobado para estas páginas nuevas.

## Pendiente

- Conseguir imágenes exactas de 130 modelos heredados que antes reutilizaban otra foto.
- Auditoría visual exhaustiva y procedencia de las 95 asociaciones de hardware heredadas.
- Completar fichas técnicas heredadas que todavía remiten a la consulta del fabricante.
- Confirmar permisos de redistribución antes de una publicación fuera del contexto académico.

Veredicto: **DO NOT SHIP como entrega completa** por los pendientes de imágenes. La navegación y el catálogo reorganizado quedan disponibles para revisión local.

