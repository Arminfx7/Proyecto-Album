// Explicit product-to-image associations taken from the linked manufacturer pages.
import fs from 'node:fs/promises';
import vm from 'node:vm';
const context = { window: {} };
vm.runInNewContext(await fs.readFile('js/devices-data.js', 'utf8'), context);
const candidates = JSON.parse(await fs.readFile('.impeccable/device-image-candidates.json', 'utf8'));
const selected = {
 'redmi-13': candidates.find(x => x.id === 'redmi-13').candidates[1].url,
 'redmi-note-14': candidates.find(x => x.id === 'redmi-note-14').candidates[1].url,
 'poco-x7-pro': candidates.find(x => x.id === 'poco-x7-pro').candidates[1].url,
 'redmi-note-14-pro-5g': candidates.find(x => x.id === 'redmi-note-14-pro-5g').candidates[1].url,
 'xiaomi-15': candidates.find(x => x.id === 'xiaomi-15').candidates[1].url,
 'galaxy-a16-5g': 'https://images.samsung.com/is/image/samsung/p6pim/uk/sm-a166bzkdeub/gallery/uk-galaxy-a16-5g-sm-a166-sm-a166bzkdeub-thumb-543966117',
 'galaxy-a56-5g': 'https://images.samsung.com/is/image/samsung/p6pim/au/sm-a566bzkkats/gallery/au-galaxy-a56-5g-sm-a566-sm-a566bzkkats-thumb-545322840',
 'galaxy-s25-ultra': candidates.find(x => x.id === 'galaxy-s25-ultra').candidates.find(x => x.url.includes('163_346_PNG')).url,
 'iphone-16': candidates.find(x => x.id === 'iphone-16').candidates[0].url,
 'vivobook-go-e1504f': 'https://dlcdnwebimgs.asus.com/gain/b6d2e59f-ed3c-49de-92b5-410c799a1858//w800',
 'vivobook15-m1502ya': 'https://dlcdnwebimgs.asus.com/gain/edaf9bca-facc-429a-a521-f67aa20a07de//w800',
 'zephyrus-g14-2024': 'https://dlcdnwebimgs.asus.com/gain/67B92400-DFFC-42FA-B2D9-A4EA34FDAE29/w250/fwebp',
 'aspire3-a315-24p': 'https://images.acer.com/is/image/acer/acer-aspire-3-a315-24p-non-fingerprint-non-backlit-wallpaper-silver-01',
 'macbook-air-m2': 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111867_SP869-2022-macbook-air-m2-colors.png',
 'macbook-pro14-m4': 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mbp14-m4-2024.png'
};
await fs.mkdir('media/devices', { recursive: true });
const results = {};
for (const [id, url] of Object.entries(selected)) {
 try {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw Error(response.status);
  const type = response.headers.get('content-type');
  if (!type?.startsWith('image/')) throw Error('Not an image: ' + type);
  const extension = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : 'jpg';
  const path = 'media/devices/' + id + '.' + extension;
  await fs.writeFile(path, Buffer.from(await response.arrayBuffer()));
  const device = Object.values(context.window.deviceCatalog).flat().find(x => x.id === id);
  results[id] = { path, imageSource: url, productSource: device.source };
  console.log(id, path);
 } catch (error) { console.error(id, error.message); }
}
await fs.writeFile('.impeccable/downloaded-device-images.json', JSON.stringify(results, null, 2));
