import React, { Fragment } from "react";

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

import Parallax from "../../components/parallax/parallax.component";

import Hidden from "@material-ui/core/Hidden";

const CheckoutPage = ({ cartItems, cartTotal, currentUser, location }) => {
  // the user must have at least one item in his cart and he must be logged in
  if (currentUser && cartTotal) {
    return (
      <Fragment>
        <Parallax filter image="checkOut" />
        <CheckoutPageContainer>
          <Hidden xsDown>
            <CheckoutHeaderContainer container xs={12}>
              <HeaderBlockContainer item sm={2}>
                <span> Product </span>
              </HeaderBlockContainer>
              <HeaderBlockContainer item sm={3}>
                <span> Description </span>
              </HeaderBlockContainer>
              <HeaderBlockContainer item sm={2}>
                <span> Price </span>
              </HeaderBlockContainer>
              <HeaderBlockContainer item sm={3}>
                <span> Quantity </span>
              </HeaderBlockContainer>
              <HeaderBlockContainer item sm={2}>
                <span> Remove </span>
              </HeaderBlockContainer>
            </CheckoutHeaderContainer>
          </Hidden>

          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
          <TotalContainer>
            <span>Total : $ {cartTotal}</span>
          </TotalContainer>
          <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            <br />
            <span className="underlined">Card Number</span> : 4242 4242 4242
            4242 <br />
            <span className="underlined">Exp</span> : 12/34 <br />
            <span className="underlined">CVV</span> : 567
          </TestWarningContainer>
          <StripeCheckoutButton price={cartTotal} />
        </CheckoutPageContainer>
      </Fragment>
    );
  }
  // if the cart is empty ... no need to stay on the checkuot page
  else if (cartTotal !== 0) {
    return (
      <Redirect
        to={{
          pathname: "/YH-Clothing/sign-in",
          state: { prevPath: location.pathname },
        }}
      />
    );
  }
  // the following code is for us to get back to our checkout page after logging in
  return <Redirect to="./YH-Clothing" />;
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
