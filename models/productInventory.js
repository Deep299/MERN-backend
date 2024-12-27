const mongoose = require("mongoose");

const productInventorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
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

const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);
module.exports = ProductInventory;
