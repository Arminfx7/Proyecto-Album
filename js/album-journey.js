(() => {
  const guide = document.querySelector(".journey");
  const toggle = document.querySelector("#journey-toggle");
  const panel = document.querySelector("#journey-panel");
  const select = document.querySelector("#journey-select");
  const position = document.querySelector("#journey-position");
  const progress = document.querySelector("#journey-progress");
  const previous = document.querySelector("#journey-prev");
  const next = document.querySelector("#journey-next");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const fox = document.querySelector(".fox-character");
  if (fox) document.querySelector(".journey-fox").replaceChildren(fox.cloneNode(true));
  const categories = [...document.querySelectorAll(".category-link")].map((link) => ({
    id: link.hash.slice(1),
    name: link.querySelector("strong").textContent,
    number: link.querySelector("span").textContent,
  }));
  select.innerHTML = categories.map((item) =>
    `<option value="${item.id}">${item.number} · ${item.name}</option>`
  ).join("");
  let current = -1;
  let frame = 0;
  let sections = [];

  function openPanel(open, returnFocus = false) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) select.focus({ preventScroll: true });
    else if (returnFocus) toggle.focus({ preventScroll: true });
  }

  function navigateTo(index) {
    const item = categories[Math.max(0, Math.min(index, categories.length - 1))];
    // Use the same navigation path as the index so filters are reset consistently.
    document.querySelector(`.category-link[href="#${item.id}"]`).click();
    current = categories.indexOf(item);
    select.value = item.id;
    openPanel(false, true);
    requestAnimationFrame(update);
  }

  function update() {
    frame = 0;
    const maxScroll = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0})`;
    let active = -1;
    for (const section of sections) {
      if (section.node.getBoundingClientRect().top <= innerHeight * 0.45) active = section.index;
      else break;
    }
    current = active;
    const item = categories[current];
    position.textContent = item ? `${item.number} / 25 · ${item.name}` : "Tu guía del álbum";
    if (item && document.activeElement !== select) select.value = item.id;
    previous.disabled = current <= 0;
    next.disabled = current >= categories.length - 1;
    guide.classList.toggle("is-travelling", scrollY > 350);
  }

  function refresh() {
    sections = categories.map((item, index) => ({
      node: document.getElementById(item.id), index,
    })).filter((item) => item.node);
    if (!frame) frame = requestAnimationFrame(update);
  }

  toggle.addEventListener("click", () => openPanel(panel.hidden));
  document.querySelector("#journey-close").addEventListener("click", () => openPanel(false, true));
  previous.addEventListener("click", () => navigateTo(current - 1));
  next.addEventListener("click", () => navigateTo(current + 1));
  select.addEventListener("change", () => navigateTo(categories.findIndex((item) => item.id === select.value)));
  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => openPanel(false, true)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) openPanel(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!guide.contains(event.target) && !panel.hidden) openPanel(false);
  });
  window.addEventListener("scroll", () => {
    if (!frame) frame = requestAnimationFrame(update);
  }, { passive: true });
  window.addEventListener("resize", refresh, { passive: true });
  document.addEventListener("album:render", refresh);
  // A short entrance makes the guide discoverable, without a permanent bounce.
  if (!motion.matches) guide.animate(
    [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 500, easing: "cubic-bezier(.22,1,.36,1)" },
  );
  refresh();
})();
