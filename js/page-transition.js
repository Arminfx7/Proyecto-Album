(() => {
  const root = document.documentElement;
  const isMobile = matchMedia('(max-width: 700px)');

  window.addEventListener('pagereveal', (event) => {
    if (!event.viewTransition) return;

    root.classList.add('is-revealing');
    event.viewTransition.finished.then(
      () => root.classList.remove('is-revealing'),
      () => root.classList.remove('is-revealing'),
    );
  });

  // Keep the transition compositor focused on the shared cover/scene snapshots.
  if (isMobile.matches) {
    window.addEventListener('pageswap', () => {
      root.classList.add('is-entering');
    });
  }
})();
