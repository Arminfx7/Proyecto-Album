const { chromium } = require('C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({ channel: 'chrome', headless: true });
 try {
 const page = await browser.newPage({viewport:{width:1440,height:900}});
 const errors=[];
 page.on('pageerror', e=>errors.push(e.message));
 await page.addInitScript(() => {
  addEventListener('pagereveal', event => {
   if(event.viewTransition) event.viewTransition.ready.then(()=>sessionStorage.setItem('arrival','ready')).catch(e=>sessionStorage.setItem('arrival',e.message));
  });
 });
 await page.goto('http://127.0.0.1:4173/');
 const bookBounds = await page.locator('#enter-site').boundingBox();
 await page.mouse.click(bookBounds.x + bookBounds.width / 2, bookBounds.y + bookBounds.height / 2);
 await page.waitForURL('**/album.html');
 await page.waitForTimeout(800);
 assert.equal(await page.locator('#companion').count(),1);
 console.log('Arrival transition:',await page.evaluate(()=>sessionStorage.getItem('arrival')));
 await page.goBack();
 await page.locator('#enter-site').waitFor();
 assert.equal(await page.locator('#enter-site').getAttribute('aria-label'),'Abrir el álbum y entrar al sitio web');
 await page.locator('#enter-site').focus();
 await page.keyboard.press('Enter');
 await page.waitForURL('**/album.html');
 const reduced = await browser.newContext({reducedMotion:'reduce',viewport:{width:375,height:844}});
 const mobile = await reduced.newPage();
 await mobile.goto('http://127.0.0.1:4173/');
 assert.equal(await mobile.locator('.tech-orbit').first().evaluate(e=>getComputedStyle(e).animationName),'none');
 await mobile.locator('#enter-site').click();
 await mobile.waitForURL('**/album.html');
 const landscape=await browser.newPage({viewport:{width:844,height:390}});
 await landscape.goto('http://127.0.0.1:4173/');
 console.log('Landscape dimensions:',await landscape.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,height:innerHeight,full:document.documentElement.scrollHeight})));
 console.log('JS errors:',errors);
 assert.equal(errors.length,0);
 } finally {
   await browser.close();
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
