(() => {
  const book = document.querySelector('#enter-site');
  const effects = document.querySelector('.book-effects');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const svg = document.querySelector('.cover-circuits');
  const pulses = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  pulses.classList.add('circuit-pulses');
  svg.querySelectorAll('.energy-rays path').forEach((path) => {
    const pulse = path.cloneNode();
    pulse.removeAttribute('stroke');
    pulses.append(pulse);
  });
  svg.append(pulses);
  let pointerFrame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let pointerBounds;
  effects.addEventListener('pointerenter', () => {
    pointerBounds = effects.getBoundingClientRect();
  }, { passive: true });
  function resetPointer() {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    effects.classList.remove('is-pointing');
    effects.style.removeProperty('transform');
    pointerBounds = null;
  }
  effects.addEventListener('pointermove', (event) => {
    if (entering || reducedMotion.matches || !finePointer.matches) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      const rect = pointerBounds || (pointerBounds = effects.getBoundingClientRect());
      const x = Math.max(0, Math.min(1, (pointerX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (pointerY - rect.top) / rect.height));
      effects.style.transform = `rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg)`;
      effects.classList.add('is-pointing');
    });
  }, { passive: true });
  effects.addEventListener('pointerleave', resetPointer);
  window.addEventListener('resize', resetPointer, { passive: true });
  reducedMotion.addEventListener('change', resetPointer);
  finePointer.addEventListener('change', resetPointer);
  let entering = false;
  // Navigate immediately. Cross-document transitions wait for the destination
  // instead of fading the source to nothing while the next document loads.
  book.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (entering) {
      event.preventDefault();
      return;
    }
    entering = true;
    resetPointer();
    book.setAttribute('aria-label', 'Abriendo el álbum…');
    document.querySelector('.entrance-caption').textContent = 'Abriendo tu próximo capítulo…';
  });
  window.addEventListener('pageswap', (event) => {
    if (!event.viewTransition || reducedMotion.matches) return;
    // Background tabs may legitimately skip the visual transition.
    event.viewTransition.ready.catch(() => {});
    document.body.classList.add('is-entering');
  });
  window.addEventListener('pageshow', () => {
    entering = false;
    resetPointer();
    document.body.classList.remove('is-entering');
    document.querySelector('.entrance-caption').textContent = 'Presiona el libro para comenzar.';
    book.getAnimations().filter((animation) => animation.effect?.getTiming().fill === 'forwards').forEach((animation) => animation.cancel());
    book.setAttribute('aria-label', 'Abrir el álbum y entrar al sitio web');
  });
  document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('is-away', document.hidden);
    if (document.hidden) resetPointer();
  });
})();
