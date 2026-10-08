import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Truck,
  CheckCircle2
} from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 99 || subtotal === 0 ? 0 : 9.99;
  const estimatedTax = (subtotal - discount) * 0.08;
  const total = Math.max(0, subtotal - discount + shipping + estimatedTax);

  const freeShippingThreshold = 99;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'RBUDS20') {
      setDiscountPercent(20);
      setCouponSuccess('20% Spring discount applied!');
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try "RBUDS20"');
      setCouponSuccess('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      onClearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between relative overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-slate-900" />
            <h3 className="font-extrabold text-lg text-slate-900">Your Bag</h3>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs">
          {remainingForFreeShipping > 0 ? (
            <p className="text-slate-600 font-medium mb-1.5 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-blue-600" />
              Add <span className="font-bold text-slate-900">${remainingForFreeShipping.toFixed(2)}</span> more for <span className="text-blue-600 font-bold">FREE Express Delivery</span>!
            </p>
          ) : (
            <p className="text-emerald-700 font-semibold mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              You unlocked <span className="font-bold">FREE Express Delivery</span>!
            </p>
          )}
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                progressToFreeShipping >= 100 ? 'bg-emerald-500' : 'bg-blue-600'
              }`}
              style={{ width: `${progressToFreeShipping}%` }}
            ></div>
          </div>
        </div>

        {/* Body / Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
          {orderPlaced ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Order Placed!</h4>
              <p className="text-sm text-slate-500 mt-2 max-w-xs">
                Thank you for choosing RBuds. We've sent an order confirmation & tracking details to your email.
              </p>
              <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 w-full">
                <span className="block font-mono text-slate-900 font-bold">Order #RBUDS-{Math.floor(100000 + Math.random() * 900000)}</span>
                <span className="text-[11px] text-slate-400 mt-1 block">Estimated Delivery: 2-3 Business Days</span>
              </div>
              <button
                onClick={() => {
                  setOrderPlaced(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Your bag is empty</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Explore our flagship showcase and premium catalog to find your acoustic match.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
              >
                Browse Earbuds
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedColor || 'default'}`} className="py-4 flex gap-4 items-center">
                
                {/* Product Thumbnail */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200/80 p-2 shrink-0 flex items-center justify-center">
                  <img src={`/${item.image}`} alt={item.name} className="w-full h-full object-contain" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-slate-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.brand} • {item.selectedColor || 'Standard'}
                  </p>
                  <div className="text-sm font-extrabold text-slate-900 mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => onRemoveItem(item.id, item.selectedColor)}
                    className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center bg-slate-100 rounded-full p-0.5 border border-slate-200">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.selectedColor, Math.max(1, item.quantity - 1))}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-200 shadow-sm"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="px-2 text-xs font-bold text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-200 shadow-sm"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer / Summary / Checkout */}
        {!orderPlaced && cartItems.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
            
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Coupon code (e.g. RBUDS20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 uppercase font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
              >
                Apply
              </button>
            </form>

            {couponSuccess && <p className="text-[11px] text-emerald-600 font-semibold">{couponSuccess}</p>}
            {couponError && <p className="text-[11px] text-rose-500 font-medium">{couponError}</p>}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Voucher Discount (20%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-Bit SSL Encrypted & Guaranteed Checkout</span>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
