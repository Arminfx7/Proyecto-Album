// Datos adicionales comprobados en las fichas oficiales enlazadas en cada tarjeta.
// Las notas de uso/instalación son orientación editorial, no mediciones de rendimiento.
(() => {
  const additions = {
    'vivobook-go-e1504f': [['Cámara', 'HD de 720p con obturador de privacidad'], ['Memoria', 'LPDDR5 integrada; capacidad según configuración']],
    'ideapad-slim3-15amn8': [['Batería', '47 Wh'], ['Cámara', '720p o 1080p según SKU · obturador de privacidad']],
    'vivobook15-m1502ya': [['Batería', '42 Wh'], ['Cámara', 'HD de 720p con obturador de privacidad']],
    'legion-pro5-16irx9': [['Batería', '80 Wh'], ['Ampliación', 'Dos ranuras DDR5 SO-DIMM · dos M.2 PCIe 4.0 x4']],
    'redmi-13': [['Memoria y almacenamiento', '6 u 8 GB LPDDR4X · 128 o 256 GB eMMC 5.1, según versión'], ['Cámara frontal', '13 MP']],
    'galaxy-a16-5g': [['Carga por cable', 'Hasta 25 W; adaptador compatible vendido por separado'], ['Protección', 'IP54: polvo y salpicaduras; no sumergir']],
    'redmi-note-14': [['Cámara frontal', '20 MP'], ['Audio', 'Altavoces estéreo · conector de 3.5 mm']],
    'galaxy-a56-5g': [['Protección', 'IP67, en condiciones de laboratorio; consultar límites del fabricante']],
    'poco-x7-pro': [['Cámaras traseras', 'Principal de 50 MP con OIS · ultra gran angular de 8 MP'], ['Cámara frontal', '20 MP']],
    'redmi-note-14-pro-5g': [['Batería global', '5110 mAh · carga de 45 W'], ['Cámara frontal', '20 MP']],
    'iphone-16': [['Seguridad', 'Reconocimiento facial Face ID'], ['Conectividad inalámbrica', 'Wi-Fi 7 · Bluetooth 5.3']],
    'galaxy-s25-ultra': [['Procesador', 'Snapdragon 8 Elite for Galaxy'], ['Almacenamiento', '256 GB, 512 GB o 1 TB según versión']],
    'xiaomi-15': [['Batería global', '5240 mAh · carga por cable de 90 W e inalámbrica de 50 W'], ['Cámara frontal', '32 MP']],
    'aspire3-a315-24p': [['Puertos', 'Dos USB-A 3.2 Gen 1 · un USB-C 3.2 Gen 2 · HDMI'], ['Batería', '40 Wh; autonomía variable según uso']],
    'macbook-air-m2': [['Cámara', 'FaceTime HD de 1080p'], ['Peso', '1.24 kg']],
    'ideapad-slim5-14abr8': [['Puertos', 'Dos USB-A · dos USB-C · HDMI 1.4b · lector microSD'], ['Cámara', '1080p e infrarrojos · obturador de privacidad']],
    'zephyrus-g14-2024': [['Batería', '73 Wh'], ['Red inalámbrica', 'Wi-Fi 6E; banda de 6 GHz según disponibilidad regional']],
    'macbook-pro14-m4': [['Cámara', '12 MP Center Stage · video de 1080p'], ['Red inalámbrica', 'Wi-Fi 6E · Bluetooth 5.3']],
  };

  const processors = {
    'AMD|Ryzen 5 7600X': ['6 núcleos / 12 hilos', 'Zen 4', 'Hasta 5.3 GHz', '105 W'],
    'AMD|Ryzen 9 7900X': ['12 núcleos / 24 hilos', 'Zen 4', 'Hasta 5.6 GHz', '170 W'],
    'AMD|Ryzen 9 9950X': ['16 núcleos / 32 hilos', 'Zen 5', 'Hasta 5.7 GHz', '170 W'],
  };

  window.getProductSpecs = (product, category = {}) => {
    const cpu = processors[product.brand + '|' + product.model];
    const rows = cpu ? [
      ['Núcleos e hilos', cpu[0]],
      ['Arquitectura', cpu[1]],
      ['Socket', 'AM5'],
      ['Frecuencia turbo', cpu[2]],
      ['TDP nominal', cpu[3] + ' (no es el consumo total del equipo)'],
      ['Disipador', 'No incluido; requiere refrigeración compatible'],
    ] : (product.specs || []).map(row => [...row]);

    rows.push(...(additions[product.id] || []).map(row => [...row]));
    if (product.use) rows.push(['Uso orientativo', product.use]);
    const caution = product.caution || category.guide;
    if (caution && !rows.some(([, value]) => value === caution)) {
      rows.push(['Revisar al instalar', caution]);
    }
    return rows;
  };
})();
