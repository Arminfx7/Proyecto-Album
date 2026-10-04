import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { PDFDocument, PDFName, PDFRawStream } = require('C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pdf-lib');
const models = [
 ['ideapad-slim3-15amn8', 'https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_Slim_3_15AMN8/IdeaPad_Slim_3_15AMN8_Spec.pdf'],
 ['ideapad-slim5-14abr8', 'https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_Slim_5_14ABR8/IdeaPad_Slim_5_14ABR8_Spec.pdf'],
 ['legion-pro5-16irx9', 'https://psref.lenovo.com/syspool/Sys/PDF/Legion/Legion_Pro_5_16IRX9/Legion_Pro_5_16IRX9_Spec.pdf']
];
for (const [id, url] of models) {
 const response = await fetch(url, {signal: AbortSignal.timeout(20000)});
 const doc = await PDFDocument.load(await response.arrayBuffer());
 const pictures = [];
 for (const [ref,obj] of doc.context.enumerateIndirectObjects()) {
  if (obj instanceof PDFRawStream && String(obj.dict.get(PDFName.of('Subtype'))) === '/Image') {
   pictures.push({ ref: ref.objectNumber, filter: String(obj.dict.get(PDFName.of('Filter'))), width: Number(String(obj.dict.get(PDFName.of('Width')))), height: Number(String(obj.dict.get(PDFName.of('Height')))), obj });
  }
 }
 console.log(id, pictures.map(({obj,...x})=>x));
 const jpg = pictures.filter(p=>p.filter==='/DCTDecode' && p.width>300).sort((a,b)=>b.width*b.height-a.width*a.height)[0];
 if(jpg) {await fs.writeFile('media/devices/'+id+'.jpg',jpg.obj.getContents()); console.log('EXTRACTED',id,jpg.ref);}
}

