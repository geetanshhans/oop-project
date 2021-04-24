import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/products/products.actions';
import { Grid, makeStyles } from "@material-ui/core";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


const mapState = (state) => ({
    products : state.productsData.products,
    cartItems : selectCartItems(state),
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

const ShopPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { filterType } = useParams();
    var { products, cartItems,currentUser } = useSelector(mapState);
    console.log(currentUser);
    console.log(cartItems);
    useEffect(() => {
        dispatch(fetchProductsStart({ filterType }))
    },[filterType])

    if(!Array.isArray(products)){
        return null;
    }
    if(currentUser){
    if(currentUser.type === "Customer"){
        products = products.filter(product => product.userType === "Retailer");
    }
    if(currentUser.type === "Retailer"){
        products = products.filter(product => product.userType === "Wholesaler")
    }}
    if(!currentUser){
        products = products.filter(product => product.userType === "Retailer")
    }
    return (
      <Grid container spacing={4} mt={2} className={classes.container}>
        {products.map(
          (product) => {
            let isOutOfStock = false;
            const cartItem = cartItems.filter(item => item.documentID === product.documentID)[0];
            if(cartItem){
                if((cartItem.quantity-1) >= cartItem.productQuantity){
                    isOutOfStock = true;
                }
            }
            return(
            <Grid item xs={12} sm={6} md={4}>
              <CollectionItem
                key={product.documentID}
                product ={product}
                isOutOfStock = {isOutOfStock}
              />
            </Grid>
            )
          }
        )}
      </Grid>
    );
}

export default ShopPage;