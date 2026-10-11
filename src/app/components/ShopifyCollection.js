"use client";

import { useEffect, useRef } from "react";

export default function ShopifyCollection() {
  const containerRef = useRef(null);
  const isLoadedRef = useRef(false); // ✅ prevents double render

  useEffect(() => {
    if (isLoadedRef.current) return; // ✅ stop duplicate Shopify UI
    isLoadedRef.current = true;

    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      document.body.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy || !containerRef.current) return;

      const client = window.ShopifyBuy.buildClient({
        domain: "pn9ia0-3i.myshopify.com",
        storefrontAccessToken: "be3f2890830dc2fe73cf34cb38721395",
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("collection", {
          id: "641482719599",
          node: containerRef.current,
          moneyFormat: "₦{{amount}}",

          options: {
            product: {
              buttonDestination: "modal",
              contents: { options: false },
              text: { button: "View product" },
            },

            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              text: { button: "Add to cart" },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    maxWidth: "400px", // smaller modal width
                    marginLeft: "0px",
                  },
                },
                imgWrapper: {
                  height: "200px", // reduce image height
                  paddingTop: "0px",
                },
                img: {
                  height: "100%",
                  objectFit: "contain", // keeps aspect ratio
                },
              },
            },

            cart: {
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
              events: {
                checkout: () => {
                  window.location.href = "/confirmation?provider=shopify";
                },
              },
            },
          },
        });
      });
    }

    if (window.ShopifyBuy?.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  }, []);

  return <div ref={containerRef} id="collection-component-react" className="w-full" />;
}
