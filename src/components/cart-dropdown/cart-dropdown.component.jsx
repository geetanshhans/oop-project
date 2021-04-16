import React from "react";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { Button } from "@material-ui/core";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem item={cartItem}></CartItem>)
      ) : (
        <span className="empty-message">You have an empty cart</span>
      )}
    </div>
    <Button className = "button">
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
