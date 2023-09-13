const { ProductModel } = require('../models/ProductModel'); 

exports.createProductController =  async (req,res) =>{
  console.log(req.body);
  const {cost, name, description } = req.body;
  const instance = new ProductModel({
    cost : cost,
    name : name,
    description : description
  })
  await instance.save()
  return res.json(instance);
}
