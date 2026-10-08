import Lenis from 'lenis';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let lenis;

function showcaseMetrics() {
  const section = document.getElementById('showcase');
  if (!section) return null;
  const top = section.getBoundingClientRect().top + window.scrollY;
  const travel = Math.max(1, section.offsetHeight - window.innerHeight);
  return { top, travel, end: top + travel };
}

export function scrollToShowcaseIndex(index) {
  const metrics = showcaseMetrics();
  if (!metrics || index < 0 || index > 3) return;
  const destination = metrics.top + (metrics.travel * index) / 3;
  window.dispatchEvent(new CustomEvent('rbuds:showcase-index', { detail: index }));
  if (lenis) {
    lenis.scrollTo(destination, { duration: 0.9 });
  } else {
    window.scrollTo({ top: destination, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
}

export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
}

if (!reducedMotion.matches) {
  lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    duration: 1.0,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false,
  });
}

export { lenis };

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const id = anchor.hash.slice(1);
  if (!id || !document.getElementById(id)) return;
  event.preventDefault();
  history.replaceState(null, '', `#${id}`);
  scrollToSection(id);
});
