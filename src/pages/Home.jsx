import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import products from '../assets/data/products'
import Helmet from "../components/Helmet/Helmet"

import { Container, Row, Col } from 'reactstrap'

import '../styles/home.css';

import Services from "../services/Services"

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const [data, setData] = useState(products)
    const year = new Date().getFullYear()

    
  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (!loggedIn) {
        navigate('/login');
  
    }
  }, []); 

    useEffect(() => {
    const filteredProducts = products.filter(
        item => item.category === "Fruits & Vegetables"
    );

    setData(filteredProducts);
}, []);
return (
    <Helmet title={'Home'}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                
                            <h2>Use Promo code 15OFF for 15% Off at Checkout!</h2>
                            <p>QuickMart is an ecommerce grocery shop that allows customers to purchase their groceries online and have them delivered to their doorstep. Customers can browse through a variety of products, including fresh produce, meats, dairy, and pantry staples, and add them to their virtual shopping cart. Once they have completed their purchase, QuickMart will handle the rest, including packing and delivery of the items to the customer's chosen address.
</p>
                            <motion.button whileTap={{ scale: 1.2 }}
                                className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src="images/grocerybag.png" alt="" />

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Services />
        <section className="trending__products"></section>
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                    <h2 className='section__title'></h2>
                </Col>
            </Row>
        </Container>

    </Helmet>

);
};
export default Home;
