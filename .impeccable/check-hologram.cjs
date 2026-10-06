const { chromium } = require("playwright");
const path = require("node:path");
(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "load" });
    for (const theme of ["dark", "light"]) {
      const light = await page
        .locator("body")
        .evaluate((b) => b.classList.contains("light-theme"));
      if (light !== (theme === "light"))
        await page.locator("#theme-switch").click();
      await page.waitForTimeout(700);
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        videoCount: document.querySelectorAll("video").length,
        animation: getComputedStyle(document.querySelector(".holo-laptop"))
          .animationPlayState,
      }));
      console.log({ width, theme, ...state });
      if (state.overflow || state.videoCount || state.animation !== "running")
        throw Error("Scene failed");
      await page.screenshot({
        path: path.join(__dirname, `hologram-${width}-${theme}.png`),
      });
    }
    if (await page.locator("#holo-motion-toggle").count())
      throw Error("Unexpected pause button");
    if (await page.locator(".ambient-orb").count())
      throw Error("Old oversized orbs remain");
    const before = await page
      .locator(".scroll-orb")
      .first()
      .evaluate((el) => el.style.transform);
    await page.locator("#companion-button").click();
    if (
      !(await page
        .locator("#companion")
        .evaluate((el) => el.classList.contains("is-greeting")))
    )
      throw Error("Greeting failed");
    await page.locator("#album").scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    const after = await page
      .locator(".scroll-orb")
      .first()
      .evaluate((el) => el.style.transform);
    if (before === after) throw Error("Scroll parallax failed");
    if (
      !(await page
        .locator(".hero-visual")
        .evaluate((el) => el.classList.contains("scene-paused")))
    )
      throw Error("Offscreen pause failed");
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(
    () =>
      getComputedStyle(document.querySelector(".holo-laptop")).animationName ===
      "none",
  );
  console.log({
    errors,
    pauseButton: "absent",
    offscreen: "passed",
    reducedMotion: "passed",
  });
  await browser.close();
  if (errors.length) process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
