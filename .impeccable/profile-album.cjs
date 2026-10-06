const { chromium } = require('C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const client = await page.context().newCDPSession(page);
  for (const name of ['index', 'album']) {
    await page.goto('http://127.0.0.1:4173/' + name + '.html');
    await page.waitForTimeout(1000);
    const events = [];
    client.on('Tracing.dataCollected', data => events.push(...data.value));
    await client.send('Tracing.start', { categories: 'devtools.timeline', transferMode: 'ReportEvents' });
    await page.waitForTimeout(3000);
    const done = new Promise(resolve => client.once('Tracing.tracingComplete', resolve));
    await client.send('Tracing.end'); await done;
    console.log(name, JSON.stringify(Object.fromEntries(['Paint','Layout','UpdateLayoutTree'].map(type => {
      const matches = events.filter(e => e.name === type && e.ph === 'X');
      return [type, { count: matches.length, ms: +(matches.reduce((s,e) => s + (e.dur || 0), 0)/1000).toFixed(2) }];
    }))));
    client.removeAllListeners('Tracing.dataCollected');
  }
  await browser.close();
})();
