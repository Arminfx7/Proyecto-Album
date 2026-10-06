const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const context = vm.createContext({window: {}, URL});
for (const name of ['catalog-extra', 'catalog-tiers', 'hardware-data', 'devices-data', 'device-images']) {
  vm.runInContext(read('js/' + name + '.js'), context);
}
test('las páginas activas y sus recursos locales existen', () => {
  for (const page of ['index', 'album', 'componentes', 'celulares', 'laptops', 'software', 'acerca']) {
    const html = read(page + '.html');
    for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      const url = match[1];
      if (/^(https?:|#|data:)/.test(url)) continue;
      assert.ok(fs.existsSync(path.join(root, url.split('#')[0])), page + ': ' + url);
    }
  }
});
test('270 modelos: 252 componentes, nueve celulares y nueve laptops', () => {
  const hardware = context.window.hardwareCatalog.flatMap(c=>c.products);
  assert.equal(hardware.length, 252);
  for (const products of Object.values(context.window.deviceCatalog)) {
    assert.equal(products.length, 9);
    for (const tier of ['baja', 'media', 'alta']) assert.equal(products.filter(p=>p.tier===tier).length, 3);
    for (const p of products) {
      assert.equal(p.specs.length, 4);
      assert.ok(p.opinion.startsWith('Yo '));
      assert.ok(p.source.startsWith('https://'));
    }
  }
});
test('18 dispositivos nuevos tienen imagen propia y procedencia', () => {
  const images = context.window.deviceImages;
  const paths = [];
  for (const p of Object.values(context.window.deviceCatalog).flat()) {
    const asset = images[p.id];
    assert.ok(asset, p.id);
    assert.ok(fs.existsSync(path.join(root, asset.path)), p.id);
    assert.ok(asset.imageSource.startsWith('https://'), p.id);
    paths.push(asset.path);
  }
  assert.equal(new Set(paths).size, 18);
});
test('las fotos de referencia no se asignan como imágenes exactas', () => {
  for(const p of context.window.hardwareCatalog.flatMap(c=>c.products)) {
    if(p.illustrative) assert.equal(p.image, null);
  }
});

