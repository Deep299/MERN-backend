const ProductCategory = require("../models/productCategory");

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

module.exports = { saveProductCategory };
