const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');


const { createProductController } = require('../controllers/createProductController');
const { getProductsController } = require('../controllers/getProductsController');

const {createUserController} = require('../controllers/createUserController');

app.use(express.json());
app.use(cors());

// console.log(process.env.NODE_ENV);
// console.log(path.join(__dirname, '../../'))

// NPM RUN BUILD / NPM RUN START does not work PRODUCTION MODE 


// if (process.env.NODE_ENV === 'production'){
  app.use('/dist', express.static(path.join(__dirname, '../../dist')));

  app.get('/', (req, res) => {
    // console.log(path.join(__dirname, '../../dist'))
    return res.status(200).sendFile(path.join(__dirname, '../../client/public/index.html'));
  });


// }


app.post('/products', createProductController);

app.get('/products', getProductsController);


// REACT ROUTER REFRESH ISSUE SOLVED
app.get('/shop', (req,res) =>{
  return res.status(200).sendFile(path.join(__dirname, '../../client/public/index.html'));
});
app.get('/create-product', (req,res) =>{
  return res.status(200).sendFile(path.join(__dirname, '../../client/public/index.html'));
});

app.get('/cart', (req,res) =>{
  return res.status(200).sendFile(path.join(__dirname, '../../client/public/index.html'));
});

// register
app.post('/register', createUserController)


// BUG
app.get('/checkout', (req,res) =>{
  return res.status(200).sendFile(path.join(__dirname, '../../client/src/index.html'));
});

// unknown route error handler

// global error handler 



mongoose.connect("mongodb://localhost/shopping_cart").then(() =>{
  app.listen(3000); 
})

