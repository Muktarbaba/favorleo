"use client";

import { useState } from "react";

export default function CheckoutForm({ onNext }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-lightd p-6 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Contact & Shipping</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 mb-3 rounded bg-dark text-white"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 mb-3 rounded bg-dark text-white"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full p-3 mb-3 rounded bg-dark text-white"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />

      <textarea
        placeholder="Shipping Address"
        className="w-full p-3 mb-3 rounded bg-dark text-white"
        rows={3}
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        required
      ></textarea>

      <button className="bg-green px-5 py-3 rounded-lg text-white font-semibold w-full">
        Continue to Payment
      </button>
    </form>
  );
}
