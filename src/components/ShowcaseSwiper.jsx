import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { scrollToShowcaseIndex, scrollToSection } from '../lib/scroll';

const FEATURED_IDS = ['galaxy-buds-3-pro', 'airpods-pro-2', 'powerbeats-pro', 'qc-earbuds'];
const FEATURED = FEATURED_IDS.map((id) => PRODUCTS.find((item) => item.id === id)).filter(Boolean);

export default function ShowcaseSwiper({ onSelectProduct }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef(null);
  const accumDeltaRef = useRef(0);
  const accumResetTimerRef = useRef(null);

  activeRef.current = active;

  useEffect(() => {
    let frame = 0;

    const navigate = (event) => {
      setActive(event.detail);
    };

    // Keep active index in sync with general scroll
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (isLockedRef.current) return;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / travel));
        const index = Math.min(FEATURED.length - 1, Math.round(progress * (FEATURED.length - 1)));
        setActive(index);
      });
    };

    // Buttery wheel step controller: advances exactly 1 item per deliberate gesture
    const handleWheel = (event) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 60 && rect.bottom >= window.innerHeight - 60;

      if (!inView) return;

      const delta = event.deltaY;
      const currentIdx = activeRef.current;

      // Allow natural scroll to Hero when scrolling up at product 0
      if (delta < 0 && currentIdx === 0 && rect.top >= -15) {
        return;
      }

      // Allow natural scroll to About when scrolling down at product 3 (last)
      if (delta > 0 && currentIdx === FEATURED.length - 1 && rect.bottom <= window.innerHeight + 15) {
        return;
      }

      // Inside showcase pinned area: prevent sudden multi-item jumps
      event.preventDefault();

      // If a transition is already in flight, swallow the inertia/fast scroll
      if (isLockedRef.current) {
        return;
      }

      // Accumulate scroll delta so tiny twitches don't trigger switches
      accumDeltaRef.current += delta;
      clearTimeout(accumResetTimerRef.current);
      accumResetTimerRef.current = setTimeout(() => {
        accumDeltaRef.current = 0;
      }, 180);

      const THRESHOLD = 32; // deliberate scroll intent

      if (Math.abs(accumDeltaRef.current) >= THRESHOLD) {
        const direction = accumDeltaRef.current > 0 ? 1 : -1;
        accumDeltaRef.current = 0;

        const nextIdx = Math.max(0, Math.min(FEATURED.length - 1, currentIdx + direction));
        if (nextIdx !== currentIdx) {
          isLockedRef.current = true;
          setActive(nextIdx);
          scrollToShowcaseIndex(nextIdx);

          clearTimeout(lockTimerRef.current);
          lockTimerRef.current = setTimeout(() => {
            isLockedRef.current = false;
          }, 850);
        }
      }
    };

    update();
    window.addEventListener('rbuds:showcase-index', navigate);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(lockTimerRef.current);
      clearTimeout(accumResetTimerRef.current);
      window.removeEventListener('rbuds:showcase-index', navigate);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const goTo = (index) => {
    if (index < 0 || index >= FEATURED.length) return;
    isLockedRef.current = true;
    setActive(index);
    scrollToShowcaseIndex(index);
    clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      isLockedRef.current = false;
    }, 850);
  };

  return (
    <section id="showcase" ref={sectionRef} className="showcase-scroll" aria-label="Featured earbuds collection">
      <div 
        className="showcase-stage" 
        style={{ '--showcase-tint': ['#d8d2ed', '#dae5f3', '#eedbdc', '#ddd4ed'][active] }}
      >
        {/* Top line info */}
        <div className="showcase-topline">
          <span>THE SOUND EDIT / 001—004</span>
          <span>SCROLL TO EXPLORE</span>
        </div>

        {/* Slide Content on Left */}
        {FEATURED.map((product, index) => (
          <div 
            key={product.id} 
            className={`showcase-content ${index === active ? 'is-current' : index < active ? 'is-before' : 'is-after'}`} 
            aria-hidden={index !== active}
          >
            <div className="showcase-index">
              0{index + 1} <span>/ 0{FEATURED.length}</span>
            </div>
            <span className="eyebrow dark">
              <span className="eyebrow-line" /> {product.brand.toUpperCase()} / FEATURED
            </span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="showcase-price">${product.price.toFixed(2)}</div>
            <button 
              className="text-link" 
              tabIndex={index === active ? 0 : -1} 
              onClick={() => onSelectProduct(product)}
            >
              EXPLORE PRODUCT <ArrowUpRight size={18} />
            </button>
          </div>
        ))}

        {/* 3D Product Visual on Right */}
        <div className="showcase-art" aria-hidden="true">
          <div className="showcase-glow" />
          {FEATURED.map((product, index) => {
            const distance = index - active;
            const position = distance === 0 
              ? 'is-current' 
              : distance === 1 
              ? 'is-next' 
              : distance === 2 
              ? 'is-future' 
              : distance > 2 
              ? 'is-farthest' 
              : distance === -1 
              ? 'is-before' 
              : 'is-past';
            
            return (
              <React.Fragment key={product.id}>
                <img 
                  src={`/${product.image}`} 
                  alt="" 
                  className={`showcase-product-ambient ${position}`} 
                />
                <img 
                  src={`/${product.image}`} 
                  alt="" 
                  className={`showcase-product ${position}`} 
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Bar: Progress lines & controls */}
        <div className="showcase-bottomline">
          <div className="showcase-progress" aria-label={`Product ${active + 1} of ${FEATURED.length}`}>
            {FEATURED.map((product, index) => (
              <button 
                key={product.id} 
                className={index === active ? 'current' : ''} 
                onClick={() => goTo(index)} 
                aria-label={`Show ${product.name}`} 
              />
            ))}
          </div>
          <div className="showcase-controls">
            <button 
              onClick={() => goTo(active - 1)} 
              disabled={active === 0} 
              aria-label="Previous product"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => goTo(active + 1)} 
              disabled={active === FEATURED.length - 1} 
              aria-label="Next product"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
