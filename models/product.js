const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  SKU: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductInventory",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discount",
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
