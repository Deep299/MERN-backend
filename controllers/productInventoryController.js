const ProductInventory = require("../models/productInventory");
const ProductCategory = require("../models/productCategory");

const createProduct = async (req, res) => {
  try {
    const { quantity, categoryId } = req.body;
    const category = await ProductCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const productInventory = new ProductInventory({
      quantity,
      category: categoryId,
    });
    await productInventory.save();
    res.status(201).json(productInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await ProductInventory.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, categoryId } = req.body;
    const category = await ProductCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const productInventory = await ProductInventory.findByIdAndUpdate(
      id,
      { quantity, category: categoryId },
      { new: true }
    );
    if (!productInventory) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(productInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productInventory = await ProductInventory.findByIdAndUpdate(
      id,
      { deleted_at: new Date() },
      { new: true }
    );
    if (!productInventory) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
