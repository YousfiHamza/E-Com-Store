import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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

const CheckoutPage = ({ cartItems, cartTotal }) => (
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
