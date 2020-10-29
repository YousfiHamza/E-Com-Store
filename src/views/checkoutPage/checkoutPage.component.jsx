import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkoutPage.styles";

const CheckoutPage = ({ cartItems, cartTotal, currentUser, location }) => {
  // the user must have at least one item in his cart and he must be logged in
  if (currentUser && cartTotal) {
    return (
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span> Product </span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span> Description </span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span> Quantity </span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span> Price </span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span> Remove </span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <TotalContainer>
          <span>Total : $ {cartTotal}</span>
        </TotalContainer>
        <TestWarningContainer>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 12/34 - CVV: 567
        </TestWarningContainer>
        <StripeCheckoutButton price={cartTotal} />
      </CheckoutPageContainer>
    );
  }
  // if the cart is empty ... no need to stay on the checkuot page
  else if (currentUser) {
    return <Redirect to="./" />;
  }
  // the following code is for us to get back to our checkout page after logging in
  return (
    <Redirect
      to={{ pathname: "/sign-in", state: { prevPath: location.pathname } }}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
