import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Get PayPal access token (LIVE)
async function getPayPalAccessToken() {
  const res = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.PAYPAL_CLIENT_ID + ":" + process.env.PAYPAL_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return data.access_token;
}

export async function POST(req) {
  try {
    const { cart, customer, totalUSD, orderId } = await req.json();

    // ✅ 1. VERIFY PAYMENT WITH PAYPAL
    const accessToken = await getPayPalAccessToken();

    const verifyRes = await fetch(
      `https://api-m.paypal.com/v2/checkout/orders/${orderId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const paypalData = await verifyRes.json();

    if (paypalData.status !== "COMPLETED") {
      return NextResponse.json({
        success: false,
        error: "Payment not completed",
      });
    }

    // ✅ 2. EMAIL TRANSPORT
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    // ✅ 3. FORMAT CART
    const cartHTML = cart
      .map(
        (item) => `
        <li>
          <b>${item.title}</b> — Qty: ${item.qty} — $${item.priceUSD}
        </li>`
      )
      .join("");

    // ✅ 4. SEND ADMIN EMAIL
    await transporter.sendMail({
      from: `"Your Store" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🧾 New PayPal USD Order",
      html: `
        <h2>New PayPal Order</h2>

        <h3>Customer</h3>
        <p>Name: ${customer.name}</p>
        <p>Email: ${customer.email}</p>
        <p>Phone: ${customer.phone}</p>
        <p>Address: ${customer.address}</p>

        <h3>Order</h3>
        <ul>${cartHTML}</ul>

        <h3>Total Paid: $${totalUSD}</h3>
        <p>Transaction ID: ${orderId}</p>
      `,
    });

    // ✅ 5. SEND CUSTOMER EMAIL
    await transporter.sendMail({
      from: `"Your Store" <${process.env.FROM_EMAIL}>`,
      to: customer.email,
      subject: "✅ Payment Successful - Order Confirmation",
      html: `
        <h2>Hi ${customer.name},</h2>

        <p>Your PayPal payment was successful.</p>

        <h3>Your Order</h3>
        <ul>${cartHTML}</ul>

        <h3>Total Paid: $${totalUSD}</h3>

        <p>Payment Reference: ${orderId}</p>
        <p>Thank you for shopping with us.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PAYPAL API ERROR:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
