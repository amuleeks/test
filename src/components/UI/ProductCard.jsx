import React from 'react';
import '../../styles/product-card.css'
import { motion } from "framer-motion";
import { CardHeader } from 'reactstrap';
import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import ProductInfoDialog from './ProductInfoDialog';
import { makeStyles } from '@material-ui/styles';

const sendToDb = (data) => {
    axios.post('http://localhost:8080/cart/addToCart', data)
        .then(response => {
            console.log(response)
        });
};

const useStyles = makeStyles((theme) => ({
    paper: {
        minWidth: 370,
        border: "0.1px",
        padding: "0.5px",
        boxShadow: "10px 10px 5px #aaaaaa"
    },
}));

var cardStyle = {
    display: 'block',
}

const ProductCard = ({ item }) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = React.useState(false);

    const addToCart = () => {

        const payload = { username: localStorage.getItem("user"), item: item.id};
        alert('This Product has been added to the cart');

        sendToDb(payload);


    }

    return (
        <Card style={cardStyle} sx={{ maxWidth: 370 }}
            className={classes.paper}
        >
            <CardHeader
                title={item.productName} />
            <CardMedia
                component="img"
                height="300"
                image={"/images/" + item.imgUrl} />
            <CardContent>

                <div className="product__item">

                    <div className='p-2 product__info'>
                        <h3 className="product__name"> {item.productName}</h3>
                        <span>Category: {item.category}</span>
                        <div><span>Brand: {item.brand}</span></div>

                    </div>
                    <div className="product__card-bottom d-flex align-items-center justify-content-between ">
                        <span className='price'>${item.price}</span>
                        <Button onClick={() => setModalOpen(true)}>More Information</Button>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                            <i className="ri-add-line">

                            </i>
                        </motion.span>
                    </div>
                </div>

            </CardContent>



            <ProductInfoDialog item={item} open={modalOpen} onClose={() => setModalOpen(false)} />

        </Card>




    )
};
export default ProductCard;

