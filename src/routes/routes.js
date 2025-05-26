const { Router } = require ("express")
const ProductController = require("../Controllers/ProductController")
const UserController = require ("../Controllers/UserController")

const routes = Router();

routes.get("/index" , (req , res) => {
  return res.status(200).json({message: "Server is on..."})
});


routes.post("/products" , ProductController.store );
routes.post("/users" , UserController.usercreate );

module.exports = routes;