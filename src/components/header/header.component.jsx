import { HomeOutlined } from "@material-ui/icons";
import React from "react";
 import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import "./header.styles.scss";
// import { auth } from "../../firebase/firebase.utils";
// import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { selectCartHidden } from "../../redux/cart/cart.selector";
// import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
        <Link className="logo-container" to="/">
            <HomeOutlined />
        </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT 
        </Link>
        {/*
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon /> */}
      </div>
      {/* {hidden ? null : <CartDropdown />} */}
    </div>
  );
};

// const mapStatetoProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

// export default connect(mapStatetoProps)(Header);
export default Header;