"use client";

import { useState, useMemo, useEffect } from "react";
import CheckoutModal from "./CheckoutModal";

export default function CartModal({ cart, onClose, removeFromCart, decreaseQty, clearCart }) {
  const [showCheckout, setShowCheckout] = useState(false);

  // ✅ Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const totalNGN = useMemo(
    () => cart.reduce((s, i) => s + (i.priceNGN || 0) * (i.qty || 1), 0),
    [cart]
  );

  const totalUSD = useMemo(
    () => cart.reduce((s, i) => s + (i.priceUSD || 0) * (i.qty || 1), 0),
    [cart]
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-end md:items-center justify-center p-2 md:p-6">
      
      {/* ✅ Scrollable container */}
      <div className="bg-lightd w-full md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-xl p-4 relative">
        
        <button onClick={onClose} className="absolute top-3 right-4 text-white text-xl">
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between gap-2 text-sm">
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-gray-400">Qty: {item.qty}</div>
                  <div className="text-gray-400">
                    ₦{(item.priceNGN * item.qty).toLocaleString()} • ${((item.priceUSD || 0) * item.qty).toFixed(2)}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-600 px-3 py-1 rounded text-white"
                  >
                    -
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-4 border-t border-gray-600 pt-3 flex justify-between font-bold">
              <div>Total</div>
              <div>₦{totalNGN.toLocaleString()} • ${totalUSD.toFixed(2)}</div>
            </div>
          </div>
        )}

        {/* ✅ Sticky buttons on mobile */}
        <div className="flex gap-2 mt-5 sticky bottom-0 bg-lightd pt-4 pb-2">
          <button
            onClick={onClose}
            className="bg-gray-700 px-4 py-3 rounded w-full"
          >
            Continue Shopping
          </button>

          {cart.length > 0 && (
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-green px-4 py-3 rounded w-full"
            >
              Place Order
            </button>
          )}
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
}
