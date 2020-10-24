import React from "react";

import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/logo-100px.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9OfuS4gpdp4WRIgXDMroIPo2";

  // token for payment processing (backend work needed) we dont need it here for now, this fct is here to show that the payment was successful (or not)
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful !");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Y-H Clothing"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your Total is : $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
