import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductStart, fetchProductsStart, fetchProductStart, setProduct } from "../../redux/products/products.actions";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { addNewProduct } from '../../redux/products/products.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { useHistory, useParams } from 'react-router';
import { firestore } from '../../firebase/firebase.utils';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapState = state => ({
    product : state.productsData.product
})

export default function EditProduct() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
    const { productID } = useParams();
    const { product } = useSelector(mapState);
    console.log(product.productCategory);
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

console.log(product.productCategory)
  const [productCategory, setProductCategory] = useState(product.productCategory);
  const [productName, setProductName] = useState(product.productName);
  const [productImage, setProductImage] = useState(product.productImage);
  const [productPrice, setProductPrice] = useState(product.productPrice);
  const [productQuantity, setProductQuantity] = useState(product.productQuantity);


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(productPrice,productQuantity)
    try{
        console.log(product)
        firestore.collection("products").doc(productID).update({
            productPrice : productPrice,
            productQuantity : productQuantity
        })
      } catch(error){
        console.log(error);
      }
  };
  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteProductStart(productID));
    history.push("/retailer-profile")

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Add New Product
        </Typography>
        <form className={classes.form} noValidate>
           <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="productName"
                name="productName"
                value = {productName}
                onChange={e => setProductName(e.target.value)}
                variant="outlined"
                disabled
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                disabled
                fullWidth
                value = {productImage}
                onChange={e => setProductImage(e.target.value)}
                id="imageUrl"
                label="Image URL"
                name="imageUrl"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {productPrice}
                onChange={e => setProductPrice(e.target.value)}
                id="price"
                label="Price of the product"
                name="price"
                autoComplete="price"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {productQuantity}
                onChange={e => setProductQuantity(e.target.value)}
                name="quantity"
                label="Quantity of the product"
                type="quantity"
                id="quantity"
                autoComplete="quantity"
              />
            </Grid>
            <Grid item xs = {12}>
            <InputLabel
                id="demo-simple-select-label"
              >
                Select Category 
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="category"
                disabled
                name="category"
                value={productCategory}
                onChange={e => setProductCategory(e.target.value)}
                fullWidth
              >
                <MenuItem name="category" value="fruits">
                  Fruits
                </MenuItem>
                <MenuItem name="category" value="vegetables">
                  Vegetables
                </MenuItem>
                <MenuItem name="category" value="dairy">
                  Dairy Products
                </MenuItem>
                <MenuItem name="category" value="beverages">
                  Beverages
                </MenuItem>
                <MenuItem name="category" value="snacks">
                  Snacks
                </MenuItem>
              </Select>
            </Grid>
          </Grid> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleSubmit}
          >
            Edit Product
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleDelete}
          >
            Delete Product
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}