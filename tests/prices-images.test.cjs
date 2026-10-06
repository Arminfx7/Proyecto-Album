const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {}, URL });
for (const name of ['catalog-extra', 'catalog-tiers', 'hardware-data', 'hardware-images', 'devices-data', 'device-images', 'product-prices']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'js', name + '.js'), 'utf8'), context);
}
const { hardwareCatalog, deviceCatalog, softwareCatalog, hardwareImages, deviceImages, productPrices } = context.window;
const quetzales = /^(Q \d{1,3}(,\d{3})*|Gratis)$/;
const priceOf = (key, own) => (productPrices[key] && productPrices[key].price) || own;

test('todo producto tiene un precio en quetzales', () => {
  for (const p of hardwareCatalog.flatMap(c => c.products)) assert.match(priceOf(p.brand + '|' + p.model, p.price), quetzales, p.brand + ' ' + p.model);
  for (const p of Object.values(deviceCatalog).flat()) assert.match(priceOf(p.id, p.price), quetzales, p.id);
  for (const s of softwareCatalog) assert.match(priceOf('software|' + s.name, s.price), quetzales, s.name);
});

test('los precios estimados indican su conversión y las cotizaciones locales, su fuente', () => {
  for (const [key, quote] of Object.entries(productPrices)) {
    assert.match(quote.price, quetzales, key);
    if (quote.shop === 'Estimación') assert.match(quote.note, /Q 7\.70|dólar/, key);
    if (quote.priceSource) assert.equal(new URL(quote.priceSource).protocol, 'https:', key);
  }
});

test('todo producto tiene una fotografía propia que existe y no se repite', () => {
  const paths = [];
  for (const p of hardwareCatalog.flatMap(c => c.products)) {
    const asset = hardwareImages[p.brand + '|' + p.model];
    const image = asset ? asset.path : (p.illustrative ? null : p.image);
    assert.ok(image, 'Sin foto: ' + p.brand + ' ' + p.model);
    assert.ok(fs.existsSync(path.join(root, image)), image);
    paths.push(image);
  }
  for (const p of Object.values(deviceCatalog).flat()) {
    assert.ok(deviceImages[p.id], p.id);
    assert.ok(fs.existsSync(path.join(root, deviceImages[p.id].path)), p.id);
    paths.push(deviceImages[p.id].path);
  }
  for (const s of softwareCatalog) { assert.ok(fs.existsSync(path.join(root, s.image)), s.name); paths.push(s.image); }
  assert.equal(new Set(paths).size, paths.length, 'Hay fotografías repetidas');
});
