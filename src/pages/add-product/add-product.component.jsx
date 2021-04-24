
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from "../../redux/products/products.actions";
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

const mapState = (state) => ({
    products : state.productsData.products,
    currentUser : selectCurrentUser(state)
})

export default function AddProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { products,currentUser } = useSelector(mapState);
    useEffect(() => {
        dispatch(fetchProductsStart());
    },[]);
  
    const userType = currentUser.type;
  const [productCategory, setProductCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const resetForm = () => {
    setProductCategory('');
    setProductName('');
    setProductImage('');
    setProductPrice(0);
    setProductQuantity(0);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addNewProduct({
        productCategory,
        productName,
        productImage,
        productPrice,
        productQuantity,
        userType,
      })
    );
    resetForm();

  };

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
                required
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
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
                required
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
            Add Product
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}