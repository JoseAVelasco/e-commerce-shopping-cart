import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import { ShoppingCartContext } from '../index.js';
import CustomNavbar from '../components/Nav.jsx';

const ShoppingCartItem = ({ product, removeProduct }) => {
  return (
    <div key={product._id}>
      <Row className='mb-4'>
        <Col>
          <Card.Img variant="top" />
        </Col>
        <Col>
          <Card.Title>{product.name}</Card.Title>
          <Card.Title>${product.cost}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Col>
        <Col>
          <Button variant="primary" onClick={() => removeProduct(product)}>
            Remove
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export const ShoppingCartPage = () => {
  const [cart, setCart] = useContext(ShoppingCartContext);

  const removeProduct = (product) => {
    setCart(cart.filter(productInCart => productInCart !== product))
  }

  const [sum, setSum] = useState(0);

  useEffect(()=>{
    const totalCost = cart.reduce((acc, product) => acc + product.cost, 0);
    setSum(totalCost)
  },[cart])



  return (
    <Container>
      <CustomNavbar />
      <Row className='mb-4'>
        <Col>
          <h1>Shopping Cart : {cart.length} items</h1>
        </Col>
      </Row>
      {cart.map((product) => (
        <ShoppingCartItem key={product._id} product={product} removeProduct={removeProduct} />
      ))}
      <Row>
      <Col>
      <h1>Total Cost : ${sum}</h1>
      </Col>
    </Row>
    </Container>
  );
};
