// Shared behavior for every content page; no catalogue data here.
(() => {
  const root = document.documentElement;
  const switcher = document.querySelector('#page-theme');
  let storedTheme;
  try { storedTheme = localStorage.getItem('hardware-theme') || localStorage.getItem('hardware-gt-theme'); } catch {}
  function setTheme(theme) {
    root.dataset.theme = theme;
    document.body.classList.toggle('light-theme', theme === 'light');
    if (switcher) {
      switcher.textContent = theme === 'dark' ? '☀ Tema claro' : '☾ Tema oscuro';
      switcher.setAttribute('aria-pressed', String(theme === 'light'));
    }
  }
  setTheme(storedTheme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  switcher?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(theme);
    try { localStorage.setItem('hardware-theme', theme); } catch {}
  });
  document.querySelector('#page-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible', 'is-visible'));
  const progress = document.querySelector('#reading-progress');
  let scrollRange = 0;
  const measureScrollRange = () => {
    scrollRange = Math.max(0, document.documentElement.scrollHeight - innerHeight);
  };
  if (progress) {
    new ResizeObserver(measureScrollRange).observe(document.body);
    window.addEventListener('resize', measureScrollRange, { passive: true });
    measureScrollRange();
  }
  let pending = false;
  window.addEventListener('scroll', () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      window.updateFloatingOrbs?.();
      if (progress) progress.style.transform = 'scaleX(' + (scrollRange > 0 ? Math.min(1, scrollY / scrollRange) : 0) + ')';
      pending = false;
    });
  }, { passive: true });
  const visual = document.querySelector('.hero-visual');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true;
  function syncMotion() {
    const paused = document.hidden || motion.matches;
    document.body.classList.toggle('motion-paused', paused);
    visual?.classList.toggle('scene-paused', paused || !visible);
  }
  if (visual) new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncMotion();
  }).observe(visual);
  document.addEventListener('visibilitychange', syncMotion);
  motion.addEventListener('change', syncMotion);
  syncMotion();
})();
