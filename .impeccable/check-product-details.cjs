const { chromium } = require('C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(response.status() + ' ' + response.url()); });
  for (const name of ['componentes', 'celulares', 'laptops', 'software']) {
    await page.goto('http://127.0.0.1:4173/' + name + '.html');
    assert.equal(await page.locator('.product-opinion').count(), 0);
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const theme of ['light', 'dark']) {
        if (await page.evaluate(() => document.documentElement.dataset.theme) !== theme) {
          await page.locator('#page-theme').click();
        }
        assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), theme);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), name + ' overflow ' + width);
        await page.screenshot({ path: '.impeccable/details-' + name + '-' + width + '-' + theme + '.png', animations: 'disabled' });
      }
    }
    if (name !== 'software') {
      await page.locator('#catalog-tier').selectOption('media');
      assert.equal(await page.locator('.product-entry').count(), 3);
      assert.equal(await page.locator('.tier-advice').count(), 1);
      await page.locator('#catalog-tier').selectOption('todas');
    }
    if (name === 'componentes') {
      const count = await page.locator('#catalog-category option').count();
      for (let i = 0; i < count; i++) {
        await page.locator('#catalog-category').selectOption(String(i));
        assert.equal(await page.locator('.product-entry').count(), 9);
        await page.evaluate(async () => {
          for (const img of document.querySelectorAll('.product-picture img')) {
            img.loading = 'eager';
            await img.decode();
          }
        });
      }
      const decoded = await page.evaluate(async () => {
        for (const item of Object.values(window.hardwareImages)) {
          const img = new Image(); img.src = item.path; await img.decode();
        }
        return Object.keys(window.hardwareImages).length;
      });
      assert.equal(decoded, 51);
      await page.locator('#catalog-search').fill('Ryzen 9 9950X');
      assert.equal(await page.locator('.product-entry').count(), 1);
      assert.ok(await page.locator('.product-entry').innerText().then(text => text.includes('16 núcleos / 32 hilos')));
    }
    console.log(name + ': responsive 375/768/1440, temas y filtros OK');
  }
  assert.deepEqual(errors, []);
  console.log('Sin errores JS ni HTTP. Las 51 imágenes nuevas decodifican.');
  await browser.close();
})().catch(error => { console.error(error); process.exitCode = 1; });
