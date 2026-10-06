const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "load" });
  const heading = await page.locator("#comparaciones h2").innerText();
  if (!heading.includes("elegir mejor")) throw Error(`Unexpected heading: ${heading}`);
  const outcomes = {};
  for (const name of ["Todos", "Internos", "Externos", "Gaming", "Almacenamiento", "Audio", "Redes"]) {
    const button = page.getByRole("button", { name, exact: true });
    await button.click();
    const count = await page.locator("#component-list .component-section").count();
    const active = await button.evaluate((el) => el.classList.contains("active"));
    if (count === 0 || !active) throw Error(`Filter did not work: ${name}, count=${count}`);
    outcomes[name] = count;
  }
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  const search = page.locator("#search");
  await search.fill("Ryzen 5 5600");
  outcomes.search = await page.locator("#component-list .component-section").count();
  if (outcomes.search !== 1) throw Error(`Search did not narrow results: ${outcomes.search}`);
  await search.fill("definitely-not-a-component");
  if (!(await page.locator("#component-list .empty-state").count())) throw Error("Empty state missing");
  await search.fill("");
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  console.log(JSON.stringify({ heading, outcomes, errors }));
  await browser.close();
  if (errors.length) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exit(1); });
