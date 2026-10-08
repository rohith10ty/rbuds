import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ShowcaseSwiper from './components/ShowcaseSwiper';
import About from './components/About';
import ProductListings from './components/ProductListings';
import ProductDetailModal from './components/ProductDetailModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import Navbar from './components/Navbar';
import { PRODUCTS } from './data/products';
import { Check } from 'lucide-react';
import { scrollToSection } from './lib/scroll';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('rbuds_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('rbuds_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('rbuds_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Sync Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('rbuds_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync Wishlist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('rbuds_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Sync User to LocalStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('rbuds_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('rbuds_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product) => {
    const color = product.selectedColor || (product.colors && product.colors[0]?.name) || 'Standard';
    const qty = product.quantity || 1;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedColor === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            selectedColor: color,
            quantity: qty
          }
        ];
      }
    });

    showToast(`Added ${product.name} (${color}) to Bag!`);
  };

  const handleUpdateQuantity = (productId, color, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId, color);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.selectedColor === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId, color) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === productId && item.selectedColor === color))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (productId) => {
    const exists = wishlist.includes(productId);
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (exists) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast(`Removed ${prod?.name || 'Item'} from Wishlist`, 'info');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast(`Saved ${prod?.name || 'Item'} to Wishlist! ❤️`);
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-outfit selection:bg-slate-900 selection:text-white">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-slate-700 animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage.message}</span>
        </div>
      )}

      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} onOpenAuth={() => setIsAuthOpen(true)} currentUser={currentUser} />

      {/* 1. Hero Section */}
      <Hero
        onExploreShowcase={() => scrollToSection('showcase')}
        onBrowseProducts={() => scrollToSection('products')}
      />

      {/* 2. Scroll-controlled featured collection */}
      <ShowcaseSwiper
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* 3. About */}
      <About />

      {/* 4. Products Listings Section */}
      <ProductListings
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
      />

      {/* 5. Support */}
      <Contact />

      {/* 6. Footer */}
      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Login & Signup Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          showToast(`Welcome back, ${user.name}!`);
        }}
      />

    </div>
  );
}
