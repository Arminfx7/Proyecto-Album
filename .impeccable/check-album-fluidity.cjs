const { chromium } = require('C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('http://127.0.0.1:4173/');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    const before = await page.locator('.cover-light').evaluate(el => getComputedStyle(el, '::before').transform);
    await page.waitForTimeout(2200);
    assert.notEqual(await page.locator('.cover-light').evaluate(el => getComputedStyle(el, '::before').transform), before);
    await page.screenshot({ path: '.impeccable/fluidity-cover-' + width + '.png' });
    await page.locator('#enter-site').click();
    await page.waitForURL('**/album.html');
    await page.waitForTimeout(800);
    for (const theme of ['dark', 'light']) {
      if (await page.evaluate(() => document.documentElement.dataset.theme) !== theme) await page.locator('#page-theme').click();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.screenshot({ path: '.impeccable/fluidity-album-' + width + '-' + theme + '.png' });
    }
    await page.locator('#companion-button').click();
    assert.ok(await page.locator('#companion').evaluate(el => el.classList.contains('is-greeting')));
    await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
    await page.waitForFunction(() => document.querySelector('.hero-visual').classList.contains('scene-paused'));
    assert.equal(await page.locator('.holo-screen').evaluate(el => getComputedStyle(el, '::after').animationPlayState), 'paused');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('.holo-screen').evaluate(el => getComputedStyle(el, '::after').animationName), 'none');
    await page.goto('http://127.0.0.1:4173/');
    assert.equal(await page.locator('#enter-site').evaluate(el => getComputedStyle(el).animationName), 'none');
    await page.locator('#enter-site').click();
    await page.waitForURL('**/album.html');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    console.log(width + ': apertura, animación, temas, FOX, pausa fuera de pantalla y movimiento reducido OK');
  }
  assert.deepEqual(errors, []);
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
