"use client";

import { useState, useMemo } from "react";
import PayPalButton from "./PayPalButton";

export default function CheckoutModal({ cart, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "NG",
  });

  const totalUSD = useMemo(
    () => cart.reduce((s, i) => s + (i.priceUSD || 0) * (i.qty || 1), 0),
    [cart]
  );

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const valid = form.name && form.email && form.address && totalUSD > 0;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-lightd p-6 rounded-xl max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-white text-xl">✕</button>

        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        {/* CART SUMMARY */}
        <div className="mb-4">
          {cart.map((it) => (
            <div key={it.id} className="flex justify-between text-sm mb-1">
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-gray-400">Qty: {it.qty}</div>
              </div>
              <div className="text-right">
                <div>${(it.priceUSD * it.qty).toFixed(2)}</div>
              </div>
            </div>
          ))}

          <div className="mt-3 border-t border-gray-600 pt-3 flex justify-between font-bold">
            <div>Total</div>
            <div>${totalUSD.toFixed(2)}</div>
          </div>
        </div>

        {/* CUSTOMER FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="input" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="input" />
          <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="input" />
          <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="input" />
          <input name="postal_code" value={form.postal_code} onChange={handleChange} placeholder="Postal code" className="input" />
        </div>

        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Shipping address" className="input mb-4 h-20" />

        {/* PAYPAL BUTTON */}
        <div className="flex flex-col gap-3">
          {valid ? (
            <PayPalButton
              productId={`cart-${Date.now()}`}
              productName="Print Order"
              priceUSD={totalUSD.toFixed(2)}
              form={form}
              cart={cart}
              totalUSD={totalUSD}
            />
          ) : (
            <button
              disabled
              className="w-full py-3 rounded bg-gray-600 text-gray-300 cursor-not-allowed"
            >
              Fill required details to continue
            </button>
          )}
        </div>

        <p className="text-xs text-gray-400 mt-3">
          After successful payment, the order is verified and recorded.
        </p>
      </div>
    </div>
  );
}
