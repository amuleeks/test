import React from 'react';
import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid';
import './ProductList.css';

const ProductsList = ({data}) =>{
    return( 

<Grid className='product-list' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {
        data.map((item, index) => (
            <Grid item xs={4} key={index}>
            <ProductCard item={item}/>
            </Grid>
        ))
    }
    </Grid>
    );
};
export default ProductsList;

