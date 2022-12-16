import React from 'react';
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>Quick Mart</h1>
                            </div>
                        </div>

                        <p className="footer__text mt-4">
                        QuickMart is a convenient and easy way for customers to purchase their groceries without having to physically visit a store. It saves time and effort and allows customers to shop from the comfort of their own home.

                        </p>
                    </Col>

                    <Col lg="3">
                        <div className="footer__quick-links">
                            <h4 className='quick__links-title'> Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='#'>Fruits &amp; Vegetables</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='#'>Meat</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='#'>Drinks</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='#'>Pantry Items</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='#'>Condiments</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='#'>Dairy &amp; Eggs</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="2">
                    <div className="footer__quick-links">
                            <h4 className='quick__links-title'> Other Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className='footer__copyright'>
                            Developed by Team X for EECS 4413.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;
