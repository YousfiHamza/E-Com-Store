import React from "react";

import StripeCheckout from "react-stripe-checkout";

import { connect } from "react-redux";

import Logo from "../../assets/images/if.png";

import { clearCart } from "../../redux/cart/cart.actions";

import axios from "axios";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9OfuS4gpdp4WRIgXDMroIPo2";

  // token for payment processing (backend work needed)
  const onToken = (token) => {
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
        console.log(response);
        clearCart();
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
