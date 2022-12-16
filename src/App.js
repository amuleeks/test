import "./App.css";
import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart'
import { Container, Col, Row } from "react-bootstrap";
import Shop from './pages/Shop';


function App() {

   return (

    <Layout/>


    
  );


  // return <Layout/>;
}

export default App;
