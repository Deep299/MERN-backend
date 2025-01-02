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
  category: {
    type: String,
    required: true,
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "inventory",
    required: false,
  },
  // discount_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Discount",
  //   required: false,
  // },
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
  Images_Path: {
    type: String,
    required: false,
  },
  sku: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  vendor: {
    type: String,
    required: false,
  },
  Country: {
    type: String,
    required: false,
  },
  Region: {
    type: String,
    required: false,
  },
  taxable: {
    type: Boolean,
    required: false,
  },
  brand: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
