import fs from 'node:fs/promises';
const pages = JSON.parse(await fs.readFile(process.argv[2] || '.impeccable/hardware-image-candidates.json', 'utf8'));
const blocked = new Set(['AMD|Ryzen 9 7950X', 'Shure|MV6', 'Creative|Sound Blaster G3', 'SteelSeries|Arctis Nova Pro Wireless', 'SteelSeries|Arctis Nova Pro', 'Xbox|Elite Wireless Controller Series 2', 'BenQ|TK700']);
const imported = {};
for (const page of pages) {
 if(page.status !== 200 || blocked.has(page.key) || !page.candidates?.length) continue;
 let candidate=page.candidates[0];
 if(page.key==='LG|27GS95QE-B') candidate=page.candidates.find(c=>c.url.includes('1536') && c.url.includes('27GS95QE'));
 if(page.key==='Razer|Goliathus Extended Chroma') candidate=page.candidates.find(c=>c.url.includes('767x511') && c.url.includes('Goliathus-Extended-Chroma'));
 if(page.key.startsWith('Logitech|')){
  const model=page.key.split('|')[1].split(' ')[0].toLowerCase();
  candidate=page.candidates.find(c=>!c.url.includes('navigation') && /gallery-1/.test(c.url) && c.url.toLowerCase().includes(model==='pro'?'superlight':model));
 }
 if(page.key.startsWith('AMD|')){
  const model=page.key.split(' ').at(-1).toLowerCase();
  candidate=page.candidates.find(c=>c.url.includes(model) && !c.url.includes('-og.'));
 }
 if(!candidate || /undefined|homepage|404|logo/i.test(candidate.url)) continue;
 try {
  const response=await fetch(candidate.url,{signal:AbortSignal.timeout(15000)});
  const mime=response.headers.get('content-type')||'';
  if(!response.ok || !mime.startsWith('image/')) throw Error(response.status+' '+mime);
  const extension=mime.includes('png')?'png':mime.includes('webp')?'webp':'jpg';
  const path='media/products/'+page.key.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'-official.'+extension;
  await fs.writeFile(path,Buffer.from(await response.arrayBuffer()));
  imported[page.key]={path,source:page.url,imageSource:candidate.url};
  console.log(page.key,path);
 }catch(e){console.log('FAILED',page.key,e.message)}
}
await fs.writeFile(process.argv[3] || '.impeccable/imported-hardware-images.json',JSON.stringify(imported,null,2));
