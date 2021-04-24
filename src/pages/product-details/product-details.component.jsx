import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductStart, setProduct } from "../../redux/products/products.actions";

const mapState = state => ({
    product : state.productsData.product
})
 
const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productID } = useParams();
    const {product} = useSelector(mapState);
    const { productName } = product;

    useEffect(() => {
        dispatch(
            fetchProductStart(productID)
        )

        return () => {
            dispatch(
                setProduct({})
            )
        }
    },[])

    return (
        <h1>
            {productName}
        </h1>
    )
}
export default ProductDetails;