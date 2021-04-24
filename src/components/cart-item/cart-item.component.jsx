import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ product: { productImage, productName, productPrice, quantity, productQuantity } }) => {
  console.log(productQuantity,quantity);
  return(
  <div className="cart-item">
    <img src={productImage} alt="item" />
    <div className="item-details">
      <span className="name">{productName}</span>
      <span className="price">
        {quantity} x ₹{productPrice}
      </span>
    </div>
  </div>
);
  }
export default CartItem;
