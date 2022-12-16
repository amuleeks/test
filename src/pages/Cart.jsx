import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import './Cart.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Cart = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem("user");
        if (!loggedIn) {
            alert("Please login.")
            navigate('/login');
      
        }
      }, []); 

      
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const handleSubmit = () => {

        if (totalPrice <= 0) {
            alert("Your cart is empty!");
        }
        else {
            navigate('/checkout');

        }

    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = { email: localStorage.getItem("user") };
                axios.post('http://localhost:8080/cart/getCart', payload)
                    .then(response => {
                        console.log(response);

                        setItems(response.data);

                        // Compute total price
                        let total = 0;
                        response.data.forEach(item => {
                            total += item.count * item.price;
                        });
                        setTotalPrice(total);
                    });

            } catch (err) {

            }
        };
        fetchData();
    }, []);

    // Function to handle changing quantity of an item
    const handleQuantityChange = (item, change) => {
        // Update item count
        let cnt = parseInt(item.count);
        if (cnt + change < 1) {
            alert("You cannot remove any more. Please Use the delete button to remove the item.");
            return;

        }
        cnt += change;
        if (cnt < 1) {
            cnt = 1;
        }
        item.count = cnt.toString();

        // Update total price
        setTotalPrice(prevTotalPrice => prevTotalPrice + (change * item.price));


    };
    const handleDelete = async (itemName) => {

        try {
            const payload = { itemName: itemName, username: localStorage.getItem("user") };
            await axios.post('http://localhost:8080/cart/deleteItem', payload)
                .then(response => {
                    window.location.reload(false);

                })


        } catch (err) {

        }


    };



    return (
        <Container>
            <Grid container spacing={3} className="cart-container">
                <Grid item xs={12}>
                    <h1 className='text-center'>Shopping Cart</h1>
                </Grid>
                <Grid item xs={12}>
                    <List width="100%">
                        {items.map((item, index) => (
                            <Card style={{ paddingBottom: '5px' }}>
                                <ListItem key={index} className="cart-item" style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                    <ListItemText>{item.name}</ListItemText>
                                    <ListItemText>
                                        <Button onClick={() => handleQuantityChange(item, -1)}>-</Button>
                                        {item.count}
                                        <Button onClick={() => handleQuantityChange(item, 1)}>+</Button>
                                    </ListItemText>
                                    <ListItemText>Item Price: ${item.price}</ListItemText>
                                    <ListItemText>Price: ${(parseFloat(item.count) * parseFloat(item.price)).toFixed(2)}</ListItemText>
                                    <ListItemText><Button variant="contained" onClick={() => handleDelete(item.name)} color="error">Delete</Button></ListItemText>
                                </ListItem>
                            </Card>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <div className="total-price" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                            <Button onClick={handleSubmit} to="/checkout" variant="contained" color="primary" className="checkout-button">
                                Checkout
                            </Button>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Container>

    );
};


export default Cart;
