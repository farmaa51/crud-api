const mongoose = require("mongoose");
const productScheme = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A product must have a name"],
      unique: true,
    },
    cost: {
      type: Number,
      required: [true, "A product must have a cost"],
    },
    salePrice: {
      type: Number,
      required: [true, "A product must have a salePrice"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
  });
  const Product = mongoose.model("Product", productScheme);
  module.exports = Product;