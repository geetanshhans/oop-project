import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";
import { addProduct } from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selector";


const CollectionItem = ({ product,isOutOfStock }) => {
  const dispatch = useDispatch();
  const { productName, productPrice, productImage, documentID} = product;
  const handleAddToCart = (product) => {
    if(isOutOfStock){
      alert('Sorry the product is out of stock :(');
      return;
    }
    try{
      dispatch(addProduct(product))
    }catch (err){
      console.log(err)
    }

  }

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${productImage})` }} />
      <div className="collection-footer">
        <Link to = {`/products/${documentID}`}>
        <span className="name">{productName}</span>
        </Link>
        <span className="price">{productPrice}</span>
      </div>
      <CustomButton inverted onClick={() => handleAddToCart(product)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};


export default CollectionItem;
