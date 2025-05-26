const ProductModel = require ("../Models/ProductModel.js")

class ProductController {

  async store(req, res){
 
    const createdProduct = await ProductModel.create(req.body);
    return res.status(200).json(createdProduct);
  }

   async index(req, res){
    const products = await ProductModel.find();
    return res.status(200).json(products)
  }

   async show(req , res){
    const {id} = req.params;

    const product = await ProductModel.findById(id);

    if (!product){
      return res.status(404).json({message: "Products does not exists"});
    }

    return res.status(200).json(product)
  }

   async update(){
    
  }

  async destroy(){
    
  }
}

module.exports = new ProductController();