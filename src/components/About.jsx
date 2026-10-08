import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return <section id="about" className="about-section">
    <div className="about-top"><span>THE RBUDS POINT OF VIEW</span><span>LISTEN MORE CLOSELY / 2026</span></div>
    <div className="about-main"><div><span className="eyebrow"><span className="eyebrow-line" /> OUR STORY</span><h2>Good sound changes<br /><em>everything.</em></h2></div><div className="about-copy"><p>We believe the best technology disappears into the experience. RBuds brings together remarkable earbuds from the brands shaping how we listen today.</p><p>Every pair in the collection earns its place through design, comfort and the feeling it leaves after the music stops.</p><a href="#products" className="text-link light">EXPLORE THE EDIT <ArrowUpRight size={17}/></a></div></div>
    <div className="about-points"><div><span>01</span><strong>Considered selection</strong><p>A focused edit of standout wireless audio.</p></div><div><span>02</span><strong>Details first</strong><p>Sound, fit and design in equal measure.</p></div><div><span>03</span><strong>Made for your day</strong><p>From the first commute to the final track.</p></div></div>
  </section>;
}
