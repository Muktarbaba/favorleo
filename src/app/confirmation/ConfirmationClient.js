"use client";

import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const params = useSearchParams();
  const provider = params.get("provider");
  const reference = params.get("reference");

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white">
      <div className="bg-lightd p-8 rounded-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold text-green mb-4">
          Payment Successful ✅
        </h1>

        <p>
          <b>Provider:</b> {provider}
        </p>

        {reference && (
          <p>
            <b>Reference:</b> {reference}
          </p>
        )}

        <p className="mt-4 text-gray-300">
          Your payment was completed successfully. Your order is being processed.
        </p>

        <a
          href="/store"
          className="inline-block mt-6 bg-green px-6 py-3 rounded-lg text-black font-semibold"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
