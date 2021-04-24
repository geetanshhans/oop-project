import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import './added-product-item.styles.scss'

const AddedProductItem = ({product}) => {
    const { productName, productPrice, productImage,documentID } = product;
    console.log(product);
    return (
      <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${productImage})` }} />
        <div className="collection-footer">
          <span className="name">{productName}</span>
          <span className="price">{productPrice}</span>
        </div>
        <CustomButton inverted>
            <Link to = {`/edit-product/${documentID}`}>
        EDIT ITEM
        </Link>
      </CustomButton>
      </div>
    );
  };
  
  export default AddedProductItem;