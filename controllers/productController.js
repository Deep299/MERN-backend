const Product = require("../models/product");
const Inventory = require("../models/inventory");

const getAllProducts = async (req, res) => {
  try {
    // Use aggregate to join products with their inventories
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "inventories", // The collection name in MongoDB
          localField: "_id",
          foreignField: "product_id",
          as: "inventories",
        },
      },
    ]);

    // Format response as per the provided JSON structure
    const formattedProducts = products.map((product) => {
      return {
        name: product.name,
        desc: product.desc,
        category: product.category,
        subCategory: product.subCategory,
        discount: product.discount || "No discount", // Default to "No discount" if not available
        inventories: product.inventories.map((inventory) => ({
          available: inventory.available,
          price: inventory.price,
          SKU: inventory.SKU,
          tags: inventory.tags || [], // Default to empty array if no tags
          size: inventory.size || "N/A", // Default size to "N/A" if not provided
        })),
        created_at: product.created_at,
        modified_at: product.modified_at,
        deleted_at: product.deleted_at,
        vendor: product.vendor || "Unknown Vendor",
        Country: product.Country || "Unknown Country",
        Region: product.Region || "Unknown Region",
        taxable: product.taxable,
        brand: product.brand || "Unknown Brand",
        img: product.img || "", // Empty string if no image path
      };
    });

    // Return formatted products as JSON
    res.status(200).json(formattedProducts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
};
