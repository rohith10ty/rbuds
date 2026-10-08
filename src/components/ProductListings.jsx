import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Heart, Search, ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function ProductListings({ onSelectProduct, onAddToCart, wishlist, onToggleWishlist, searchQuery, onSearchQueryChange }) {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [added, setAdded] = useState(null);
  const products = useMemo(() => PRODUCTS.filter(product => {
    const query = searchQuery.toLowerCase().trim();
    return (category === 'All' || product.category === category) && (!query || `${product.name} ${product.brand} ${product.description}`.toLowerCase().includes(query));
  }).sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : sort === 'name' ? a.name.localeCompare(b.name) : 0), [category, sort, searchQuery]);

  const add = (event, product) => {
    event.stopPropagation();
    onAddToCart(product);
    setAdded(product.id);
    window.setTimeout(() => setAdded(null), 1600);
  };

  return <section id="products" className="catalog-section">
    <div className="catalog-heading">
      <div><span className="eyebrow dark"><span className="eyebrow-line" /> THE COLLECTION</span><h2>Find your frequency.</h2><p>Twelve exceptional ways to get closer to the music.</p></div>
      <span className="catalog-count">12 PRODUCTS / 01 EDIT</span>
    </div>
    <div className="catalog-tools">
      <div className="catalog-categories" role="group" aria-label="Filter by category">{CATEGORIES.map(item => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <div className="catalog-filters">
        <label className="catalog-search"><Search size={17}/><input value={searchQuery} onChange={event => onSearchQueryChange(event.target.value)} placeholder="Search the edit" aria-label="Search products" /></label>
        <select value={sort} onChange={event => setSort(event.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name</option></select>
      </div>
    </div>
    {products.length ? <div className="catalog-grid">{products.map(product => <article className="catalog-card" key={product.id}>
      <button className="catalog-image" onClick={() => onSelectProduct(product)} aria-label={`View ${product.name}`}>
        <span className="catalog-badge">{product.badge}</span><img src={`/${product.image}`} alt={`${product.brand} ${product.name}`} loading="lazy" />
        <span className="catalog-view">VIEW DETAILS <ArrowUpRight size={15}/></span>
      </button>
      <div className="catalog-card-info">
        <div className="catalog-card-top"><span>{product.brand.toUpperCase()}</span><button onClick={() => onToggleWishlist(product.id)} aria-label={wishlist.includes(product.id) ? `Remove ${product.name} from wishlist` : `Save ${product.name}`} className={wishlist.includes(product.id) ? 'saved' : ''}><Heart size={19} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}/></button></div>
        <button className="catalog-name" onClick={() => onSelectProduct(product)}>{product.name}</button>
        <p>{product.tagline}</p>
        <div className="catalog-card-bottom"><strong>${product.price.toFixed(2)}</strong><button onClick={event => add(event, product)} aria-label={`Add ${product.name} to bag`}>{added === product.id ? <Check size={19}/> : <ShoppingBag size={19}/>}</button></div>
      </div>
    </article>)}</div> : <div className="catalog-empty">No products match your search. <button onClick={() => { setCategory('All'); onSearchQueryChange(''); }}>Clear filters</button></div>}
  </section>;
}
