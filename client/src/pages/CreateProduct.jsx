import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

import axios from "axios";
import CustomNavbar from '../components/Nav.jsx';

const DEFAULT_FORM_OBJECT = {
  name: '', cost: '', description: ''
}

function CreateProduct(){
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT)

  const createProduct = async (e) =>{
    e.preventDefault();
    await axios.post('http://localhost:8080/products',form)
    setForm({...DEFAULT_FORM_OBJECT})
  }

  return(
    <Container>
      <CustomNavbar />
      <Row>
        <Col>
        <Col xs={6}>
        <Form onSubmit={createProduct} >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) =>{
          setForm({...form, name : e.currentTarget.value})
        }} type="name" value={form.name} placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCost">
        <Form.Label>Cost</Form.Label>
        <Form.Control onChange={(e) =>{
          setForm({...form, cost : e.currentTarget.value})
        }} type="number" value={form.cost} placeholder="Cost" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
      <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e) =>{
          setForm({...form, description : e.currentTarget.value})
        }} value={form.description} as='textarea' rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateProduct;