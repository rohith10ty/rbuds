import React, { useEffect, useState } from 'react';
import { Check, Heart, Minus, Plus, ShoppingBag, X } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [color, setColor] = useState(product.colors?.[0] || { name: 'Standard', hex: '#222' });
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = event => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  const add = () => {
    onAddToCart({ ...product, selectedColor: color.name, quantity });
    setAdded(true);
    window.setTimeout(onClose, 700);
  };

  return <div className="product-modal-backdrop" onMouseDown={onClose} role="presentation">
    <div className="product-modal" role="dialog" aria-modal="true" aria-label={product.name} onMouseDown={event => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close product details"><X size={22}/></button>
      <div className="product-modal-art"><span>{product.brand.toUpperCase()} / {product.category.toUpperCase()}</span><img src={`/${product.image}`} alt={`${product.brand} ${product.name}`}/></div>
      <div className="product-modal-info"><span className="eyebrow dark"><span className="eyebrow-line" /> THE COLLECTION</span><h2>{product.name}</h2><p className="product-modal-tagline">{product.tagline}</p><div className="product-modal-price">${product.price.toFixed(2)}</div><p className="product-modal-description">{product.description}</p>
        <div className="product-modal-specs"><h3>THE DETAILS</h3><div><span>Battery</span><strong>{product.specs?.battery}</strong></div><div><span>Noise control</span><strong>{product.specs?.anc}</strong></div><div><span>Water resistance</span><strong>{product.specs?.waterproof}</strong></div><div><span>Driver</span><strong>{product.specs?.driver}</strong></div></div>
        {product.colors?.length > 0 && <div className="product-modal-colors"><span>FINISH / {color.name.toUpperCase()}</span><div>{product.colors.map(item => <button key={item.name} style={{ background: item.hex }} className={item.name === color.name ? 'selected' : ''} onClick={() => setColor(item)} aria-label={`Choose ${item.name}`} title={item.name}/>)}</div></div>}
        <div className="product-modal-actions"><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={16}/></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={16}/></button></div><button className="modal-add" onClick={add}>{added ? <><Check size={18}/> ADDED</> : <><ShoppingBag size={18}/> ADD TO BAG</>}</button><button className={`modal-save ${isWishlisted ? 'saved' : ''}`} onClick={() => onToggleWishlist(product.id)} aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}><Heart size={19} fill={isWishlisted ? 'currentColor' : 'none'}/></button></div>
      </div>
    </div>
  </div>;
}
