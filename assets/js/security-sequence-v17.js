/** EIGENKERN V17 — synchronized animation accessibility. No third-party code. */
(() => {
  'use strict';
  const graphic = document.querySelector('.ek-ref-flow__paths');
  const hero = document.querySelector('.hero');
  const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!graphic || !hero) return;
  function refresh() {
    if (!('pauseAnimations' in graphic)) return;
    if (motionPref.matches || document.hidden || !heroIsVisible) graphic.pauseAnimations();
    else graphic.unpauseAnimations();
  }
  let heroIsVisible = true;
  motionPref.addEventListener?.('change', refresh);
  document.addEventListener('visibilitychange',refresh);
  if('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {heroIsVisible=!!entries[0]?.isIntersecting;refresh();},{threshold:0.01}).observe(hero);
  }
  // The cross button is a real accessible target; clicking toggles tooltip
  // via aria-expanded and :focus-within for touch users too.
  const cross = document.querySelector('.ek-v17__cross');
  if (cross) {
    cross.setAttribute('aria-expanded','false');
    cross.addEventListener('click',()=>{
      const expanded = cross.getAttribute('aria-expanded')==='true';
      cross.setAttribute('aria-expanded',String(!expanded));
    });
    cross.addEventListener('blur',()=>cross.setAttribute('aria-expanded','false'));
  }
  refresh();
})();
