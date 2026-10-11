"use client";

import Navbar from "@/app/components/Navbar";
import ShopifyCollection from "@/app/components/ShopifyCollection";

export default function ShopifyPage() {
  return (
    <section className="bg-dark text-white min-h-screen py-20">
        {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <div className="max-w-[1150px] mx-auto px-4">
       

        <h1 className="text-4xl font-bold text-green mb-6 mt-6"> (Pay in Naira)</h1>

        <ShopifyCollection />
      </div>
    </section>
  );
}
