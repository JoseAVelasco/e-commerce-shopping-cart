const { UserModel } = require( "../models/UserModel");


exports.createUserController = async (req,res) => {
  console.log(req.body);
  const {username, password} = req.body;
  const newUser = await UserModel.create(({username, password }))
  return res.status(200).json(newUser)

}