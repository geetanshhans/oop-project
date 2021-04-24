export const addProductsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.documentID === cartItemToAdd.documentID
    );
      console.log(cartItemToAdd);
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.documentID === cartItemToAdd.documentID
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.map((cartItem) =>
      cartItem.documentID === cartItemToRemove.documentID
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  