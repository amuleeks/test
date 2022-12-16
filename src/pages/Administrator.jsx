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

const Administrator = () => {

    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get('http://localhost:8080/admin/getAnalytics')
                    .then(response => {
                        console.log(response);
                        setItems(response.data);

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




    return (
        <Container>
            <Grid container spacing={3} className="cart-container">
                <Grid item xs={12} className='text-center'>
                    <h1>Administrator Dashboard</h1>
                </Grid>
                <Grid item xs={12}>
                    <List width="100%">
                        {items.map((item, index) => (
                            <Card style={{ paddingBottom: '5px' }}>
                                <ListItem key={index} className="cart-item" style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                    <ListItemText>{item.name}</ListItemText>
                                    <ListItemText>Item Price: ${item.price}</ListItemText>
                                    <ListItemText>Total Sales With Item: ${(parseFloat(item.count) * parseFloat(item.price)).toFixed(2)}</ListItemText>
                                </ListItem>
                            </Card>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <div className="total-price" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <h3>Net sales: ${totalPrice.toFixed(2)}</h3>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Container>

    );
};


export default Administrator;
