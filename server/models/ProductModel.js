const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  cost : Number,
  name : String,
  description : String,
})

const ProductModel = mongoose.model('Product', ProductSchema);


module.exports = {ProductModel};