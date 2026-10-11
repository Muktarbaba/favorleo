"use client";

import { useState } from "react";
import products from "@/app/data/products";
import Navbar from "@/app/components/Navbar";
import ProductModal from "@/app/components/ProductModal";
import CartModal from "@/app/components/CartModal";
import ShopifyCollection from "@/app/components/ShopifyCollection";
import Image from "next/image";

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showShopify, setShowShopify] = useState(false); // toggle Shopify view

  // ✅ Add item WITH quantity
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    setSelectedProduct(null);
    setShowCart(true);
  };

  // ✅ Remove an item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // OPTIONAL: reduce quantity by one
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <section className="bg-dark text-white py-20 min-h-screen relative">
      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <div className="max-w-[1150px] mx-auto px-4 pt-24">
        
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-green">PRINT SHOP</h1>

          {/* Show Cart button */}
          <button
            onClick={() => setShowCart(true)}
            className="bg-green px-4 py-2 rounded-lg text-white"
          >
            Cart ({cart.reduce((sum, item) => sum + item.qty, 0)})
          </button>
        </div>

       <div className="mb-8">
  <a
    href="/shopify"
    className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
  >
    Pay in Naira
  </a>
</div>



        {/* HORIZONTAL PRODUCTS - USD */}
       <div className="
  grid grid-cols-2 gap-4
  md:flex md:overflow-x-auto md:gap-6
  pb-4 scrollbar-hide
">
  {products.map((p) => (

            <div
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className="
  bg-lightd p-4 md:p-6 rounded-xl shadow cursor-pointer 
  hover:bg-opacity-90 transition
  w-full md:min-w-[260px]
"

            >
              <Image
                src={p.image}
                alt={p.title}
                width={250}
                height={200}
                className="rounded-lg mb-3 object-cover w-full h-[150px] md:h-[200px]"

              />

              <h2 className="text-xl font-semibold">{p.title}</h2>

              <p className="text-gray-400">
                ${p.priceUSD.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      {/* CART MODAL */}
      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          removeFromCart={removeFromCart}
          decreaseQty={decreaseQty}
          clearCart={() => setCart([])}
        />
      )}
    </section>
  );
}
