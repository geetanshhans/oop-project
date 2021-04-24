import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../../redux/products/products.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
import AddedProductItem from "../added-product-item/added-product-item.component";
import "./added-products.styles.scss";

const mapState = (state) => ({
    products : state.productsData.products,
    currentUser : selectCurrentUser(state)
})

const useStyles = makeStyles((theme) => ({
    container : {
        margin : 'auto',
        marginTop : theme.spacing(4),
        maxWidth : '95%',
        paddingLeft : '20px',
        paddingRight : '20px',

    }
}))

const AddedProducts = () => {
    const classes = useStyles();
    var {products, currentUser} = useSelector(mapState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsStart());
    },[]);
    products = products.filter(product => product.userID === currentUser.id)
    return(
        <Grid container spacing = {4} mt = {2} className={classes.container}>
            {products.map((product) => (
    <Grid item xs = {12} sm = {6} md = {4}>
        <AddedProductItem key = {product.documentID} product = {product}/>
        </Grid>
  ))}
        </Grid>
    )
}

export default AddedProducts;
