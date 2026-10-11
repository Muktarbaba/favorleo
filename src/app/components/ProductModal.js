"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ProductModal({ product, onClose, addToCart }) {
  // ✅ Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-end md:items-center justify-center p-2 md:p-6">
      
      {/* ✅ Bottom sheet on mobile */}
      <div className="bg-lightd w-full md:max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-xl p-4 md:p-6 relative flex flex-col md:flex-row gap-4">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl"
        >
          ✕
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={380}
            height={380}
            className="rounded-lg object-cover w-full h-[220px] md:h-auto"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              {product.title}
            </h2>

            <p className="text-gray-300 text-sm md:text-base mb-3">
              {product.description}
            </p>

            <p className="text-green text-lg md:text-xl font-semibold mb-4">
              ₦{product.priceNGN.toLocaleString()} • ${product.priceUSD}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => addToCart(product)}
              className="bg-green py-3 rounded-lg w-full text-white font-semibold"
            >
              Add to Cart
            </button>

            <button
              onClick={onClose}
              className="border border-gray-500 py-3 rounded-lg w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
