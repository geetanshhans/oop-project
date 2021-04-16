import React from 'react';
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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../../components/header/header.component';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

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

const useStyles = theme => ({
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
});

class SignUp extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      mobileNumber : '',
      email : '',
      password : '',
      type : '',
    }
  }


  
  handleSubmit = async(event) => {
    event.preventDefault();
    const { firstName,lastName,email,password,mobileNumber } = this.state;
    const displayName = firstName + ' ' + lastName;
    
    try{
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user,{ firstName,lastName,mobileNumber,displayName });
      this.setState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        mobileNumber : ''
      })
    } catch(error){
      console.log(error);
    }
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  


  render(){
   const {classes} = this.props;
   const { firstName,lastName,mobileNumber,email,password,type } = this.state;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
           <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value = {firstName}
                onChange = {this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {lastName}
                onChange = {this.handleChange}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {mobileNumber}
                onChange = {this.handleChange}
                id="mobileNumber"
                label="Mobile Number"
                name="mobileNumber"
                autoComplete="mobile"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {email}
                onChange = {this.handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value = {password}
                onChange = {this.handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs = {12}>
            <InputLabel
                id="demo-simple-select-label"
              >
                Type of User
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="type"
                required
                name="type"
                value={type}
                onChange={this.handleChange}
                fullWidth
              >
                <MenuItem name="type" value="Customer">
                  Customer
                </MenuItem>
                <MenuItem name="type" value="Retailer">
                  Retailer
                </MenuItem>
                <MenuItem name="type" value="Wholesaler">
                  Wholesaler
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
            onClick = {this.handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> 
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
  }
}

export default withStyles(useStyles)(SignUp);