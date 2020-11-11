import React from "react";

import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/images/if.png";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9OfuS4gpdp4WRIgXDMroIPo2";

  // token for payment processing (backend work needed) we dont need it here for now, this fct is here to show that the payment was successful (or not)
  const onToken = (token) => {
    axios({
      url: "/payement",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payement Successful :) !");
        console.log(response);
      })
      .catch((error) => {
        alert("Payement Issue. re-check your credit card !");
        console.log(error);
      });
  };

  return (
    <StripeCheckout
      label="👉🏼 Pay Now 💳"
      name="Y-H Clothing"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your Total is : $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
