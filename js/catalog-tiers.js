// Selección editorial: las gamas no se calculan a partir de precios sin verificar.
// Números = fichas originales; textos = modelos añadidos sin cotización local.
// Formato: marca | modelo | característica diferenciadora | comprobación previa.
window.catalogTiers = {
  procesadores: {
    source: 'https://www.amd.com/en/products/specifications/processors.html',
    guide: 'Compara plataforma, núcleos y refrigeración. Cambiar de socket puede exigir otra placa y otra memoria.',
    baja: [0, 1, 'AMD|Ryzen 3 4100|4 núcleos y 8 hilos; plataforma AM4|Necesita tarjeta gráfica dedicada'],
    media: [2, 3, 'AMD|Ryzen 5 7600X|6 núcleos y 12 hilos; plataforma AM5|Necesita DDR5 y refrigeración compatible'],
    alta: ['AMD|Ryzen 9 7950X|16 núcleos y 32 hilos; AM5|Dimensionar refrigeración y fuente', 'AMD|Ryzen 9 7900X|12 núcleos y 24 hilos; AM5|Valorar si las aplicaciones aprovechan tantos núcleos', 'AMD|Ryzen 9 9950X|16 núcleos y 32 hilos; arquitectura Zen 5|Comprobar BIOS de la placa AM5'],
  },
  motherboards: {
    source: 'https://www.asus.com/us/site/motherboards/am5-x670/',
    guide: 'Primero el socket del procesador; después formato, RAM, conectores y opciones de expansión.',
    baja: [3, 'ASUS|PRIME A520M-K|Plataforma AMD A520; formato micro-ATX|RAM DDR4 y CPU en lista de soporte', 'ASUS|PRIME A620M-K|Plataforma AMD A620; formato micro-ATX|RAM DDR5; revisar conectores disponibles'],
    media: [0, 1, 2],
    alta: ['ASUS|ROG CROSSHAIR X870E HERO|Plataforma AM5 con DDR5 y PCIe 5.0|No compatible con procesadores Intel', 'ASUS|ROG CROSSHAIR X670E HERO|Plataforma AM5; expansión de gama entusiasta|Verificar versión de BIOS', 'ASUS|ROG STRIX X670E-E GAMING WIFI|Plataforma AM5; conectividad Wi-Fi|Comprobar puertos y espacio del gabinete'],
  },
  ram: {
    source: 'https://www.corsair.com/us/en/c/memory',
    guide: 'DDR4 y DDR5 no son intercambiables. Compara kits completos, capacidad y perfil admitido por la placa.',
    baja: [0, 1, 3],
    media: ['Corsair|VENGEANCE 32 GB DDR5|Kit de 32 GB para plataforma DDR5|Elegir SKU y perfil XMP o EXPO compatibles', 'Kingston|FURY Beast 32 GB DDR5|Kit de 32 GB; familia FURY Beast|Confirmar frecuencia y latencias del SKU', 'Crucial|Pro 32 GB DDR5|Kit de 32 GB para ampliar memoria|Revisar lista de compatibilidad de la placa'],
    alta: ['Corsair|DOMINATOR TITANIUM 64 GB DDR5|Mayor capacidad; construcción premium|Confirmar número de módulos y altura', 'Corsair|VENGEANCE 64 GB DDR5|Capacidad para proyectos pesados|Verificar capacidad máxima de la placa', 'Corsair|DOMINATOR TITANIUM 96 GB DDR5|Capacidad orientada a cargas intensivas|Comprobar SKU, BIOS y estabilidad del kit'],
  },
  gpu: {
    source: 'https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/',
    guide: 'Compara resolución objetivo, memoria, consumo y tamaño. El ensamblador no cambia la gama del mismo chip.',
    baja: [0, 1, 3],
    media: ['NVIDIA|GeForce RTX 4060 Ti|Familia RTX 40; opciones de 8 y 16 GB|Comparar la variante exacta de memoria', 'AMD|Radeon RX 7700 XT|12 GB de memoria gráfica|Comprobar fuente y conectores', 'AMD|Radeon RX 7800 XT|16 GB de memoria gráfica|Revisar dimensiones del ensamblador'],
    alta: ['NVIDIA|GeForce RTX 5070 Ti|16 GB GDDR7|Verificar alimentación y espacio', 'NVIDIA|GeForce RTX 5080|16 GB GDDR7; familia Blackwell|Revisar consumo del sistema completo', 'NVIDIA|GeForce RTX 5090|32 GB GDDR7; opción entusiasta|Exige especial atención a fuente y refrigeración'],
  },
  storage: {
    source: 'https://www.samsung.com/us/memory-storage/ssd/',
    guide: 'Revisa SATA frente a NVMe y la generación PCIe del equipo. La velocidad máxima publicada no es constante.',
    baja: [0, 3, 'Samsung|870 EVO 1 TB|SSD SATA de 2.5 pulgadas|Requiere conexión SATA, no ranura NVMe'],
    media: [1, 2, 'Samsung|990 EVO Plus 1 TB|SSD NVMe M.2; familia EVO Plus|Comprobar ranura M.2 y disipación'],
    alta: ['Samsung|990 PRO 2 TB|NVMe PCIe 4.0; 2 TB|Revisar firmware y disipador', 'Samsung|9100 PRO 2 TB|NVMe PCIe 5.0; 2 TB|Para máxima velocidad necesita PCIe 5.0', 'Samsung|990 PRO 4 TB|4 TB en formato M.2|Confirmar compatibilidad de capacidad y espacio'],
  },
  hdd: {
    source: 'https://www.seagate.com/products/hard-drives/barracuda-hard-drive/',
    guide: 'El HDD ofrece capacidad económica, pero es más lento y sensible a golpes que un SSD. Verifica tamaño, bahía y conexión SATA; para NAS o vigilancia elige una unidad diseñada para ese uso.',
    baja: [0, 1, 2],
    media: [3, 4, 5],
    alta: [6, 7, 8],
  },
  scanner: {
    source: 'https://epson.com/For-Work/Scanners',
    guide: 'Para fotos conviene un escáner plano; para pilas de documentos, un alimentador automático dúplex. Compara resolución óptica, velocidad y volumen diario según tu trabajo.',
    baja: [0, 1, 2],
    media: [3, 4, 5],
    alta: [6, 7, 8],
  },
  microcontrollers: {
    source: 'https://docs.arduino.cc/hardware/',
    guide: 'La gama refleja recursos y conectividad para distintos proyectos, no una clasificación universal. Compara voltaje lógico, pines, memoria, radios inalámbricas y entorno de programación; revisa también si la placa es original o compatible.',
    baja: [0, 1, 2],
    media: [3, 4, 5],
    alta: [6, 7, 8],
  },
  psu: {
    source: 'https://www.corsair.com/us/en/c/psu',
    guide: 'No elijas solo por watts o certificación. Revisa protecciones, conectores, garantía y consumo real.',
    baja: [0, 1, 3],
    media: ['Corsair|RM650|Fuente modular de 650 W|Confirmar revisión y conectores', 'Corsair|RM750e|Fuente modular de 750 W|Consultar versión ATX y cable para la GPU', 'Corsair|RM850e|Fuente modular de 850 W|No reutilizar cables modulares de otra fuente'],
    alta: ['Corsair|RM1000e|Fuente modular de 1000 W|Comprobar demanda real antes de sobredimensionar', 'Corsair|HX1000i|Fuente de 1000 W de familia HXi|Verificar longitud y conectividad de control', 'Corsair|HX1500i|Fuente de 1500 W de familia HXi|Reservada para equipos de consumo elevado'],
  },
  monitor: {
    source: 'https://www.lg.com/us/monitors',
    guide: 'Resolución, tamaño, panel y frecuencia deben corresponder a tu GPU y distancia de uso.',
    baja: [0, 1, 3],
    media: [2, 'LG|27GP850-B|Monitor IPS de 27 pulgadas QHD|Confirmar resolución y frecuencia por cada entrada', 'LG|27GN800-B|Monitor IPS QHD de 27 pulgadas|Revisar ajustes del soporte'],
    alta: ['LG|27GS95QE-B|Monitor OLED de 27 pulgadas|Revisar cuidado del panel y garantía', 'LG|32GS95UE-B|Monitor OLED de 32 pulgadas con modo dual|Comprobar capacidad de la GPU y entradas', 'LG|45GR95QE-B|Monitor OLED curvo ultrapanorámico|Necesita espacio y distancia de uso adecuados'],
  },
  keyboard: {
    source: 'https://www.razer.com/gaming-keyboards/find-the-right-fit',
    guide: 'Compara distribución, tipo de interruptor, ruido y tamaño antes de elegir por iluminación.',
    baja: [1, 2, 'Logitech|K120|Teclado USB de tamaño completo|Confirmar distribución en español'],
    media: [0, 3, 'Razer|BlackWidow V3|Teclado mecánico de familia BlackWidow|Elegir tipo de switch y distribución'],
    alta: ['Razer|BlackWidow V4 Pro|Teclado mecánico con controles adicionales|Revisar espacio requerido en el escritorio', 'Razer|Huntsman V3 Pro|Interruptores ópticos analógicos|Valorar si necesitas ajuste de actuación', 'Razer|DeathStalker V2 Pro|Teclado inalámbrico de perfil bajo|Confirmar distribución y autonomía de uso'],
  },
  mouse: {
    source: 'https://www.logitechg.com/en-us/shop/c/logig-mice',
    guide: 'El agarre, tamaño, peso y conexión importan más que un número de DPI elevado.',
    baja: [0, 1, 3],
    media: [2, 'Logitech|G305 LIGHTSPEED|Mouse inalámbrico de la familia LIGHTSPEED|Utiliza pila; considerar peso y agarre', 'Logitech|G502 HERO|Mouse cableado con botones adicionales|Más controles no significan menor peso'],
    alta: ['Logitech|PRO X SUPERLIGHT 2|Mouse inalámbrico orientado a bajo peso|Comprobar forma para tu agarre', 'Logitech|G502 X PLUS|Mouse inalámbrico con iluminación RGB|Prioriza controles frente a ligereza extrema', 'Logitech|G903 LIGHTSPEED|Diseño ambidiestro inalámbrico|Verificar configuración de botones laterales'],
  },
  audio: {
    source: 'https://steelseries.com/arctis-nova',
    guide: 'Prioriza comodidad, micrófono y compatibilidad con tu equipo; comprueba la variante para consola o PC.',
    baja: [0, 1, 3],
    media: [2, 'SteelSeries|Arctis Nova 5 Wireless|Auriculares inalámbricos de familia Nova|Revisar variante y plataformas admitidas', 'HyperX|Cloud III|Auriculares cableados de familia Cloud|Confirmar conectores incluidos'],
    alta: ['SteelSeries|Arctis Nova 7 Wireless|Conectividad inalámbrica; familia Nova 7|Confirmar edición y compatibilidad', 'SteelSeries|Arctis Nova Pro|Sistema cableado con unidad de control|Verificar versión para PC o consola', 'SteelSeries|Arctis Nova Pro Wireless|Sistema inalámbrico de gama premium|Revisar variante y baterías incluidas'],
  },
  network: {
    source: 'https://www.tp-link.com/us/support/download/',
    guide: 'Separa conexión cableada de Wi-Fi. La velocidad depende también del router, cableado y proveedor.',
    baja: [1, 'TP-Link|Archer T2U Nano|Adaptador USB Wi-Fi compacto|Revisar controladores del sistema operativo', 'TP-Link|UE300|Adaptador USB a Ethernet Gigabit|Necesita un puerto USB compatible'],
    media: [0, 2, 'TP-Link|TX201|Adaptador PCIe Ethernet 2.5 Gb|Necesita red 2.5 Gb para aprovecharlo'],
    alta: ['TP-Link|TX401|Adaptador PCIe Ethernet 10 Gb|Requiere infraestructura 10 Gb', 'TP-Link|Archer TXE75E|Adaptador PCIe Wi-Fi 6E|Banda de 6 GHz depende del router y regulación local', 'TP-Link|Archer TBE550E|Adaptador PCIe Wi-Fi 7|Verificar router, controladores y soporte del sistema'],
  },
  webcam: {
    source: 'https://www.logitech.com/en-us/products/webcams.html',
    guide: 'Una buena iluminación suele mejorar más la videollamada que aumentar la resolución.',
    baja: [3, 'Logitech|C310|Webcam HD para videollamadas|Revisar enfoque y resolución admitida', 'Logitech|Brio 100|Webcam Full HD con tapa de privacidad|Confirmar conexión USB disponible'],
    media: [0, 1, 2],
    alta: ['Logitech|Brio 500|Webcam Full HD con encuadre automático|Revisar compatibilidad de funciones con software', 'Logitech|Brio 4K|Webcam con captura 4K|La aplicación de llamadas puede limitar resolución', 'Logitech|MX Brio|Webcam 4K de familia MX|Confirmar conexión y requisitos del equipo'],
  },
  cooling: {
    source: 'https://www.noctua.at/en/products/browse/coolers',
    guide: 'Comprueba socket, altura y espacio sobre la RAM. Un disipador mayor no cabe en cualquier gabinete.',
    baja: [0, 3, 'Cooler Master|Hyper 212 Black Edition|Disipador por aire de torre|Revisar kit para el socket exacto'],
    media: [1, 2, 'Noctua|NH-U9S|Disipador compacto por aire|Comparar altura y necesidades térmicas'],
    alta: ['Noctua|NH-D15|Disipador de doble torre|Revisar separación sobre RAM', 'Noctua|NH-D15 G2|Segunda generación de doble torre|Elegir variante y confirmar altura del gabinete', 'Noctua|NH-U12A|Disipador por aire de familia premium|Verificar kit de montaje incluido'],
  },
  case: {
    source: 'https://www.corsair.com/us/en/c/pc-cases',
    guide: 'Compara flujo de aire, dimensiones y facilidad de montaje. Más tamaño no siempre es necesario.',
    baja: [3, 'Corsair|3000D AIRFLOW|Gabinete con frontal orientado al flujo de aire|Confirmar ventiladores incluidos', 'Cooler Master|MasterBox Q300L|Gabinete compacto micro-ATX|No admite todas las placas ATX'],
    media: [0, 1, 2],
    alta: ['Corsair|5000D AIRFLOW|Gabinete con espacio ampliado para refrigeración|Revisar largo de GPU y radiadores', 'Corsair|7000D AIRFLOW|Gabinete de gran formato|Necesita bastante espacio físico', 'Corsair|6500X|Gabinete de doble cámara|Comprobar compatibilidad de placa y conectores'],
  },
  fans: {
    source: 'https://www.arctic.de/en/products/cooling/case-fan/',
    guide: 'Compara unidades individuales, no el precio de una unidad contra un paquete; comprueba PWM y dimensiones.',
    baja: [0, 2, 'ARCTIC|F12 PWM PST|Ventilador de 120 mm con control PWM|Confirmar conector de cuatro pines'],
    media: [1, 'ARCTIC|P12 Max|Ventilador PWM de 120 mm|Ajustar curva para equilibrar ruido y flujo', 'ARCTIC|P14 Max|Ventilador PWM de 140 mm|Requiere montaje de 140 mm'],
    alta: ['Noctua|NF-A12x25 PWM|Ventilador premium de 120 mm|Comparar presión y ruido según aplicación', 'Noctua|NF-A14x25 G2 PWM|Ventilador de 140 mm de segunda generación|Confirmar espacio de montaje', 'be quiet!|Silent Wings Pro 4 120 mm|Ventilador premium con control de velocidad|Elegir ajuste adecuado a ruido y temperatura'],
  },
  speakers: {
    source: 'https://www.edifier.com/us/product-category/bookshelf-speakers',
    guide: 'Distingue bocinas de escritorio y monitores de mayor tamaño. Revisa entradas y espacio disponible.',
    baja: [0, 1, 3],
    media: [2, 'Edifier|R1280T|Bocinas activas de estantería|Requieren salida de audio compatible', 'Edifier|R1700BT|Bocinas activas con Bluetooth|Revisar entradas y ubicación'],
    alta: ['Edifier|S1000MKII|Bocinas activas de familia S|Comprobar entradas del equipo', 'Edifier|S2000MKIII|Sistema activo de estantería|Necesita espacio a ambos lados del monitor', 'Edifier|S3000 Pro|Sistema activo de gama premium|Valorar tamaño de habitación y colocación'],
  },
  microphone: {
    source: 'https://www.shure.com/en-US/applications/live-streaming',
    guide: 'USB conecta directamente; XLR necesita interfaz. Considera ruido del ambiente y distancia de uso.',
    baja: [0, 1, 3],
    media: [2, 'Shure|MV6|Micrófono USB orientado a gaming|Revisar conexión y software compatible', 'Shure|MV7X|Micrófono dinámico XLR|Necesita interfaz de audio'],
    alta: ['Shure|MV7+|Micrófono de podcast con procesamiento digital|Confirmar funciones en USB y XLR', 'Shure|SM7B|Micrófono dinámico XLR|Necesita interfaz con ganancia suficiente', 'Shure|SM7dB|Micrófono dinámico con preamplificador integrado|Revisar alimentación del preamplificador'],
  },
  printer: {
    source: 'https://epson.com/For-Work/Printers/Inkjet/EcoTank-ET-2800-Wireless-Color-All-in-One-Cartridge-Free-Supertank-Printer-with-Scan-and-Copy/p/C11CJ66201',
    guide: 'Compara costo de tinta, volumen mensual y funciones de escaneo. La nomenclatura cambia según región.',
    baja: [0, 1, 2],
    media: [3, 'Epson|EcoTank ET-2850|Multifunción de tanque de tinta|Confirmar garantía y consumibles en Guatemala', 'Epson|EcoTank ET-3850|Multifunción orientada a oficina|Revisar alimentador y dúplex de la variante'],
    alta: ['Epson|EcoTank ET-4850|Multifunción para oficina con fax|Confirmar soporte regional', 'Epson|EcoTank ET-8500|Multifunción fotográfica de tanque|Verificar tintas y tamaños de papel', 'Epson|EcoTank ET-8550|Impresión fotográfica de formato ampliado|Revisar espacio y disponibilidad de consumibles'],
  },
  'external-ssd': {
    source: 'https://www.samsung.com/us/memory-storage/memory-buying-guide/',
    guide: 'La velocidad real depende del puerto y cable. Compara capacidad y resistencia por separado.',
    baja: [1, 3, 'Samsung|T5 EVO 2 TB|USB 3.2 Gen 1; 2 TB|Prioriza capacidad sobre velocidad máxima'],
    media: [0, 2, 'Samsung|T7 1 TB|USB 3.2 Gen 2; 1 TB|Revisar velocidad del puerto USB'],
    alta: ['Samsung|T9 1 TB|USB 3.2 Gen 2x2; 1 TB|Necesita puerto 20 Gb/s para máximo rendimiento', 'Samsung|T9 2 TB|USB 3.2 Gen 2x2; 2 TB|Muchos puertos USB-C no admiten 20 Gb/s', 'Samsung|T9 4 TB|USB 3.2 Gen 2x2; 4 TB|Comparar necesidad de capacidad y costo'],
  },
  ups: {
    source: 'https://www.cyberpowersystems.com/products/ups/',
    guide: 'VA no equivale a watts ni a minutos. Calcula carga total y revisa autonomía, voltaje y forma de onda.',
    baja: [0, 1, 'CyberPower|CP550SLG|UPS compacto de 550 VA|Consultar potencia en watts y autonomía a tu carga'],
    media: [2, 3, 'CyberPower|CP1000PFCLCD|UPS de familia PFC Sinewave|Revisar watts admitidos y batería'],
    alta: ['CyberPower|CP1500PFCLCD|UPS de onda senoidal de 1500 VA|Confirmar voltaje y consumo conectado', 'CyberPower|PR1500LCD|UPS de familia Smart App Sinewave|Revisar batería y administración', 'CyberPower|OR1500PFCRT2U|UPS para montaje en rack|Confirmar profundidad y formato de instalación'],
  },
  'sound-card': {
    source: 'https://support.creative.com/kb/ShowArticle.aspx?sid=10846',
    guide: 'Una tarjeta interna y un DAC USB se instalan distinto. Revisa entradas, salidas y controladores.',
    baja: [0, 1, 'Creative|Sound Blaster PLAY! 4|Adaptador de audio USB|Verificar micrófono y conector de auriculares'],
    media: [3, 'Creative|Sound Blaster G3|DAC USB orientado a gaming|Confirmar soporte de plataformas', 'Creative|Sound Blaster X4|Interfaz USB de sonido envolvente|Revisar conexiones de tus bocinas'],
    alta: [2, 'Creative|Sound Blaster AE-7|Tarjeta de audio PCIe|Necesita ranura disponible y controladores', 'Creative|Sound Blaster AE-9|Tarjeta PCIe con unidad de control externa|Revisar alimentación adicional y espacio'],
  },
  'card-reader': {
    source: 'https://americas.lexar.com/products/card-reader-accessories/',
    guide: 'Primero el tipo de tarjeta: SD, microSD y CFexpress no son intercambiables.',
    baja: [0, 1, 2],
    media: [3, 'Lexar|Professional USB-C Dual-Slot Reader|Lector de doble ranura USB-C|Confirmar tarjetas y estándar UHS admitido', 'Lexar|Professional Multi-Card 3-in-1 USB 3.2 Gen 1|Lector multitarjeta|Verificar formatos exactos de tarjeta'],
    alta: ['Lexar|Professional CFexpress Type B USB 3.2 Gen 2x2 Reader|Lector específico para CFexpress Type B|No confundir con Type A ni XQD', 'Lexar|Professional Workflow CFexpress 4.0 Type A Reader|Lector profesional Type A|Necesita tarjeta Type A compatible', 'Lexar|Professional Workflow CFexpress 4.0 Type B Reader|Lector profesional Type B|Revisar velocidad del puerto de la computadora'],
  },
  gamepad: {
    source: 'https://www.8bitdo.com/',
    guide: 'Comprueba compatibilidad con PC, consola y tipo de conexión antes de comparar controles adicionales.',
    baja: [0, 1, '8BitDo|Ultimate 2C Wired|Control cableado de familia Ultimate|Confirmar compatibilidad de plataforma'],
    media: [2, 3, '8BitDo|Pro 2|Control con diseño clásico y botones adicionales|Elegir revisión y conexión correctas'],
    alta: ['Xbox|Elite Wireless Controller Series 2|Control personalizable de familia Elite|Revisar accesorios incluidos', 'Sony|DualSense Edge|Control premium de familia PlayStation|Las funciones en PC dependen del juego', 'Razer|Wolverine V3 Pro|Control premium inalámbrico|Confirmar plataforma y modo de conexión'],
  },
  projector: {
    source: 'https://www.benq.com/en-us/projector/home-entertainment.html',
    guide: 'Compara resolución, brillo medido con el mismo estándar y distancia de proyección; no solo lúmenes anunciados.',
    baja: [2, 3, 'BenQ|TH575|Proyector Full HD|Revisar distancia de tiro y luz ambiental'],
    media: [0, 1, 'BenQ|TH685P|Proyector Full HD orientado a entretenimiento|Comprobar latencia en el modo usado'],
    alta: ['BenQ|TK700|Proyector 4K orientado a gaming|Comprobar señal admitida y distancia de tiro', 'BenQ|X3100i|Proyector 4K de familia gaming|Revisar instalación y espacio disponible', 'BenQ|W4000i|Proyector 4K de cine en casa|Aprovecharlo exige controlar la luz de la habitación'],
  },
  mousepad: {
    source: 'https://mysupport.razer.com/app/categories/m/pc/s/gaming-mouse-mats',
    guide: 'Compara superficie, tamaño y facilidad de limpieza. La iluminación no mejora por sí sola la precisión.',
    baja: [0, 1, 2],
    media: [3, 'Razer|Sphex V3|Alfombrilla rígida y delgada|Elegir tamaño según espacio de movimiento', 'Razer|Strider|Superficie híbrida|Valorar deslizamiento frente a control'],
    alta: ['Razer|Firefly V2|Alfombrilla rígida con iluminación RGB|Necesita conexión USB para iluminación', 'Razer|Goliathus Extended Chroma|Alfombrilla textil extendida con RGB|Medir el escritorio antes de comprar', 'Razer|Atlas|Alfombrilla de vidrio|Revisar compatibilidad de patas del mouse y limpieza'],
  },
};

window.applyCatalogTiers = (categories) => {
  const usage = {
    procesadores: ['Estudio, oficina y gaming de entrada', 'Multitarea, programación y gaming', 'Renderizado y trabajo intensivo en paralelo'],
    motherboards: ['Equipos sencillos con expansión limitada', 'Armados equilibrados con más conectividad', 'Armados entusiastas con expansión avanzada'],
    ram: ['Ofimática y gaming con presupuesto contenido', 'Multitarea y proyectos de tamaño medio', 'Máquinas virtuales y proyectos con gran consumo de memoria'],
    gpu: ['Gaming de entrada y creación ligera', 'Gaming y creación con mayor exigencia gráfica', 'Renderizado y juegos exigentes con presupuesto amplio'],
    storage: ['Sistema operativo y archivos de uso diario', 'Bibliotecas de juegos y proyectos frecuentes', 'Proyectos grandes y transferencias exigentes'],
    hdd: ['Ampliar espacio para archivos y copias locales', 'Almacenamiento de escritorio o NAS doméstico', 'Grabación de vigilancia y NAS de mayor capacidad'],
    scanner: ['Digitalizar fotos y documentos ocasionales', 'Digitalización dúplex frecuente en oficina', 'Flujos de documentos de alto volumen o en red'],
    microcontrollers: ['Aprender programación física y controlar sensores sencillos', 'Prototipos conectados y proyectos IoT', 'Robótica o automatización con más recursos e interfaces'],
    psu: ['Equipos de consumo moderado', 'Armados gaming con margen de actualización', 'Estaciones de trabajo con alto consumo'],
    monitor: ['Estudio, oficina y entretenimiento', 'Gaming y trabajo con más espacio visual', 'Experiencias OLED e imagen especializada'],
    keyboard: ['Escritura y uso general', 'Gaming y escritura frecuente', 'Control avanzado y preferencias específicas de actuación'],
    mouse: ['Navegación y gaming casual', 'Gaming con más controles o conexión inalámbrica', 'Uso competitivo o personalización avanzada'],
    audio: ['Clases, llamadas y gaming casual', 'Gaming frecuente y comodidad inalámbrica', 'Control de audio y conectividad avanzada'],
    network: ['Añadir conectividad básica a un equipo', 'Mejorar la conexión doméstica existente', 'Aprovechar una red local de alta velocidad'],
    webcam: ['Clases y videollamadas ocasionales', 'Reuniones frecuentes y contenido Full HD', 'Contenido de mayor resolución o encuadre avanzado'],
    cooling: ['Procesadores de demanda térmica moderada', 'Gaming y cargas sostenidas', 'Cargas intensivas con una instalación bien dimensionada'],
    case: ['Primer armado y espacio contenido', 'Equipo gaming con ventilación y expansión', 'Montajes amplios o refrigeración personalizada'],
    fans: ['Renovar ventilación básica', 'Ajustar flujo de aire y curva PWM', 'Optimizar acústica y refrigeración especializada'],
    speakers: ['Audio de escritorio y videollamadas', 'Música y entretenimiento doméstico', 'Escucha dedicada con espacio de instalación'],
    microphone: ['Clases, llamadas y primeras grabaciones', 'Streaming y podcast en desarrollo', 'Producción de voz con interfaz y entorno adecuados'],
    printer: ['Tareas escolares e impresión doméstica', 'Documentos frecuentes de pequeña oficina', 'Oficina con más funciones o impresión fotográfica'],
    'external-ssd': ['Respaldos y transporte de archivos', 'Proyectos móviles y transferencias frecuentes', 'Archivos grandes en equipos con USB de alta velocidad'],
    ups: ['Respaldo de cargas pequeñas', 'PC y periféricos dentro de la potencia admitida', 'Estaciones de trabajo o instalaciones en rack'],
    'sound-card': ['Sustituir o añadir entradas y salidas básicas', 'Audio para gaming y control de escritorio', 'Configuración de audio dedicada'],
    'card-reader': ['Transferencia de tarjetas de uso cotidiano', 'Trabajo fotográfico con varias tarjetas', 'Flujos de cámaras profesionales con CFexpress'],
    gamepad: ['Gaming casual en plataformas compatibles', 'Gaming frecuente y controles adicionales', 'Personalización avanzada de controles'],
    projector: ['Presentaciones y entretenimiento sencillo', 'Películas y gaming Full HD', 'Cine en casa y contenido 4K'],
    mousepad: ['Superficie uniforme para uso diario', 'Ajustar deslizamiento y espacio de movimiento', 'Materiales especializados o iluminación del escritorio'],
  };
  const manufacturerCatalogs = {
    ASUS: 'https://www.asus.com/motherboards-components/motherboards/all-series/',
    AMD: 'https://www.amd.com/en/products/specifications/processors.html',
    NVIDIA: 'https://www.nvidia.com/en-us/geforce/graphics-cards/',
    Corsair: 'https://www.corsair.com/',
    Kingston: 'https://www.kingston.com/en/memory/gaming/kingston-fury-beast-ddr5-memory',
    Crucial: 'https://www.crucial.com/memory/ddr5',
    Samsung: 'https://www.samsung.com/us/memory-storage/',
    LG: 'https://www.lg.com/us/monitors',
    Logitech: 'https://www.logitech.com/',
    Razer: 'https://www.razer.com/',
    SteelSeries: 'https://steelseries.com/',
    HyperX: 'https://hyperx.com/',
    'TP-Link': 'https://www.tp-link.com/us/support/download/',
    'Cooler Master': 'https://www.coolermaster.com/',
    Noctua: 'https://www.noctua.at/',
    ARCTIC: 'https://www.arctic.de/en/',
    'be quiet!': 'https://www.bequiet.com/',
    Edifier: 'https://www.edifier.com/',
    Shure: 'https://www.shure.com/',
    Epson: 'https://epson.com/',
    CyberPower: 'https://www.cyberpowersystems.com/',
    Creative: 'https://support.creative.com/',
    Lexar: 'https://americas.lexar.com/',
    '8BitDo': 'https://www.8bitdo.com/',
    Xbox: 'https://www.xbox.com/accessories',
    Sony: 'https://www.playstation.com/accessories/dualsense-edge-wireless-controller/',
    BenQ: 'https://www.benq.com/',
  };
  categories.forEach((category) => {
    const selection = window.catalogTiers[category.id];
    if (!selection) throw new Error(`Falta selección para ${category.id}`);
    const originals = category.products;
    category.guide = selection.guide;
    category.products = ['baja', 'media', 'alta'].flatMap((tier) => {
      if (selection[tier].length !== 3) throw new Error(`Se requieren tres modelos: ${category.id}/${tier}`);
      return selection[tier].map((item) => {
        const use = usage[category.id][['baja', 'media', 'alta'].indexOf(tier)];
        if (typeof item === 'number') return { ...originals[item], tier, use, caution: selection.guide };
        const [brand, model, highlight, caution] = item.split('|');
        const catalog = manufacturerCatalogs[brand];
        if (!catalog) throw new Error(`Falta fuente para ${brand}`);
        const domain = new URL(catalog).hostname.replace(/^www\./, '');
        const matchingSource = new URL(selection.source).hostname.endsWith(domain);
        const source = brand === 'AMD' && category.id === 'gpu'
          ? 'https://www.amd.com/en/products/graphics/desktops/radeon.html'
          : matchingSource ? selection.source : catalog;
        return {
          brand, model, tier, use, highlight, caution, source,
          price: 'Por consultar', shop: 'Cotización pendiente', place: 'Verificar disponibilidad en Guatemala',
          image: null, illustrative: true,
          specs: [['Diferencia principal', highlight], ['Antes de comprar', caution]],
        };
      });
    });
    const keys = category.products.map((p) => `${p.brand} ${p.model}`);
    if (new Set(keys).size !== 9) throw new Error(`Modelos duplicados en ${category.id}`);
  });
};
