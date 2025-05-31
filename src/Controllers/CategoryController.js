const CategoryModel = require("../Models/CategoryModel")

class CategoryController {
  //todo: function of create the category
  async categoryCreate(req, res) {
     try {
      const categoryCreate = await CategoryModel.create(req.body);
      return res.status(200).json(categoryCreate);
    } catch (error) {
      res.status(404).json({ message: "Failed create category" });
    }
  }

  //todo: function for list category
  async categoryList(req, res) {
    try {
      const category = await CategoryModel.find();
      return res.status(200).json(category);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list category" });
    }
  }

  //todo: function for list category with ID
  async categoryListId(req, res) {
 
     try {
          const { id } = req.params;
    
          const category = await CategoryModel.findById(id);
    
          if (!category) {
            return res.status(404).json({ message: "Category does not exists" });
          }
    
          return res.status(200).json(category);
        } catch (error) {
          return res.status(404).json({ message: "Failed to list category" });
        }
  }

  //todo: function for update category
  async categoryUpdate(req, res) {
   try {
      const { id } = req.params;

      await ProductModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "Category Update" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to update category" });
    }
  }

  //todo: function for delete category
  async categoryDelete(req, res) {
 
     try {
          const { id } = req.params;
    
          const categoryDeleted = await CategoryModel.findByIdAndDelete(id);
    
          if (!categoryDeleted) {
            return res.status(404).json({ message: "Category does not exists" });
          }
    
          return res.status(200).json({ message: "Category Delete" });
        } catch (error) {
          return res.status(404).json({ message: "Failed to delete category" });
        }
  }
}

module.exports = new CategoryController();
