"use client";

import { useEffect, useRef } from "react";

export default function PayPalButton({
  productId,
  productName,
  priceUSD,
  form,
  cart,
  totalUSD,
}) {
  const paypalRef = useRef(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    renderedRef.current = true;

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=" +
      process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  reference_id: productId,
                  description: productName,
                  amount: {
                    currency_code: "USD",
                    value: priceUSD,
                  },
                },
              ],
            });
          },

          // ✅ SECURE APPROVAL
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();

            // ✅ Save locally for confirmation page
            localStorage.setItem(
              "lastOrder",
              JSON.stringify({
                name: form.name,
                email: form.email,
                phone: form.phone,
                address: form.address,
                cart,
                totalUSD,
              })
            );

            // ✅ Send ONLY orderId to backend for verification
            const res = await fetch("/api/paypal-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                cart,
                customer: form,
                totalUSD,
                orderId: order.id, // ✅ ONLY ID — NOT FULL DATA
              }),
            });

            const result = await res.json();

            if (!result.success) {
              alert("Payment received but verification failed.");
              return;
            }

            // ✅ Redirect after verification + email
            window.location.href = `/confirmation?provider=paypal&reference=${order.id}`;
          },

          onError: (err) => {
            console.error("PayPal error:", err);
            alert("Payment failed. Please try again.");
          },
        })
        .render(paypalRef.current);
    };

    return () => {
      renderedRef.current = false;
    };
  }, [productId, productName, priceUSD, form, cart, totalUSD]);

  return <div ref={paypalRef} />;
}
