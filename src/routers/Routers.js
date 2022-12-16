import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import OrderHistory from '../pages/OrderHistory';
import Administrator from '../pages/Administrator';

const test = false;
const Routers = () =>{
    return (
    <Routes>
    <Route path="/" element={<Login/>}/>
    
        {!test && <Route path='home' element={<Home/>}/>}
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='orderhistory' element={<OrderHistory/>}/>
        <Route path='administrator' element={<Administrator/>}/>
        

    </Routes>
    );
};
export default Routers;
