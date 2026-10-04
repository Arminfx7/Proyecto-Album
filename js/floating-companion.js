(() => {
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const orbs = [...document.querySelectorAll(".scroll-orb")];
  const companion = document.querySelector("#companion");
  const button = document.querySelector("#companion-button");
  const message = document.querySelector("#companion-message span");
  const greetings = [
    "Vamos a explorar tu próximo equipo.",
    "¡Choca esos cinco! Tu próximo upgrade te espera.",
    "Cada pieza cuenta. ¡Descubre cómo se conectan!",
  ];
  let greetingIndex = 0;
  let timer;

  // Piggyback on the existing scroll frame; no perpetual JS render loop.
  window.updateFloatingOrbs = () => {
    const distance = motion.matches ? 0 : window.scrollY;
    const viewportWidth = innerWidth;
    const amplitude = Math.min(viewportWidth * 0.055, 65);
    orbs.forEach((orb, index) => {
      if (viewportWidth <= 700 && index >= 4) return;
      const phase = index * 1.65;
      const travel = distance / (750 + index * 180);
      const x = motion.matches
        ? 0
        : (Math.sin(travel + phase) - Math.sin(phase)) *
          amplitude;
      const y = motion.matches
        ? 0
        : (Math.cos(travel * 0.8 + phase) - Math.cos(phase)) * 85;
      orb.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    });
  };

  function finishGreeting() {
    clearTimeout(timer);
    timer = setTimeout(() => companion.classList.remove("is-greeting"), 6500);
  }

  button.addEventListener("click", () => {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    message.textContent = greetings[greetingIndex];
    companion.classList.add("is-greeting");
    finishGreeting();
  });
  motion.addEventListener("change", window.updateFloatingOrbs);
  window.updateFloatingOrbs();
  finishGreeting();
})();
