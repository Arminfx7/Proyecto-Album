import fs from 'node:fs';
import vm from 'node:vm';
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync('js/devices-data.js', 'utf8'), context);
const devices = Object.values(context.window.deviceCatalog).flat();
const decode = (s = '') => s.replaceAll('&amp;', '&').replaceAll('&#x2F;', '/').replaceAll('\\/', '/');
const results = [];
for (let i = 0; i < devices.length; i += 4) {
  await Promise.all(devices.slice(i, i + 4).map(async (device) => {
    try {
      const response = await fetch(device.source, { signal: AbortSignal.timeout(20000), headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await response.text();
      const candidates = [];
      for (const tag of html.match(/<(?:meta|img)\b[^>]+>/gi) || []) {
        const attrs = Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [m[1].toLowerCase(), decode(m[2])]));
        let url = attrs.property === 'og:image' || attrs.name === 'twitter:image' ? attrs.content : attrs['data-src'] || attrs.src;
        if (!url || url.startsWith('data:')) continue;
        url = new URL(url, device.source).href;
        if (/logo|icon|sprite|loading|tracking|pixel|flag|gnb\/|header\/|beacon/i.test(url)) continue;
        if (!candidates.some((c) => c.url === url)) candidates.push({ url, alt: attrs.alt || attrs.property || attrs.name || '' });
      }
      const result = { id: device.id, model: device.model, source: device.source, status: response.status, title: html.match(/<title[^>]*>(.*?)<\/title>/s)?.[1], candidates };
      results.push(result);
      console.log(JSON.stringify({ ...result, candidates: candidates.slice(0, 5) }));
    } catch (error) {
      results.push({ id: device.id, error: error.message });
      console.log(device.id, error.message);
    }
  }));
}
fs.mkdirSync('.impeccable', { recursive: true });
fs.writeFileSync('.impeccable/device-image-candidates.json', JSON.stringify(results, null, 2));
