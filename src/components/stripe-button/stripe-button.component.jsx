import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9nqQfsX39QQnDTuevmSiCs7W00Eu9lCqZP";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  
  return (
    <StripeCheckout
      label="Pay now"
      name="T Shop Co."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
