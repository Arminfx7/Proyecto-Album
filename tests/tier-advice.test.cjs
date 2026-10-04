const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = vm.createContext({ window: {}, URL });
for (const file of ['catalog-extra', 'catalog-tiers', 'hardware-data', 'devices-data', 'tier-advice']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../js', file + '.js'), 'utf8'), context);
}
const categories = [
  ...context.window.hardwareCatalog,
  ...Object.entries(context.window.deviceCatalog).map(([id, products]) => ({ id, products }))
];
test('81 recomendaciones: una opción existente de la gama correcta', () => {
  let count = 0;
  const paragraphs = new Set();
  for (const category of categories) {
    for (const tier of ['baja', 'media', 'alta']) {
      const advice = context.window.getTierAdvice(category, tier);
      assert.ok(advice, category.id + '/' + tier);
      assert.equal(advice.product.tier, tier);
      assert.ok(category.products.includes(advice.product));
      assert.ok(advice.text.length > 90);
      paragraphs.add(advice.text);
      count++;
    }
  }
  assert.equal(count, 81);
  assert.equal(paragraphs.size, 81, 'No repetir el mismo párrafo entre categorías');
});
test('la elección de celulares de gama media coincide con el texto', () => {
  const category = categories.find(c => c.id === 'celulares');
  const advice = context.window.getTierAdvice(category, 'media');
  assert.equal(advice.product.id, 'poco-x7-pro');
  assert.match(advice.text, /POCO X7 Pro/);
});
test('la apertura no espera a que desaparezca el libro para navegar', () => {
  const code = fs.readFileSync(path.join(__dirname, '../js/entrance.js'), 'utf8');
  assert.ok(!code.includes('await book.animate'));
  assert.ok(!code.includes('location.assign'));
  const css = fs.readFileSync(path.join(__dirname, '../css/page-transition.css'), 'utf8');
  assert.match(css, /navigation: auto/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});
