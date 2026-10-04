(() => {
  const book = document.querySelector('#album-book');
  const list = document.querySelector('#component-list');
  const index = document.querySelector('#book-index');
  const status = document.querySelector('#book-status');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let pages = [];
  let current = 0;
  let animation;

  function updateControls() {
    const page = pages[current];
    status.textContent = page
      ? `Hoja ${current + 1} de ${pages.length} · ${page.querySelector('h3').textContent}`
      : 'No hay hojas con estos filtros';
    book.querySelectorAll('.book-page-number').forEach((label) => {
      label.textContent = page ? `${String(current + 1).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}` : '—';
    });
    book.querySelectorAll('[data-book-step]').forEach((button) => {
      button.disabled = !page || (Number(button.dataset.bookStep) < 0 ? current === 0 : current === pages.length - 1);
    });
    index.disabled = !page;
    if (page) index.value = page.id;
  }

  function showPage(next, { animate = false, scroll = false } = {}) {
    if (!pages.length) return;
    const direction = next >= current ? 1 : -1;
    current = Math.max(0, Math.min(next, pages.length - 1));
    animation?.cancel();
    pages.forEach((page, position) => { page.hidden = position !== current; });
    const page = pages[current];
    updateControls();
    if (scroll) book.scrollIntoView({ behavior: 'instant', block: 'start' });
    if (animate && !reducedMotion.matches) {
      // Animate the single visible sheet, never clone links or product images.
      page.style.transformOrigin = direction > 0 ? 'left center' : 'right center';
      animation = page.animate([
        { transform: `perspective(1600px) rotateY(${direction * 14}deg) translateX(${direction * 24}px)`, opacity: 0.35 },
        { transform: `perspective(1600px) rotateY(${-direction * 1.5}deg) translateX(0)`, opacity: 1, offset: 0.75 },
        { transform: 'perspective(1600px) rotateY(0deg) translateX(0)', opacity: 1 },
      ], { duration: 620, easing: 'cubic-bezier(.22,1,.36,1)' });
    }
  }

  function refresh() {
    animation?.cancel();
    pages = [...list.querySelectorAll('.component-section')];
    index.replaceChildren(...pages.map((page, position) => {
      const option = document.createElement('option');
      option.value = page.id;
      option.textContent = `${String(position + 1).padStart(2, '0')} · ${page.querySelector('h3').textContent}`;
      return option;
    }));
    current = 0;
    if (pages.length) showPage(0);
    else updateControls();
  }

  function followHash() {
    const target = pages.findIndex((page) => `#${page.id}` === location.hash);
    if (target !== -1) {
      showPage(target, { scroll: true });
    } else if (location.hash === '#comparaciones' || location.hash === '#album') {
      document.querySelector(location.hash).scrollIntoView({ behavior: 'instant' });
    }
  }

  book.addEventListener('click', (event) => {
    const button = event.target.closest('[data-book-step]');
    if (!button || button.disabled) return;
    showPage(current + Number(button.dataset.bookStep), { animate: true, scroll: true });
    // Top controls stay in view and remain operable when reaching either end.
    const topButtons = book.querySelector('.book-navigation').querySelectorAll('button');
    const focusTarget = [...topButtons].find((item) => item.dataset.bookStep === button.dataset.bookStep && !item.disabled)
      || [...topButtons].find((item) => !item.disabled);
    focusTarget?.focus({ preventScroll: true });
  });
  index.addEventListener('change', () => {
    showPage(pages.findIndex((page) => page.id === index.value), { animate: true, scroll: true });
  });
  // The app resets filters first; expose the target before the browser follows its anchor.
  document.addEventListener('click', (event) => {


    const link = event.target.closest('.category-link, .recommendation-jump');
    if (!link) return;
    const target = pages.findIndex((page) => `#${page.id}` === link.hash);
    if (target !== -1) {
      event.preventDefault();
      history.pushState(null, '', link.hash);
      showPage(target, { animate: true, scroll: true });
    }
  });
  document.addEventListener('album:render', refresh);
  window.addEventListener('hashchange', followHash);
  refresh();
  followHash();
})();
