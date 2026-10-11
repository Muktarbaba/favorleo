export const payWithPaystack = ({ email, amount, firstname, lastname, onSuccess, onCancel }) => {
  const handler = window.PaystackPop.setup({
    key: "YOUR_PUBLIC_KEY_HERE",  // Replace with your Paystack public key
    email,
    amount: amount * 100, // convert to kobo
    firstname,
    lastname,
    currency: "NGN",
    callback: function (response) {
      onSuccess(response);
    },
    onClose: function () {
      onCancel();
    }
  });

  handler.openIframe();
};
