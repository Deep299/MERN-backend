const ProductCategory = require("../models/productCategory");

const getAllProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategory.find();

    if (productCategories.length === 0) {
      return res.status(404).json({ error: "No product categories found" });
    }

    console.log("Product categories found:", productCategories);
    res.status(200).json({ productCategories });
  } catch (err) {
    console.error("Error getting product categories:", err);
    res.status(500).json({ error: "Error getting product categories" });
  }
};

const getProductCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const productCategory = await ProductCategory.findById(id);

    if (!productCategory) {
      return res.status(404).json({ error: "Product category not found" });
    }

    console.log("Product category found:", productCategory);
    res.status(200).json({ productCategory });
  } catch (err) {
    console.error("Error getting product category:", err);
    res.status(500).json({ error: "Error getting product category" });
  }
};

const saveProductCategory = async (req, res) => {
  console.log(req.body);
  const { name, description } = req.body;

  const newProductCategory = new ProductCategory({ name, description });

  try {
    const savedProductCategory = await newProductCategory.save();
    console.log("Product category saved successfully:", savedProductCategory);
    res.status(200).json({ message: "Product category saved successfully" });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      console.error("Error saving product category: Duplicate category name");
      res.status(400).json({ error: "Category name must be unique" });
    } else {
      console.error("Error saving product category:", err);
      res.status(500).json({ error: "Error saving product category" });
    }
  }
};

const deleteProductCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProductCategory = await ProductCategory.findByIdAndDelete(id);

    if (!deletedProductCategory) {
      return res.status(404).json({ error: "Product category not found" });
    }

    console.log(
      "Product category deleted successfully:",
      deletedProductCategory
    );
    res.status(200).json({ message: "Product category deleted successfully" });
  } catch (err) {
    console.error("Error deleting product category:", err);
    res.status(500).json({ error: "Error deleting product category" });
  }
};

const deleteManyProductCategories = async (req, res) => {
  const { ids } = req.body;

  try {
    const result = await ProductCategory.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ error: "No product categories found to delete" });
    }

    console.log("Product categories deleted successfully:", result);
    res.status(200).json({
      message: "Product categories deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    console.error("Error deleting product categories:", err);
    res.status(500).json({ error: "Error deleting product categories" });
  }
};

const updateProductCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedProductCategory = await ProductCategory.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!updatedProductCategory) {
      return res.status(404).json({ error: "Product category not found" });
    }
    console.log(
      "Product category updated successfully:",
      updatedProductCategory
    );
    res.status(200).json({ message: "Product category updated successfully" });
  } catch (err) {
    console.error("Error updating product category:", err);
    res.status(500).json({ error: "Error updating product category" });
  }
};

module.exports = {
  saveProductCategory,
  deleteProductCategory,
  getProductCategory,
  deleteManyProductCategories,
  getAllProductCategories,
  updateProductCategory,
};
