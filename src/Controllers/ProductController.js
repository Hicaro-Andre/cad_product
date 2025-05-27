const ProductModel = require("../Models/ProductModel.js");

class ProductController {
  //todo: function of create the products
  async store(req, res) {
    try {
      const createdProduct = await ProductModel.create(req.body);
      return res.status(200).json(createdProduct);
    } catch (error) {
      res.status(404).json({ message: "Failed create products" });
    }
  }

  //todo: function for list products
  async index(req, res) {
    try {
      const products = await ProductModel.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list products" });
    }
  }

  //todo: function for list products with ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductModel.findById(id);

      if (!product) {
        return res.status(404).json({ message: "Products does not exists" });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list product" });
    }
  }

  //todo: function for update products
  async update(req, res) {
    try {
      const { id } = req.params;

      await ProductModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "Product Update" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to update product" });
    }
  }
  //todo: function for delete products
  async destroy(req, res) {
    try {
      const { id } = req.params;

      const productDeleted = await ProductModel.findByIdAndDelete(id);

      if (!productDeleted) {
        return res.status(404).json({ message: "Product does not exists" });
      }

      return res.status(200).json({ message: "Product Delete" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to delete product" });
    }
  }
}

module.exports = new ProductController();
