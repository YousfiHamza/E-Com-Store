import React, { createContext, useState, useEffect } from "react";

import {
  addItemToCart,
  removeCartItem,
  removeItemFromCart,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  cartItemsCount: 0,
  cartItemsTotal: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setcartItemsCount] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  const toggleHidden = () => setHidden(!hidden);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(removeCartItem(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));

  const clearCart = () => setCartItems([]);

  useEffect(() => {
    const hiddenCart = sessionStorage.getItem("is-cart-hidden");
    const itemsArray = sessionStorage.getItem("cart-content");
    const ItemsCount = sessionStorage.getItem("items-count");
    const ItemsTotal = sessionStorage.getItem("items-total");

    hiddenCart && setHidden(JSON.parse(hiddenCart));
    itemsArray && setCartItems(JSON.parse(itemsArray));
    ItemsCount && setcartItemsCount(JSON.parse(ItemsCount));
    ItemsTotal && setCartItemsTotal(JSON.parse(ItemsTotal));
  }, []);

  useEffect(() => {
    setcartItemsCount(
      cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity,
        0
      )
    );
    setCartItemsTotal(
      cartItems.reduce(
        (accumulatedTotal, cartItem) =>
          accumulatedTotal + cartItem.quantity * cartItem.price,
        0
      )
    );
  }, [cartItems]);

  useEffect(() => {
    sessionStorage.setItem("is-cart-hidden", JSON.stringify(hidden));
    sessionStorage.setItem("cart-content", JSON.stringify(cartItems));
    sessionStorage.setItem("items-count", JSON.stringify(cartItemsCount));
    sessionStorage.setItem("items-total", JSON.stringify(cartItemsTotal));
  });

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        toggleHidden,
        cartItemsCount,
        cartItemsTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
