import React from 'react';
import { ArrowDown, ArrowUpRight, AudioLines, BatteryFull, Droplets } from 'lucide-react';

const highlights = [
  { icon: AudioLines, title: 'Immersive sound', detail: 'Feel every detail' },
  { icon: BatteryFull, title: 'All-day listening', detail: 'Power that keeps up' },
  { icon: Droplets, title: 'Made to move', detail: 'Ready for anything' },
];

export default function Hero({ onExploreShowcase, onBrowseProducts }) {
  return <section id="hero" className="hero-section">
    <div className="hero-inner">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-line" /> THE ART OF LISTENING</span>
        <h1>Sound worth<br /><em>staying for.</em></h1>
        <p>Discover the earbuds that make every detail matter. A considered edit of the world’s most extraordinary wireless sound.</p>
        <div className="hero-actions">
          <button className="button-light" onClick={onExploreShowcase}>Explore the collection <ArrowUpRight size={18} /></button>
          <button className="hero-shop-button" onClick={onBrowseProducts}>Shop all 12 <ArrowUpRight size={18} /></button>
        </div>
        <div className="hero-highlights">
          {highlights.map(({ icon: Icon, title, detail }) => <div className="hero-highlight" key={title}>
            <span className="hero-highlight-icon"><Icon size={23} strokeWidth={1.8} /></span>
            <span><strong>{title}</strong><small>{detail}</small></span>
          </div>)}
        </div>
      </div>
      <div className="hero-art" role="img" aria-label="Samsung Galaxy Buds3 Pro earbuds and open charging case on a dark rock" />
    </div>
    <div className="hero-bottom">
      <button className="hero-scroll-cue" onClick={onExploreShowcase}><span className="hero-scroll-icon"><ArrowDown size={22} /></span><span>SCROLL TO DISCOVER</span></button>
      <span className="hero-bottom-rule" aria-hidden="true" />
      <span className="hero-bottom-index">01 <i /> 02 <i /> 03</span>
      <span className="hero-bottom-note">A CURATED EDIT OF EXTRAORDINARY SOUND</span>
    </div>
  </section>;
}
