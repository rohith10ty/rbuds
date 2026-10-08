import React, { useState } from 'react';
import { Menu, X, ShoppingBag, UserRound } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenAuth, currentUser }) {
  const [open, setOpen] = useState(false);
  const links = [{ label: 'The edit', href: '#showcase' }, { label: 'Shop', href: '#products' }, { label: 'Our story', href: '#about' }, { label: 'Support', href: '#contact' }];
  return <header className="site-nav">
    <a className="brand-mark" href="#hero" aria-label="RBuds home"><img src="/rbuds-wordmark.png" alt="RBUDs" /></a>
    <nav className="nav-links" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <div className="nav-actions">
      <button className="nav-icon" onClick={onOpenAuth} aria-label={currentUser ? `Account: ${currentUser.name}` : 'Account'}><UserRound size={19} strokeWidth={1.7}/></button>
      <button className="nav-bag" onClick={onOpenCart} aria-label={`Bag with ${cartCount} items`}><ShoppingBag size={19} strokeWidth={1.7}/><span>Bag ({cartCount})</span></button>
      <button className="nav-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={23}/> : <Menu size={23}/>}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>}
  </header>;
}
