import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import './Cart.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap'

const OrderHistory = () => {
    const items = [
        {
            name: 'Apples',
            count: 1,
            price: 10
        },
        {
            name: 'Oranges',
            count: 2,
            price: 5
        },
        {
            name: 'Grapes',
            count: 3,
            price: 35
        }
    ];

    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <Container>
            <Grid container spacing={3} className="cart-container">
                <Grid item xs={12}>
                    <h1>Your Order History</h1>
                </Grid>
                <Grid item xs={12}>
                    <List width="100%">
                        <h2>Order number #34234</h2>
                        {items.map((item, index) => (
                            <Card>
                                <ListItem key={index} className="cart-item">
                                    <ListItemText>{item.name}</ListItemText>
                                    <ListItemText>Quantity: {item.count}</ListItemText>
                                    <ListItemText>Item Price: ${item.price}</ListItemText>
                                </ListItem>
                            </Card>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>

    );
};

export default OrderHistory;