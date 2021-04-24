import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
  addProduct,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { productName, productImage, productPrice, quantity, productQuantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={productImage} alt="item" className="img"/>
      </div>
      <span className="name">{productName}</span>
      <span className="quantity">
        {quantity === 1 ? null : (
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
        )}
        <span className="value">{quantity}</span>
        {quantity >= productQuantity ? null :
        <div className="arrow" onClick = {() => addItem(cartItem)}>
          &#10095;
        </div>
        }
      </span>
      <span className="price">{productPrice}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addProduct(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
