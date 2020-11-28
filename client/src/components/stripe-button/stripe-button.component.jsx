import React, { useContext } from "react";

import StripeCheckout from "react-stripe-checkout";

import { CartContext } from "../../providers/cart/cart.provider";

import Logo from "../../assets/images/if.png";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const { clearCart } = useContext(CartContext);
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9OfuS4gpdp4WRIgXDMroIPo2";

  // token for payment processing (backend work needed)
  const onToken = (token) => {
    clearCart();
    axios({
      url: "https://yh-clothing.herokuapp.com/payement",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payement Successful :) !");
      })
      .catch((error) => {
        alert("Payement Issue. re-check your credit card !");
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
