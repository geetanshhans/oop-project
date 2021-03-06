import { CartActionTypes } from "./cart.types";
import { addItemsToCart, addProductsToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems : addProductsToCart(state.cartItems,action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.documentID !== action.payload.documentID
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
      case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        ...INITIAL_STATE
      }
    default:
      return state;
  }
};
export default CartReducer;
