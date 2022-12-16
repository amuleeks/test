import React, { useState, useEffect } from 'react';


import { Container, Row, Col } from 'reactstrap'

import axios from 'axios';
import '../styles/home.css';


import ProductsList from '../components/UI/ProductsList';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom';


const Shop = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem("user");
        if (!loggedIn) {
            navigate('/login');
      
        }
      }, []); 






    let req = {};
    useEffect(() => {
        axios.get('http://localhost:8080/item/getAllItems')
            .then(response => {
                req = response.data;
                console.log(response)
                setData(response.data);
                setDataDef(response.data);
            });

    }, []);



    const [defaultData, setDataDef] = useState(req)


    const [data, setData] = useState([])
    const filterItem = (curcat) => {
        const newItem = defaultData.filter((newVal) => {
            return newVal.category === curcat;
        });
        setData(newItem);
    };
    const filterBrand = (brand) => {
        const newItem = defaultData.filter((newVal) => {
            return newVal.brand === brand;
        });
        setData(newItem);
    }
    return (
        <div>
            {/* <Header/> */}
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='section__tutle'>Our Products</h2>
                    </Col>
                    <Col className='text-center'>
                        <Box>
                            <Chip label="All" onClick={() => setData(defaultData)} />
                            <Chip label="Fruits and Vegetables" onClick={() => filterItem("Fruits and vegetables")} />
                            <Chip label="Meat" onClick={() => filterItem("Meat")} />
                            <Chip label="Drinks" onClick={() => filterItem("Drinks")} />
                            <Chip label="Dairy & Eggs" onClick={() => filterItem("Milk & eggs")} />
                            <Chip label="Condiments" onClick={() => filterItem("Condiments")} />
                            <Chip label="Great Value" onClick={() => filterBrand("Great Value")} />
                            <Chip label="President's Choice" onClick={() => filterBrand("President's Choice")} />
                        </Box>

                    </Col>

                </Row>

                <Row>

                    <ProductsList data={data} />

                </Row>

            </Container>
        </div>


    );
};
export default Shop;
