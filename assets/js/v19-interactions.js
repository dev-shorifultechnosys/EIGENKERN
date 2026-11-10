/* EIGENKERN V19: visibility-gated workflow and readable one-time text reveals.
   Adds no external dependencies and never alters the V16/V17 hero animation. */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  const steps = document.querySelector('.waechter__steps');
  if (steps) {
    steps.classList.add('v19-flow-ready');
    new IntersectionObserver(entries => {
      for (const entry of entries) steps.classList.toggle('v19-in-view', entry.isIntersecting);
    }, { threshold: .12, rootMargin: '15px 0px 15px 0px' }).observe(steps);
  }
  const selectors = [
    '.industries__intro h2','.industries__intro p', '.industry-card__title',
    '.onboarding__intro h2','.onboarding__intro p','.onboarding__step h3',
    '.ways__intro h2','.ways__intro p','.ways-card__title',
    '.waechter__intro h2','.waechter__description','.waechter-step__title-row h3',
    '.comparison__intro h2','.comparison__intro p','.comparison__row',
    '.costs__intro h2','.costs__intro p','.ek-costs__title',
    '.ek-videos__intro h2','.ek-videos__heading-row h2','.ek-video-card__title',
    '.ek-faq__intro h2','.ek-faq__intro p','.ek-faq__question',
    '.ek-final-cta__heading','.ek-final-cta__description'
  ];
  const nodes = [...new Set(selectors.flatMap(s => [...document.querySelectorAll(s)]))]
    .filter(el => !el.closest('[hidden]'));
  if (!nodes.length) return;
  const io = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('v19-text-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: .08, rootMargin:'0px 0px 54px 0px' });
  nodes.forEach((el,i)=>{
    el.classList.add('v19-text-reveal');
    // Stagger neighboring items, never delay a whole screen of content.
    el.style.setProperty('--v19-text-delay',`${(i%3)*55}ms`);
    io.observe(el);
  });
  document.documentElement.classList.add('v19-text-motion');
  // Reduced-motion preference can change while the page is open.
  reducedMotion.addEventListener?.('change',e=>{
    if(e.matches){document.documentElement.classList.remove('v19-text-motion');
      steps?.classList.remove('v19-flow-ready','v19-in-view');}
  });
})();
