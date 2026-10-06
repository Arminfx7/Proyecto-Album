const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function catalog() {
  const root = path.join(__dirname, '..');
  const context = vm.createContext({ window: {}, URL });
  const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  vm.runInContext(app.slice(0, app.indexOf('const list =')) + '\nwindow.base = components;', context);
  vm.runInContext(fs.readFileSync(path.join(root, 'js/catalog-extra.js'), 'utf8'), context);
  vm.runInContext(fs.readFileSync(path.join(root, 'js/catalog-tiers.js'), 'utf8'), context);
  const categories = [...context.window.base, ...context.window.hardwareExtras];
  for (const category of categories) {
    for (const [brand, model, price, image] of context.window.hardwareVariants[category.id]) {
      category.products.push({ brand, model, price, image, specs: [['Ficha', 'Consultar fabricante']] });
    }
  }
  context.window.applyCatalogTiers(categories);
  return categories;
}

test('28 categorías, 252 modelos y exactamente 3 por gama', () => {
  const categories = catalog();
  assert.equal(categories.length, 28);
  assert.equal(categories.flatMap((c) => c.products).length, 252);
  for (const c of categories) {
    for (const tier of ['baja', 'media', 'alta']) {
      assert.equal(c.products.filter((p) => p.tier === tier).length, 3, `${c.id}/${tier}`);
    }
  }
});

test('sin modelos duplicados dentro de cada categoría', () => {
  for (const c of catalog()) {
    assert.equal(new Set(c.products.map((p) => `${p.brand} ${p.model}`)).size, 9, c.id);
  }
});

test('nuevos modelos sin precios inventados y con referencia visual declarada', () => {
  for (const p of catalog().flatMap((c) => c.products).filter((p) => p.illustrative)) {
    assert.equal(p.price, 'Por consultar');
    assert.ok(p.caution && p.highlight && p.source.startsWith('https://'));
    assert.ok(!Object.hasOwn(p, 'score'));
  }
});

test('todas las imágenes locales existen', () => {
  for (const p of catalog().flatMap((c) => c.products)) {
    if (p.illustrative) {
      assert.equal(p.image, null, 'Un modelo sin foto no debe reutilizar otra imagen');
      continue;
    }
    if (!p.image) continue;
    assert.ok(fs.existsSync(path.join(__dirname, '..', p.image)), p.image);
  }
});
