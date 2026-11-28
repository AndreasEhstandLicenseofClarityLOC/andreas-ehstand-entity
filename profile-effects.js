(() => {
  const spotlight = document.getElementById('spotlight');
  if (spotlight && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('pointermove', event => {
      spotlight.style.setProperty('--mx', event.clientX + 'px');
      spotlight.style.setProperty('--my', event.clientY + 'px');
    }, { passive: true });
  }

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
  for (const section of document.querySelectorAll('.reveal')) observer.observe(section);
})();
