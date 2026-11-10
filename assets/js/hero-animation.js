/**
 * EIGENKERN V15 — Animated hero canvas + gentle mouse parallax.
 * -------------------------------------------------------------
 *  - No CDN, library, telemetry or external images.
 *  - requestAnimationFrame capped near 30fps, only when hero visible.
 *  - Device pixel ratio capped at 1.5 to save GPU and battery.
 *  - Canvas is 100% decorative, all meaning is in accessible HTML text.
 *  - Reduced-motion preference disables drawing/hover movement.
 *  - SVG <animateMotion> particles handle actual directional flow.
 */
(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('ek-hero-waves');
  const flow = document.getElementById('ek-flow');
  const flowSvg = flow?.querySelector('.ek-flow__paths');
  if (!hero || !canvas || !flow) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let width = 0, height = 0, pxRatio = 1, last = 0, rafId = 0;
  let visible = true, running = false, t = 0;
  let pointerTarget = {x: .5, y: .5};
  let pointer = {x: .5, y: .5};
  const TAU = Math.PI * 2;

  function resize() {
    const r = hero.getBoundingClientRect();
    width = Math.max(1, Math.round(r.width));
    height = Math.max(1, Math.round(r.height));
    pxRatio = Math.min(1.5, window.devicePixelRatio || 1);
    canvas.width = Math.round(width * pxRatio);
    canvas.height = Math.round(height * pxRatio);
    ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
  }
  function curve(y0, amplitude, phase, bottom, index) {
    ctx.beginPath();
    const dx = Math.max(7, width / 135);
    for (let x = -4; x <= width + dx; x += dx) {
      const u = x / width;
      const smooth = Math.sin(u * Math.PI) * .7 + .35;
      const drift = Math.sin(u * 6.6 + phase + t * .24) * amplitude * smooth;
      const second = Math.sin(u * 12.7 - phase * .45 + t * .18) * amplitude * .3;
      const y = y0 + drift + second + (pointer.y - .5) * (bottom ? 15 : 9);
      if (x < 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.strokeStyle = bottom ? `rgba(38,151,225,${.085 + index * .012})` : `rgba(52,149,222,${.06 + index*.011})`;
    ctx.lineWidth = index % 4 === 0 ? 1.15 : .75;
    ctx.stroke();
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    pointer.x += (pointerTarget.x - pointer.x) * .075;
    pointer.y += (pointerTarget.y - pointer.y) * .075;
    const topLine = height * .21;
    const botLine = height * .82;
    // Animated architectural lines span the ENTIRE hero, not only the flow card.
    for (let i = 0; i < 18; i++) {
      curve(topLine - 24 + i * 5, 26 + i*.34, i * .14, false, i);
      curve(botLine - 30 + i * 5.2, 27 + i*.38, i * .15 + 1.7, true, i);
    }
    // Thin illuminated "current" lines move through the background.
    const cyan = ctx.createLinearGradient(0,0,width,0);
    cyan.addColorStop(0,'rgba(37,172,239,0)');
    cyan.addColorStop(.35,'rgba(41,182,239,.23)');
    cyan.addColorStop(.7,'rgba(42,201,249,.36)');
    cyan.addColorStop(1,'rgba(41,182,239,0)');
    for (let j = 0; j < 2; j++) {
      ctx.beginPath();
      for (let x = 0; x <= width + 8; x+=8) {
        const u = x/width;
        const y = (j ? botLine : topLine) + Math.sin(u*7.8 + t*.35 + j*2.6) * 38 + (pointer.y-.5)*17;
        if (x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = cyan;ctx.lineWidth = j ? 1.75 : 1.35;ctx.stroke();
    }
    // Modest drifting particles, distributed in the background rather than UI text.
    for(let i=0;i<46;i++) {
      const progress = (t*.015*(i%4+2) + i*.2173)%1;
      const x = progress * width;
      const y = height*(i%2 ? .8 : .18) + Math.sin(i*2.7 + t*.28) * 55;
      const alpha = .08 + .15*Math.sin(progress*Math.PI);
      ctx.fillStyle=`rgba(22,111,190,${alpha.toFixed(3)})`;
      ctx.beginPath();ctx.arc(x,y,(i%6===0 ? 1.8 : 1.1),0,TAU);ctx.fill();
    }
  }
  function frame(now) {
    if (!running) return;
    rafId = requestAnimationFrame(frame);
    if (now - last < 32) return; // ~30fps max
    const delta = Math.min(64, now-last || 32);
    last = now;
    t += delta * .001;
    draw();
  }
  function start() {
    if (running || motionPref.matches || !visible || document.hidden) return;
    if (typeof flowSvg?.unpauseAnimations === 'function') flowSvg.unpauseAnimations();
    running = true; last = 0; rafId = requestAnimationFrame(frame);
  }
  function stop() {
    running=false;cancelAnimationFrame(rafId);rafId=0;
    if (typeof flowSvg?.pauseAnimations === 'function') flowSvg.pauseAnimations();
  }
  function onVisibility() {if(document.hidden) stop(); else start();}
  function onPointer(e) {
    if (!finePointer.matches || motionPref.matches) return;
    const r=hero.getBoundingClientRect();
    pointerTarget={x:Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),y:Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))};
    // CSS controls gentle two-layer parallax; JS never changes text position.
    hero.style.setProperty('--ek-pointer-x', `${((pointerTarget.x-.5)*24).toFixed(2)}px`);
    hero.style.setProperty('--ek-pointer-y', `${((pointerTarget.y-.5)*17).toFixed(2)}px`);
  }
  function onLeave() {pointerTarget={x:.5,y:.5};hero.style.setProperty('--ek-pointer-x','0px');hero.style.setProperty('--ek-pointer-y','0px');}
  function onMotionChange() {if(motionPref.matches){stop();t=0;pointerTarget={x:.5,y:.5};pointer={x:.5,y:.5};onLeave();draw();} else start();}
  resize();draw();
  hero.addEventListener('pointermove',onPointer,{passive:true});
  hero.addEventListener('pointerleave',onLeave,{passive:true});
  document.addEventListener('visibilitychange',onVisibility);
  window.addEventListener('resize',resize,{passive:true});
  motionPref.addEventListener?.('change',onMotionChange);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting||false;if(visible)start();else stop();},{rootMargin:'50px'}).observe(hero);
  }
  start();
})();
