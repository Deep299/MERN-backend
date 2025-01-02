const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  ProductVolumeId: {
    type: Number,
    required: true,
  },
  ProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
