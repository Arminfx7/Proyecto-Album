// Discovery only. Candidates require model/source review before import.
import fs from 'node:fs/promises';
export const sources = [
  [
    "ASUS|PRIME A520M-K",
    "https://www.asus.com/motherboards-components/motherboards/prime/prime-a520m-k/"
  ],
  [
    "ASUS|PRIME A620M-K",
    "https://www.asus.com/motherboards-components/motherboards/prime/prime-a620m-k/"
  ],
  [
    "ASUS|ROG CROSSHAIR X870E HERO",
    "https://rog.asus.com/motherboards/rog-crosshair/rog-crosshair-x870e-hero-model/"
  ],
  [
    "ASUS|ROG CROSSHAIR X670E HERO",
    "https://rog.asus.com/motherboards/rog-crosshair/rog-crosshair-x670e-hero-model/"
  ],
  [
    "ASUS|ROG STRIX X670E-E GAMING WIFI",
    "https://rog.asus.com/motherboards/rog-strix/rog-strix-x670e-e-gaming-wifi-model/"
  ],
  [
    "Noctua|NH-U9S",
    "https://www.noctua.at/en/nh-u9s"
  ],
  [
    "Noctua|NH-D15",
    "https://www.noctua.at/en/nh-d15"
  ],
  [
    "Noctua|NH-D15 G2",
    "https://www.noctua.at/en/nh-d15-g2"
  ],
  [
    "Noctua|NH-U12A",
    "https://www.noctua.at/en/nh-u12a"
  ],
  [
    "Noctua|NF-A12x25 PWM",
    "https://www.noctua.at/en/nf-a12x25-pwm"
  ],
  [
    "Noctua|NF-A14x25 G2 PWM",
    "https://www.noctua.at/en/nf-a14x25-g2-pwm"
  ],
  [
    "TP-Link|Archer T2U Nano",
    "https://www.tp-link.com/us/home-networking/usb-adapter/archer-t2u-nano/"
  ],
  [
    "TP-Link|UE300",
    "https://www.tp-link.com/us/home-networking/usb-converter/ue300/"
  ],
  [
    "TP-Link|TX201",
    "https://www.tp-link.com/us/home-networking/pci-adapter/tx201/"
  ],
  [
    "TP-Link|TX401",
    "https://www.tp-link.com/us/home-networking/pci-adapter/tx401/"
  ],
  [
    "TP-Link|Archer TXE75E",
    "https://www.tp-link.com/us/home-networking/pci-adapter/archer-txe75e/"
  ],
  [
    "TP-Link|Archer TBE550E",
    "https://www.tp-link.com/us/home-networking/pci-adapter/archer-tbe550e/"
  ],
  [
    "AMD|Ryzen 3 4100",
    "https://www.amd.com/en/products/processors/desktops/ryzen/4000-series/amd-ryzen-3-4100.html"
  ],
  [
    "AMD|Ryzen 5 7600X",
    "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600x.html"
  ],
  [
    "AMD|Ryzen 9 7950X",
    "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7950x.html"
  ],
  [
    "AMD|Ryzen 9 7900X",
    "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7900x.html"
  ],
  [
    "AMD|Ryzen 9 9950X",
    "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html"
  ],
  [
    "Razer|BlackWidow V3",
    "https://www.razer.com/gaming-keyboards/razer-blackwidow-v3"
  ],
  [
    "Razer|BlackWidow V4 Pro",
    "https://www.razer.com/gaming-keyboards/razer-blackwidow-v4-pro"
  ],
  [
    "Razer|Huntsman V3 Pro",
    "https://www.razer.com/gaming-keyboards/razer-huntsman-v3-pro"
  ],
  [
    "Razer|DeathStalker V2 Pro",
    "https://www.razer.com/gaming-keyboards/razer-deathstalker-v2-pro"
  ],
  [
    "Shure|MV6",
    "https://www.shure.com/en-US/products/microphones/mv6"
  ],
  [
    "Shure|MV7X",
    "https://www.shure.com/en-US/products/microphones/mv7x"
  ],
  [
    "Shure|MV7+",
    "https://www.shure.com/en-US/products/microphones/mv7plus"
  ],
  [
    "Shure|SM7B",
    "https://www.shure.com/en-US/products/microphones/sm7b"
  ],
  [
    "Shure|SM7dB",
    "https://www.shure.com/en-US/products/microphones/sm7db"
  ],
  [
    "Edifier|R1280T",
    "https://www.edifier.com/global/p/bookshelf-speakers/r1280t"
  ],
  [
    "Edifier|R1700BT",
    "https://www.edifier.com/global/p/bookshelf-speakers/r1700bt"
  ],
  [
    "Edifier|S1000MKII",
    "https://www.edifier.com/global/p/bookshelf-speakers/s1000mkii"
  ],
  [
    "Edifier|S2000MKIII",
    "https://www.edifier.com/global/p/bookshelf-speakers/s2000mkiii"
  ],
  [
    "Edifier|S3000 Pro",
    "https://www.edifier.com/global/p/bookshelf-speakers/s3000-pro"
  ],
  [
    "Logitech|G305 LIGHTSPEED",
    "https://www.logitechg.com/en-us/products/gaming-mice/g305-lightspeed-wireless-gaming-mouse.html"
  ],
  [
    "Logitech|G502 HERO",
    "https://www.logitechg.com/en-us/products/gaming-mice/g502-hero-gaming-mouse.html"
  ],
  [
    "Logitech|PRO X SUPERLIGHT 2",
    "https://www.logitechg.com/en-us/products/gaming-mice/pro-x2-superlight-wireless-mouse.html"
  ],
  [
    "Logitech|G502 X PLUS",
    "https://www.logitechg.com/en-us/products/gaming-mice/g502-x-plus-wireless-lightforce.html"
  ],
  [
    "Logitech|G903 LIGHTSPEED",
    "https://www.logitechg.com/en-us/products/gaming-mice/g903-hero-wireless-gaming-mouse.html"
  ]
];
const results=[];
const queue=process.argv[2] ? JSON.parse(await fs.readFile(process.argv[2], 'utf8')) : [...sources];
await Promise.all(Array.from({length:6},async()=>{
 while(queue.length){
  const [key,url]=queue.shift();
  try{
   const response=await fetch(url,{signal:AbortSignal.timeout(18000)});
   const html=await response.text();
   const title=html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
   const candidates=[];
   for(const tag of html.matchAll(/<meta\b[^>]*>/gi)){
    const attrs=Object.fromEntries([...tag[0].matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m=>[m[1].toLowerCase(),m[2]]));
    if(/^(og:image|twitter:image)$/.test(attrs.property||attrs.name||'') && attrs.content) candidates.push({url:new URL(attrs.content.replaceAll('&amp;','&'),response.url).href,alt:'meta'});
   }
   for(const tag of html.matchAll(/<img\b[^>]*>/gi)){
    const attrs=Object.fromEntries([...tag[0].matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m=>[m[1].toLowerCase(),m[2]]));
    const src=attrs['data-src']||attrs.src;
    if(src && !/logo|icon|flag|sprite|loading|nav-|gnb|placeholder|data:image/i.test(src))try{candidates.push({url:new URL(src.replaceAll('&amp;','&'),response.url).href,alt:attrs.alt||''})}catch{}
   }
   results.push({key,url:response.url,status:response.status,title,candidates:[...new Map(candidates.map(c=>[c.url,c])).values()]});
   console.log(key,response.status,title,JSON.stringify(candidates.slice(0,1)));
  }catch(e){results.push({key,error:e.message});console.log(key,e.message)}
 }
}));
await fs.mkdir('.impeccable',{recursive:true});
await fs.writeFile(process.argv[3] || '.impeccable/hardware-image-candidates.json',JSON.stringify(results,null,2));
