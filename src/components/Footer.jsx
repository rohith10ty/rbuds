import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><img src="/rbuds-wordmark.png" alt="RBUDs" /><p>Sound worth staying for.</p></div><div><span>DISCOVER</span><a href="#showcase">The edit</a><a href="#products">Shop all</a><a href="#about">Our story</a></div><div><span>EXPLORE</span><a href="#products">Noise cancelling</a><a href="#products">Everyday listening</a><a href="#products">Hi-fi audio</a></div><a className="footer-top" href="#hero" aria-label="Back to top"><ArrowUpRight size={22}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RBuds. Curated for better listening.</span><span>BUILT AROUND THE MUSIC</span></div></footer>;
}
