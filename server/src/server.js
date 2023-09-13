const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');


const { createProductController } = require('../controllers/createProductController')

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production'){
  app.use('/dist', express.static(path.join(__dirname, '../dist')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
  });
}

app.post('/products', createProductController)


mongoose.connect("mongodb://localhost/shopping_cart").then(() =>{
  app.listen(3000); 
})

