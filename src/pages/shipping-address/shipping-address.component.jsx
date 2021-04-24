import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createStructuredSelector } from "reselect";
import CustomButton from "../../components/custom-button/custom-button.component";
import { selectCartItems, selectCartItemsCount, selectCartTotal } from "../../redux/cart/cart.selector";
import { saveOrderHistory } from "../../redux/orders/orders.action";
import "./shipping-address.styles.scss";

const mapState = createStructuredSelector({
    total : selectCartTotal,
    itemCount : selectCartItemsCount,
    cartItems : selectCartItems
})

const ShippingAddress = () => {
    const { total, itemCount,cartItems } = useSelector(mapState);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if(itemCount < 1){
            
            history.push('/');
        }

    },[itemCount])

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[addressLine, setAddressLine] = useState('');
    const[mobileNumber, setMobileNumber] = useState('');
    const[city, setCity] = useState('');
    const[region, setRegion] = useState('');
    const[pinCode, setPinCode] = useState('');
    const[country, setCountry] = useState('');

    const handleClick = async (event) => {
        const orderShippingAddress = {
            firstName : firstName,
            lastName : lastName,
            addressLine : addressLine,
            mobileNumber : mobileNumber,
            city : city,
            region : region,
            pinCode : pinCode,
            country : country
        }
        const configOrder = {
            orderTotal : total,
            orderItems : cartItems,
            orderShippingAddress : orderShippingAddress, 
        }
        dispatch(saveOrderHistory(configOrder));
        alert('Your order has been placed!')
    }
    return(
        <div className = "body">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value = {firstName}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={lastName}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line"
            value = {addressLine}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          required
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            value = {mobileNumber}
            fullWidth
            autoComplete="mobile number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value = {city}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="state" 
          name="state" 
          label="State/Province/Region" 
          value = {region}
          fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value = {pinCode}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={country}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className = "button"
            style = {{margin : "30px"}}
            onClick = {handleClick}
          >
            Place the order
          </Button>
      </Grid>
    </div>
    )
}
export default ShippingAddress;