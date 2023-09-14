const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');


const { createProductController } = require('../controllers/createProductController');
const { getProductsController } = require('../controllers/getProductsController');

app.use(express.json());
app.use(cors());

console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV === 'production'){
  app.use('/dist', express.static(path.join(__dirname, '../dist')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
  });
// }


app.post('/products', createProductController);

app.get('/products', getProductsController);



mongoose.connect("mongodb://localhost/shopping_cart").then(() =>{
  app.listen(3000); 
})

