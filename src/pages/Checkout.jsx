import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './CheckoutPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const CheckoutPage = () => {


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = { 
      
    fname: data.get('fname'), 
    lname: data.get('lname') ,
    address: data.get('address') ,
    city: data.get('city') ,
    province: data.get('province') ,
    total:data.get('total'),
    email: localStorage.getItem("user")

  }

    try {
      await axios.post('http://localhost:8080/orders/createOrder', payload)
        .then(response => {
          alert("Your order was placed!");
          navigate('/home');

        })


    } catch (err) {
    }

  };


  return (
    <Grid container spacing={3} className="checkout-page">
      <Grid item xs={12}>
        <h1>Checkout</h1>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="fname"
            variant="outlined"
            fullWidth
            className="form-field"
          />
          <TextField
            label="Last Name"
            name="lname"
            variant="outlined"
            fullWidth
            className="form-field"
          />
          <TextField
            label="Credit Card"
            name="credit-card"
            variant="outlined"
            fullWidth
            className="form-field"
          />
          <TextField
            label="Credit Card Pin"
            name="credit-card-pin"
            variant="outlined"
            fullWidth
            className="form-field"
          />
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            className="form-field"
          />
          <TextField
            label="City"
            name="city"
            variant="outlined"
            fullWidth
            className="form-field"

          />
          <TextField
            label="Province"
            name="province"
            variant="outlined"
            fullWidth
            className="form-field"

          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
