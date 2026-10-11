import { NextResponse } from "next/server";
import crypto from "crypto";

// ✅ VERIFY PAYPAL SIGNATURE (SECURE)
async function verifyPayPalSignature(req, rawBody) {
  const headers = Object.fromEntries(req.headers.entries());

  const res = await fetch(
    "https://api-m.paypal.com/v1/notifications/verify-webhook-signature",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.PAYPAL_CLIENT_ID + ":" + process.env.PAYPAL_SECRET
          ).toString("base64"),
      },
      body: JSON.stringify({
        transmission_id: headers["paypal-transmission-id"],
        transmission_time: headers["paypal-transmission-time"],
        cert_url: headers["paypal-cert-url"],
        auth_algo: headers["paypal-auth-algo"],
        transmission_sig: headers["paypal-transmission-sig"],
        webhook_id: process.env.PAYPAL_WEBHOOK_ID,
        webhook_event: JSON.parse(rawBody),
      }),
    }
  );

  const data = await res.json();
  return data.verification_status === "SUCCESS";
}


export async function POST(req) {
  try {
    // Get raw body as string
    const bodyText = await req.text();
    const body = JSON.parse(bodyText);

    const isValid = await verifyPayPalSignature(req, bodyText); // pass raw string
    if (!isValid) {
      console.error("❌ Invalid PayPal Webhook Signature");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const eventType = body.event_type;
    console.log("✅ PAYPAL WEBHOOK RECEIVED:", eventType);

    if (eventType === "PAYMENT.CAPTURE.COMPLETED") {
      const orderId = body.resource?.supplementary_data?.related_ids?.order_id;
      console.log("✅ Payment Completed:", orderId);
      // TODO: Save order, send email, mark as paid
    }

    if (eventType === "PAYMENT.CAPTURE.DENIED") {
      console.log("❌ Payment Denied:", body.resource?.id);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("WEBHOOK ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
