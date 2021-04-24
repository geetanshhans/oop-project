import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addProduct = (nextCartItem) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: nextCartItem,
});
export const clearItemFromCart = (cartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem,
});
export const removeItem = (cartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: cartItem,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
})