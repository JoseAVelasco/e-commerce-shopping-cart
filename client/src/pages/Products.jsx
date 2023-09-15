import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Col, Container, Row, Button, Card } from 'react-bootstrap';

import { ShoppingCartContext } from '../index.js';
import CustomNavbar from '../components/Nav.jsx';

const ProductCard = ({ product, addProductToCart }) => {
  return (
    <div key= {product._id} className='mb-4'>
       <Card>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>${product.cost}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={() => addProductToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

const NUMBER_OF_COLUMNS = 3;


function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useContext(ShoppingCartContext);

  const addProductToCart = (product) => {
      setCart([...cart, {...product}]);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: prods } = await axios.get('http://localhost:8080/products');
        setProducts(prods);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const getFilteredProducts = (products) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  

  const getProductsInColumn = (products, numberOfColumns, column) => {
    return products.filter((product, index) => index % numberOfColumns === column);
  };

  const onSearchChange = (e) => {
    setSearch(e.currentTarget.value);

  };
  

  return (
    <Container>
      <CustomNavbar />
      <Row>
        <Col>
        <Form.Control size='lg' type='text' placeholder='search' value={search} className='mb-4' onChange={onSearchChange}/>
        </Col>
        <Row>
        </Row>
      </Row>
      <h2>Cart Size {cart.length}</h2>
      <Row>
      {new Array(NUMBER_OF_COLUMNS).fill("").map((value, column) => (
            <Col key={column}>
              {getProductsInColumn(
                getFilteredProducts(
                products),
                NUMBER_OF_COLUMNS,
                column
              ).map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  addProductToCart={addProductToCart}
                />
              ))}
            </Col>
          ))}

      </Row>
    </Container>
  );
}

export default Products;
