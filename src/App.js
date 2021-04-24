import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { connect } from 'react-redux';
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/sign-up/sign-up.component";
import { addCollectionAndDocuments, auth, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from "./redux/user/user.selector";
import RetailerHomePage from "./pages/retailer-homepage/retailer-homepage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { createStructuredSelector } from "reselect";
import AddProduct from "./pages/add-product/add-product.component";
import RetailerProfile from "./pages/retailer-profile/retailer-profile.component";
import AddedProducts from "./components/added-products/added-products.component";
import ShopPage from "./pages/shop/shop.component";
import ProductDetails from "./pages/product-details/product-details.component";
import ShippingAddress from "./pages/shipping-address/shipping-address.component";
import EditProduct from "./pages/edit-product/edit-product.component";
import MyOrders from "./pages/my-orders/my-orders.component";
import CustomerProfile from "./pages/customer-profile/customer-profile.component";
import WholesalerProfile from "./pages/wholesaler-profile/wholesaler-profile.component";
import Orders from "./pages/orders/orders.component";
import { Feedback } from "@material-ui/icons";
import FeedBack from "./pages/feedback/feedback.component";

class App extends React.Component {
  
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(auth.currentUser);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = "/" component = {HomePage} />
        <Route exact path = "/retailer-profile" component = {RetailerProfile} />
        <Route exact path = "/customer-profile" component = {CustomerProfile} />
        <Route exact path = "/wholesaler-profile" component = {WholesalerProfile} />
        <Route exact path ="/shop" component = {ShopPage} />
        <Route path = "/shop/:filterType" component = {ShopPage} />
        <Route path = "/products/:productID" component = {ProductDetails} />
        <Route path = "/edit-product/:productID" component = {EditProduct} />
        <Route path = "/my-orders" component = {MyOrders} />
        <Route path = "/orders/:orderID" component = {Orders} />
        {(this.props.currentUser) && (this.props.currentUser.type === "Retailer" || this.props.currentUser.type === "Wholesaler") && <Route exact path = "/add-product" component = {AddProduct} />}
        {(this.props.currentUser) && (this.props.currentUser.type === "Retailer" || this.props.currentUser.type === "Wholesaler") && <Route exact path = "/added-products" component = {AddedProducts} /> }
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path = "/feedback/:orderID" component = {FeedBack} />
        <Route exact path = "/shipping-address" 
          render = {() => 
          !this.props.currentUser 
          ?
          <Redirect to = "/signin" />
          :
          <ShippingAddress />
          }
        />
        <Route exact path = "/signin" 
          render = {() => 
            this.props.currentUser 
              ? 
              <Redirect to = "/" /> 
              : 
              <SignIn />} 
        />
        <Route exact path = "/signup" 
          render = {() => 
            (this.props.currentUser) 
              ? 
              (<Redirect to = "/" /> ) 
              : 
              (<SignUp />)} 
        />
        
      </Switch>
    </div>
  );
  }
}

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
}) 

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : (user) => dispatch(setCurrentUser(user))  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

