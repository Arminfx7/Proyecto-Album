const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {}, URL });
for (const name of ['catalog-extra', 'catalog-tiers', 'hardware-data', 'devices-data', 'hardware-images', 'product-specs']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'js', name + '.js'), 'utf8'), context);
}
const { hardwareCatalog, deviceCatalog, hardwareImages, getProductSpecs } = context.window;

test('51 fotografías nuevas con archivo, modelo y procedencia verificables', () => {
  const models = new Set(hardwareCatalog.flatMap(c => c.products.map(p => p.brand + '|' + p.model)));
  assert.equal(Object.keys(hardwareImages).length, 51);
  const paths = [];
  for (const [key, asset] of Object.entries(hardwareImages)) {
    assert.ok(models.has(key), key);
    assert.ok(fs.statSync(path.join(root, asset.path)).size > 1000, key);
    assert.equal(new URL(asset.source).protocol, 'https:');
    assert.equal(new URL(asset.imageSource).protocol, 'https:');
    paths.push(asset.path);
  }
  assert.equal(new Set(paths).size, 51);
  assert.equal(hardwareCatalog.flatMap(c => c.products).filter(p => p.illustrative && !hardwareImages[p.brand + '|' + p.model]).length, 79);
});

test('cada dispositivo tiene detalles adicionales, sin modificar los datos base', () => {
  for (const product of Object.values(deviceCatalog).flat()) {
    const before = JSON.stringify(product);
    const rows = getProductSpecs(product);
    assert.ok(rows.length > product.specs.length, product.id);
    assert.equal(new Set(rows.map(([label]) => label)).size, rows.length, product.id);
    assert.equal(JSON.stringify(product), before);
  }
});

test('las fichas no renderizan opiniones y todos los catálogos cargan los nuevos detalles', () => {
  const renderer = fs.readFileSync(path.join(root, 'js/catalog-page.js'), 'utf8');
  assert.ok(!/Mi opinión|product-opinion|p\.opinion/.test(renderer));
  for (const page of ['componentes', 'celulares', 'laptops', 'software']) {
    const html = fs.readFileSync(path.join(root, page + '.html'), 'utf8');
    assert.ok(html.indexOf('js/product-specs.js') < html.indexOf('js/catalog-page.js'));
  }
});
