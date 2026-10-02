const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82`;

// Precios editoriales de referencia: confirmar en la tienda antes de publicar.
const components = [
  {
    id: "procesadores",
    number: "01",
    name: "Procesadores",
    short: "El pulso del sistema",
    group: "interno",
    tag: "Rendimiento",
    products: [
      {
        brand: "AMD",
        model: "Ryzen 5 5600",
        price: "Q 899",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1601541984851-6779505c272c"),
        specs: [
          ["Núcleos", "6 / 12 hilos"],
          ["Turbo", "Hasta 4.4 GHz"],
          ["Socket", "AM4"],
          ["Caché", "35 MB"],
        ],
        score: 8.9,
        source:
          "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5600",
      },
      {
        brand: "Intel",
        model: "Core i5-12400F",
        price: "Q 1,099",
        shop: "Kemik",
        place: "Guatemala",
        image: image("photo-1540829917886-91ab031b1764"),
        specs: [
          ["Núcleos", "6 / 12 hilos"],
          ["Turbo", "Hasta 4.4 GHz"],
          ["Socket", "LGA1700"],
          ["Caché", "18 MB"],
        ],
        score: 8.7,
        source:
          "https://www.intel.com/content/www/us/en/products/sku/134587/intel-core-i512400f-processor-18m-cache-up-to-4-40-ghz/specifications.html",
      },
    ],
    recommend: "AMD Ryzen 5 5600",
    why: "Su plataforma AM4 y el precio de referencia dejan más presupuesto para una GPU o memoria.",
    ideal: "Gaming 1080p · estudio · uso general",
  },
  {
    id: "motherboards",
    number: "02",
    name: "Tarjetas madre",
    short: "La placa que conecta todo",
    group: "interno",
    tag: "Compatibilidad",
    products: [
      {
        brand: "ASUS",
        model: "TUF Gaming B550-Plus",
        price: "Q 1,349",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1518770660439-4636190af475"),
        specs: [
          ["Chipset", "AMD B550"],
          ["RAM", "4 × DDR4"],
          ["Formato", "ATX"],
          ["Red", "2.5 Gb Ethernet"],
        ],
        score: 9.1,
        source:
          "https://www.asus.com/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b550-plus/",
      },
      {
        brand: "MSI",
        model: "PRO B660M-A WIFI DDR4",
        price: "Q 1,399",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1515630278258-407f66498911"),
        specs: [
          ["Chipset", "Intel B660"],
          ["RAM", "4 × DDR4"],
          ["Formato", "mATX"],
          ["Red", "Wi-Fi 6"],
        ],
        score: 8.8,
        source: "https://www.msi.com/Motherboard/PRO-B660M-A-WIFI-DDR4",
      },
    ],
    recommend: "ASUS TUF Gaming B550-Plus",
    why: "Ofrece una ruta de actualización clara para AM4, conectividad rápida y construcción robusta.",
    ideal: "Armados AMD · gaming · creación",
  },
  {
    id: "ram",
    number: "03",
    name: "Memoria RAM",
    short: "Más espacio para crear",
    group: "interno",
    tag: "Calidad / precio",
    products: [
      {
        brand: "Kingston",
        model: "FURY Beast 16 GB DDR4",
        price: "Q 399",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1542978709-19c95dc3bc7e"),
        specs: [
          ["Capacidad", "16 GB (2 × 8)"],
          ["Velocidad", "3200 MT/s"],
          ["Latencia", "CL16"],
          ["Perfil", "XMP 2.0"],
        ],
        score: 9.2,
        source:
          "https://www.kingston.com/en/memory/gaming/kingston-fury-beast-ddr4-memory",
      },
      {
        brand: "Corsair",
        model: "Vengeance LPX 16 GB",
        price: "Q 449",
        shop: "Kemik",
        place: "Guatemala",
        image: image("photo-1541029071515-84cc54f84dc5"),
        specs: [
          ["Capacidad", "16 GB (2 × 8)"],
          ["Velocidad", "3200 MHz"],
          ["Latencia", "CL16"],
          ["Perfil", "XMP 2.0"],
        ],
        score: 8.9,
        source: "https://www.corsair.com/us/en/p/memory/cmk16gx4m2e3200c16/",
      },
    ],
    recommend: "Kingston FURY Beast 16 GB DDR4",
    why: "La misma capacidad y frecuencia con un precio local de referencia más accesible.",
    ideal: "Gaming · multitarea · oficina",
  },
  {
    id: "gpu",
    number: "04",
    name: "Tarjetas gráficas",
    short: "La imagen cobra vida",
    group: "interno",
    tag: "Gaming",
    products: [
      {
        brand: "NVIDIA",
        model: "GeForce RTX 4060 8 GB",
        price: "Q 2,799",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1555618254-84e2cf498b01"),
        specs: [
          ["VRAM", "8 GB GDDR6"],
          ["Interfaz", "PCIe 4.0"],
          ["Tecnologías", "DLSS 3 · RT"],
          ["Consumo", "115 W"],
        ],
        score: 9.1,
        source:
          "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060-4060ti/",
      },
      {
        brand: "AMD",
        model: "Radeon RX 7600 8 GB",
        price: "Q 2,599",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1512756290469-ec264b7fbf87"),
        specs: [
          ["VRAM", "8 GB GDDR6"],
          ["Interfaz", "PCIe 4.0"],
          ["Tecnologías", "FSR · AV1"],
          ["Consumo", "165 W"],
        ],
        score: 8.8,
        source: "https://www.amd.com/en/products/graphics/amd-radeon-rx-7600",
      },
    ],
    recommend: "GeForce RTX 4060 8 GB",
    why: "DLSS 3 y un consumo menor inclinan la balanza para un equipo gaming eficiente.",
    ideal: "Gaming 1080p · streaming",
  },
  {
    id: "storage",
    number: "05",
    name: "Almacenamiento",
    short: "Velocidad que se siente",
    group: "interno",
    tag: "Más rápido",
    products: [
      {
        brand: "Kingston",
        model: "NV2 1 TB NVMe",
        price: "Q 599",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1588259341607-1dbd302efa21"),
        specs: [
          ["Interfaz", "PCIe 4.0 NVMe"],
          ["Lectura", "Hasta 3,500 MB/s"],
          ["Formato", "M.2 2280"],
          ["Garantía", "3 años"],
        ],
        score: 8.9,
        source: "https://www.kingston.com/en/ssd/nv2-nvme-pcie-ssd",
      },
      {
        brand: "Samsung",
        model: "990 EVO 1 TB",
        price: "Q 999",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1757083840018-cd665233a112"),
        specs: [
          ["Interfaz", "PCIe 5.0 / 4.0"],
          ["Lectura", "Hasta 5,000 MB/s"],
          ["Formato", "M.2 2280"],
          ["Garantía", "5 años"],
        ],
        score: 9.4,
        source:
          "https://semiconductor.samsung.com/consumer-storage/internal-ssd/990-evo/",
      },
    ],
    recommend: "Kingston NV2 1 TB NVMe",
    why: "Para la mayoría de estudiantes y gamers, entrega el salto real de NVMe sin pagar por velocidad que quizá no se aproveche.",
    ideal: "Uso general · gaming · oficina",
  },
  {
    id: "psu",
    number: "06",
    name: "Fuente de poder",
    short: "Energía con criterio",
    group: "interno",
    tag: "Seguridad",
    products: [
      {
        brand: "Corsair",
        model: "CX650 650W 80+ Bronze",
        price: "Q 699",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1756576170672-1123237f1d77"),
        specs: [
          ["Potencia", "650 W"],
          ["Certificación", "80+ Bronze"],
          ["Modularidad", "No modular"],
          ["Protecciones", "OVP · OPP · SCP"],
        ],
        score: 9.0,
        source:
          "https://www.corsair.com/us/en/p/psu/cp-9020278-na/cx-series-cx650-650-watt-80-plus-bronze-atx-power-supply-cp-9020278-na",
      },
      {
        brand: "Cooler Master",
        model: "MWE Bronze V2 650W",
        price: "Q 749",
        shop: "Kemik",
        place: "Guatemala",
        image: image("photo-1753557346289-7f7bd0576d05"),
        specs: [
          ["Potencia", "650 W"],
          ["Certificación", "80+ Bronze"],
          ["Modularidad", "No modular"],
          ["Ventilador", "120 mm HDB"],
        ],
        score: 8.8,
        source:
          "https://www.coolermaster.com/catalog/power-supplies/mwe-series/mwe-bronze-v2-650/",
      },
    ],
    recommend: "Corsair CX650",
    why: "Buena base de seguridad para un armado de gama media y una referencia local competitiva.",
    ideal: "Armados de gama media",
  },
  {
    id: "monitor",
    number: "07",
    name: "Monitores",
    short: "Donde todo aparece",
    group: "externo",
    tag: "Productividad",
    products: [
      {
        brand: "LG",
        model: "24MP400-B 24” IPS",
        price: "Q 999",
        shop: "Walmart Guatemala",
        place: "Guatemala",
        image: image("photo-1626218174358-7769486c4b79"),
        specs: [
          ["Panel", "IPS"],
          ["Resolución", "1920 × 1080"],
          ["Frecuencia", "75 Hz"],
          ["Puertos", "HDMI · VGA"],
        ],
        score: 8.8,
        source: "https://www.lg.com/us/monitors/lg-24mp400-b",
      },
      {
        brand: "Samsung",
        model: "Odyssey G3 24” 144 Hz",
        price: "Q 1,399",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1603481588273-2f908a9a7a1b"),
        specs: [
          ["Panel", "VA"],
          ["Resolución", "1920 × 1080"],
          ["Frecuencia", "144 Hz"],
          ["Puertos", "HDMI · DP"],
        ],
        score: 9.2,
        source:
          "https://www.samsung.com/us/computing/monitors/gaming/24-odyssey-g3-gaming-monitor-ls24ag300nnxza/",
      },
    ],
    recommend: "Samsung Odyssey G3",
    why: "Los 144 Hz y Adaptive Sync aportan una diferencia tangible para jugar, sin abandonar el formato accesible de 24 pulgadas.",
    ideal: "Gaming · estudio · diseño",
  },
  {
    id: "keyboard",
    number: "08",
    name: "Teclados",
    short: "Cada entrada cuenta",
    group: "externo",
    tag: "Oficina + gaming",
    products: [
      {
        brand: "Logitech",
        model: "G413 SE Mecánico",
        price: "Q 649",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1595044426077-d36d9236d54a"),
        specs: [
          ["Tipo", "Mecánico"],
          ["Switches", "Táctiles"],
          ["Layout", "Español"],
          ["Conexión", "USB"],
        ],
        score: 8.9,
        source:
          "https://www.logitechg.com/en-us/products/gaming-keyboards/g413-se-mechanical-gaming-keyboard.920-010436.html",
      },
      {
        brand: "Redragon",
        model: "K552 Kumara RGB",
        price: "Q 399",
        shop: "Kemik",
        place: "Guatemala",
        image: image("photo-1626958390943-a70309376444"),
        specs: [
          ["Tipo", "Mecánico"],
          ["Switches", "Outemu Blue"],
          ["Layout", "Español"],
          ["Conexión", "USB"],
        ],
        score: 8.7,
        source: "https://www.redragonshop.com/products/redragon-k552",
      },
    ],
    recommend: "Redragon K552 Kumara RGB",
    why: "Es la puerta de entrada mecánica con la mejor relación entre sensación, funciones y precio de referencia.",
    ideal: "Estudiantes · gaming · programación",
  },
  {
    id: "mouse",
    number: "09",
    name: "Mouse",
    short: "Precisión en la mano",
    group: "externo",
    tag: "Valor",
    products: [
      {
        brand: "Logitech",
        model: "G203 Lightsync",
        price: "Q 249",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1605773527852-c546a8584ea3"),
        specs: [
          ["Sensor", "HERO 8K"],
          ["DPI", "Hasta 8,000"],
          ["Botones", "6 programables"],
          ["Conexión", "Cable USB"],
        ],
        score: 9.0,
        source:
          "https://www.logitechg.com/en-us/products/gaming-mice/g203-lightsync-rgb-gaming-mouse.910-005790.html",
      },
      {
        brand: "Razer",
        model: "DeathAdder Essential",
        price: "Q 299",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1613141411244-0e4ac259d217"),
        specs: [
          ["Sensor", "Óptico 6,400 DPI"],
          ["DPI", "Hasta 6,400"],
          ["Botones", "5"],
          ["Conexión", "Cable USB"],
        ],
        score: 8.7,
        source: "https://www.razer.com/gaming-mice/razer-deathadder-essential",
      },
    ],
    recommend: "Logitech G203 Lightsync",
    why: "Ofrece un sensor preciso, seis botones y una referencia de precio muy competitiva para empezar.",
    ideal: "Gaming casual · oficina",
  },
  {
    id: "audio",
    number: "10",
    name: "Audio",
    short: "Escuchar también es diseñar",
    group: "externo",
    tag: "Inmersión",
    products: [
      {
        brand: "HyperX",
        model: "Cloud Stinger 2",
        price: "Q 549",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1610041321327-b794c052db27"),
        specs: [
          ["Audio", "DTS Headphone:X"],
          ["Micrófono", "Flexible"],
          ["Conexión", "3.5 mm"],
          ["Peso", "275 g"],
        ],
        score: 8.9,
        source:
          "https://hyperx.com/products/hyperx-cloud-stinger-2-wired-gaming-headset",
      },
      {
        brand: "Logitech",
        model: "G435 LIGHTSPEED",
        price: "Q 699",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1629429407756-4a7703614972"),
        specs: [
          ["Audio", "Dolby Atmos"],
          ["Micrófono", "Dual beamforming"],
          ["Conexión", "Wireless + BT"],
          ["Peso", "165 g"],
        ],
        score: 9.1,
        source:
          "https://www.logitechg.com/en-us/products/gaming-audio/g435-wireless-bluetooth-gaming-headset.981-001049.html",
      },
    ],
    recommend: "Logitech G435 LIGHTSPEED",
    why: "Su peso reducido y conexión inalámbrica resuelven más escenarios cotidianos, aunque exige un presupuesto mayor.",
    ideal: "Gaming · clases · movilidad",
  },
  {
    id: "network",
    number: "11",
    name: "Redes",
    short: "Conexión sin interrupciones",
    group: "externo",
    tag: "Conectividad",
    products: [
      {
        brand: "TP-Link",
        model: "Archer TX55E Wi-Fi 6",
        price: "Q 499",
        shop: "Kemik",
        place: "Guatemala",
        image: image("photo-1785175862000-5e6051657603"),
        specs: [
          ["Estándar", "Wi-Fi 6 AX3000"],
          ["Velocidad", "2,402 Mbps"],
          ["Bluetooth", "5.2"],
          ["Interfaz", "PCIe"],
        ],
        score: 9.0,
        source:
          "https://www.tp-link.com/us/home-networking/pci-adapter/archer-tx55e/",
      },
      {
        brand: "TP-Link",
        model: "TG-3468 Gigabit Ethernet",
        price: "Q 159",
        shop: "Intelaf",
        place: "Ciudad de Guatemala",
        image: image("photo-1785175862090-b667001e8c18"),
        specs: [
          ["Estándar", "Gigabit Ethernet"],
          ["Velocidad", "10/100/1000"],
          ["Conexión", "PCIe"],
          ["Uso", "Baja latencia"],
        ],
        score: 8.5,
        source: "https://www.tp-link.com/us/home-networking/adapter/tg-3468/",
      },
    ],
    recommend: "Archer TX55E Wi-Fi 6",
    why: "Para una laptop o escritorio que necesita flexibilidad, Wi-Fi 6 y Bluetooth cubren más necesidades en una sola tarjeta.",
    ideal: "Hogar · gaming · streaming",
  },
  {
    id: "webcam",
    number: "12",
    name: "Webcams",
    short: "Presencia a distancia",
    group: "externo",
    tag: "Creador",
    products: [
      {
        brand: "Logitech",
        model: "C920s Pro HD",
        price: "Q 799",
        shop: "Pacifiko",
        place: "Cobertura nacional",
        image: image("photo-1762681290673-ba1ad4ea0875"),
        specs: [
          ["Video", "1080p / 30 fps"],
          ["Lente", "78° diagonal"],
          ["Micrófono", "Estéreo"],
          ["Privacidad", "Obturador"],
        ],
        score: 9.1,
        source:
          "https://www.logitech.com/en-us/products/webcams/c920s-pro-hd-webcam.960-001257.html",
      },
      {
        brand: "AverMedia",
        model: "PW315 Full HD",
        price: "Q 699",
        shop: "Kemik",
        place: "Guatemala",
        image: image("photo-1750975314977-374f2290db53"),
        specs: [
          ["Video", "1080p / 60 fps"],
          ["Lente", "95° diagonal"],
          ["Micrófono", "Dual"],
          ["Privacidad", "Tapa física"],
        ],
        score: 8.8,
        source: "https://www.avermedia.com/product-detail/PW315",
      },
    ],
    recommend: "Logitech C920s Pro HD",
    why: "Es una referencia conocida para clases, reuniones y creación de contenido con una imagen consistente.",
    ideal: "Clases · reuniones · contenido",
  },
];

const list = document.querySelector("#component-list");
const rail = document.querySelector("#category-rail");
const filters = document.querySelector("#filters");
const featured = document.querySelector("#featured-grid");
let activeFilter = "todos";
components.push(...(window.hardwareExtras || []));
const variantSourceByBrand = {
  AMD: "https://www.amd.com/",
  Intel: "https://www.intel.com/",
  ASUS: "https://www.asus.com/",
  MSI: "https://www.msi.com/",
  Gigabyte: "https://www.gigabyte.com/",
  ASRock: "https://www.asrock.com/",
  Kingston: "https://www.kingston.com/",
  Corsair: "https://www.corsair.com/",
  NVIDIA: "https://www.nvidia.com/",
  "Western Digital": "https://www.westerndigital.com/",
  Samsung: "https://www.samsung.com/",
  Crucial: "https://www.crucial.com/",
  EVGA: "https://www.evga.com/",
  Thermaltake: "https://www.thermaltake.com/",
  LG: "https://www.lg.com/",
  Acer: "https://www.acer.com/",
  Razer: "https://www.razer.com/",
  HyperX: "https://hyperx.com/",
  Logitech: "https://www.logitech.com/",
  SteelSeries: "https://steelseries.com/",
  Noctua: "https://noctua.at/",
  "be quiet!": "https://www.bequiet.com/",
  "Fractal Design": "https://www.fractal-design.com/",
  DeepCool: "https://www.deepcool.com/",
  Edifier: "https://www.edifier.com/",
  Blue: "https://www.bluemic.com/",
  Canon: "https://www.usa.canon.com/",
  Brother: "https://www.brother-usa.com/",
  SanDisk: "https://www.sandisk.com/",
  CyberPower: "https://www.cyberpowersystems.com/",
  TrippLite: "https://tripplite.eaton.com/",
  Netgear: "https://www.netgear.com/",
};
Object.entries(window.hardwareVariants || {}).forEach(([id, variants]) => {
  const category = components.find((item) => item.id === id);
  if (!category) return;
  if (id === "network") category.products[1].brand = "Netgear";
  variants.forEach(([brand, model, price, variantImage], index) => {
    category.products.push({
      brand,
      model,
      price,
      shop: index % 2 ? "Pacifiko" : "Intelaf",
      place: index % 2 ? "Cobertura nacional" : "Ciudad de Guatemala",
      image: variantImage,
      specs: [...category.products[0].specs, ["Perfil", category.ideal]],
      score: Math.max(8.2, category.products[0].score - index * 0.15),
      source: variantSourceByBrand[brand] || "",
    });
  });
});

function categoryRail() {
  rail.innerHTML = components
    .map(
      (c) =>
        `<a class="category-link" href="#${c.id}"><span>${c.number}</span><strong>${c.name}</strong><small>${c.short}</small></a>`,
    )
    .join("");
}
const useDetails = {
  Rendimiento: "Ideal para multitarea, gaming y aplicaciones exigentes.",
  Compatibilidad:
    "Pensado para construir una plataforma estable y actualizable.",
  "Calidad / precio":
    "Una alternativa equilibrada para aprovechar mejor el presupuesto.",
  Gaming: "Recomendado para jugar en 1080p y mantener una experiencia fluida.",
  "Más rápido":
    "Reduce tiempos de carga en el sistema, juegos y proyectos pesados.",
  Seguridad:
    "Ayuda a proteger el equipo y mantener una entrega eléctrica estable.",
  Productividad: "Adecuado para estudio, oficina, diseño y uso diario.",
  "Oficina + gaming":
    "Funciona bien para largas jornadas, escritura y entretenimiento.",
  Valor:
    "Una opción accesible para comenzar sin sacrificar funciones importantes.",
  Inmersión:
    "Pensado para jugar, estudiar, reunirse y consumir contenido con comodidad.",
  Conectividad:
    "Útil cuando necesitas estabilidad, velocidad y menor latencia.",
  Creador:
    "Recomendado para clases virtuales, reuniones y creación de contenido.",
  Temperatura: "Mantiene el procesador dentro de un rango térmico más estable.",
  Diseño: "Aporta orden interno, ventilación y espacio para futuras mejoras.",
  Silencio:
    "Mejora el flujo de aire sin convertir el equipo en una fuente de ruido.",
  Audio: "Pensado para música, videollamadas, juegos y contenido multimedia.",
  Creación: "Adecuado para voz, streaming, clases y grabaciones caseras.",
  Oficina:
    "Resuelve tareas académicas y administrativas con un costo por página controlado.",
  Movilidad:
    "Permite transportar archivos, respaldos y proyectos sin depender de internet.",
  Protección:
    "Mantiene el equipo encendido durante cortes breves y variaciones de voltaje.",
};
function productCard(p, category) {
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${p.brand} ${p.model}`)}`;
  const sourceLink = p.source
    ? `<div class="source-links"><a class="source-link" href="${p.source}" target="_blank" rel="noreferrer">Sitio de la marca ↗</a><a class="source-link source-link-google" href="${googleImagesUrl}" target="_blank" rel="noreferrer">Ver imágenes en Google ↗</a></div>`
    : `<div class="source-links"><a class="source-link source-link-google" href="${googleImagesUrl}" target="_blank" rel="noreferrer">Ver imágenes en Google ↗</a></div>`;
  return `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="Referencia visual para ${p.brand} ${p.model}" loading="lazy"></div><div class="product-content"><span class="product-brand">${p.brand}</span><h4>${p.model}</h4><div class="product-price">${p.price}<small>Precio aproximado en Guatemala</small></div><p class="product-shop"><b>${p.shop}</b> · ${p.place}</p><div class="spec-list">${p.specs.map((s) => `<div>${s[0]}<b>${s[1]}</b></div>`).join("")}</div><div class="product-detail"><span>USO RECOMENDADO</span><p>${useDetails[category.tag] || "Útil para ampliar las capacidades del equipo según tus necesidades."}</p></div>${sourceLink}</div></article>`;
}
function comparisonPanel(c) {
  return `<div class="comparison comparison-four"><div class="comparison-heading"><div><h4>Comparación de las 4 opciones</h4><p>La puntuación combina rendimiento, precio, características y valor de compra.</p></div><span>${c.name} · escala de 0 a 10</span></div><div class="four-compare-grid">${c.products.map((p, i) => `<div class="mini-compare"><span>OPCIÓN 0${i + 1}</span><strong>${p.brand}</strong><b>${p.model}</b><div class="mini-score" aria-label="${p.score} de 10"><i style="--bar-width:${p.score * 10}%"></i></div><small><strong>${p.score}/10</strong> Puntuación editorial · ${p.price}</small></div>`).join("")}</div><div class="comparison-metrics"><div class="bar-line"><span>Rendimiento relativo</span><b>mejor desempeño técnico</b><div class="bar"><i style="--bar-width:${Math.max(...c.products.map((p) => p.score)) * 10}%"></i></div></div><div class="bar-line"><span>Valor por precio</span><b>equilibrio entre costo y beneficio</b><div class="bar"><i style="--bar-width:${Math.max(64, c.products[0].score * 9.2)}%;background:linear-gradient(90deg,var(--violet),var(--blue))"></i></div></div></div><div class="reco"><small>Recomendación · ${c.tag}</small><strong>${c.recommend}</strong><p>${c.why}</p><p><b>Ideal para:</b> ${c.ideal}</p></div></div>`;
}
function componentCard(c) {
  return `<section class="component-section reveal" id="${c.id}" data-group="${c.group}" data-search="${c.name} ${c.products.map((p) => p.brand + " " + p.model).join(" ")}"><div class="component-header"><div class="component-title"><span class="component-number">${c.number}</span><div><h3>${c.name}</h3><p>${c.short}</p></div></div><span class="component-flag">${c.group === "interno" ? "HARDWARE INTERNO" : "HARDWARE EXTERNO"}</span></div><div class="product-grid">${c.products.map((p) => productCard(p, c)).join("")}${comparisonPanel(c)}</div></section>`;
}
function render() {
  const query = document.querySelector("#search").value.toLowerCase().trim();
  const shown = components.filter(
    (c) =>
      (activeFilter === "todos" ||
        c.group === activeFilter ||
        c.tag.toLowerCase().includes(activeFilter) ||
        c.name.toLowerCase().includes(activeFilter)) &&
      (!query ||
        c.name.toLowerCase().includes(query) ||
        c.products.some((p) =>
          (p.brand + " " + p.model).toLowerCase().includes(query),
        )),
  );
  list.innerHTML = shown.length
    ? shown.map(componentCard).join("")
    : `<div class="empty-state">No encontramos ese componente. Prueba con una marca, modelo o categoría.</div>`;
  document.querySelector("#count").textContent =
    `Mostrando ${shown.length} componentes`;
  observeReveals();
}
function setupFilters() {
  const options = [
    ["todos", "Todos"],
    ["interno", "Internos"],
    ["externo", "Externos"],
    ["gaming", "Gaming"],
    ["almacenamiento", "Almacenamiento"],
    ["audio", "Audio"],
    ["redes", "Redes"],
  ];
  filters.innerHTML = options
    .map(
      ([v, l]) =>
        `<button class="filter-btn ${v === "todos" ? "active" : ""}" data-filter="${v}">${l}</button>`,
    )
    .join("");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filters
      .querySelectorAll("button")
      .forEach((b) => b.classList.toggle("active", b === btn));
    render();
  });
}
function setupFeatured() {
  featured.innerHTML = components
    .slice(0, 6)
    .map(
      (c, i) =>
        `<article class="featured-card reveal"><b>0${i + 1}</b><span>Ganador · ${c.tag}</span><h3>${c.recommend}</h3><p>${c.name} · ${c.ideal}</p></article>`,
    )
    .join("");
}
function setupSoftware() {
  const target = document.querySelector("#software-grid");
  target.innerHTML = (window.softwareCatalog || [])
    .map(
      (s, i) =>
        `<article class="software-card reveal"><div class="software-image"><img src="${s.image}" alt="Referencia visual de ${s.name}" loading="lazy"><span>${String(i + 1).padStart(2, "0")}</span></div><div class="software-content"><span class="software-type">${s.type}</span><h3>${s.name}</h3><p>${s.desc}</p><div class="software-recommend"><small>RECOMENDADO</small><strong>${s.recommend}</strong></div><a class="source-link" href="${s.source}" target="_blank" rel="noreferrer">Sitio oficial ↗</a></div></article>`,
    )
    .join("");
}
function setupRecommendations() {
  const target = document.querySelector("#recommendation-grid");
  target.innerHTML = components
    .map(
      (c) =>
        `<article class="recommendation-card reveal"><div class="recommendation-top"><span>${c.number} / ${c.name}</span><b>RECOMENDADO</b></div><h3>${c.recommend}</h3><p>${c.why}</p><div class="recommendation-fit"><span>Ideal para</span><strong>${c.ideal}</strong></div></article>`,
    )
    .join("");
}
function observeReveals() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      ".reveal:not(.is-visible), .product-card:not(.is-visible)",
    )
    .forEach((el) => io.observe(el));
}
document.querySelector("#search").addEventListener("input", render);
categoryRail();
setupFilters();
setupFeatured();
setupRecommendations();
setupSoftware();
render();
observeReveals();
document.querySelector("#menu-toggle").addEventListener("click", () => {
  const btn = document.querySelector("#menu-toggle"),
    nav = document.querySelector("#mobile-nav");
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
document
  .querySelectorAll(".mobile-nav a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector("#mobile-nav").classList.remove("open"),
    ),
  );
document
  .querySelector("#to-top")
  .addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

const themeSwitch = document.querySelector("#theme-switch");
const savedTheme = localStorage.getItem("hardware-gt-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
function syncTheme() {
  const light = document.body.classList.contains("light-theme");
  themeSwitch.setAttribute("aria-pressed", light);
  themeSwitch.setAttribute(
    "aria-label",
    light ? "Cambiar a tema oscuro" : "Cambiar a tema claro",
  );
  themeSwitch.querySelector(".switch-label").textContent = light
    ? "Tema claro"
    : "Tema oscuro";
}
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem(
    "hardware-gt-theme",
    document.body.classList.contains("light-theme") ? "light" : "dark",
  );
  syncTheme();
});
syncTheme();

// Native scrolling stays in control; visual updates share one animation frame.
const visual = document.querySelector(".hero-visual");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const progressBar = document.querySelector("#reading-progress");
const toTop = document.querySelector("#to-top");
let heroVisible = true;
let scrollFrame = 0;

function updateScrollUI() {
  scrollFrame = 0;
  const max = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  toTop.classList.toggle("visible", scrollY > 500);
  window.updateFloatingOrbs?.();
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollUI);
  },
  { passive: true },
);
window.addEventListener("resize", updateScrollUI, { passive: true });
updateScrollUI();

function syncAmbientMotion() {
  const paused = document.hidden || reduceMotion.matches;
  document.body.classList.toggle("motion-paused", paused);
  visual.classList.toggle("scene-paused", paused || !heroVisible);
}
new IntersectionObserver(
  ([entry]) => {
    heroVisible = entry.isIntersecting;
    syncAmbientMotion();
  },
  { threshold: 0 },
).observe(visual);
document.addEventListener("visibilitychange", syncAmbientMotion);
reduceMotion.addEventListener("change", syncAmbientMotion);
syncAmbientMotion();
