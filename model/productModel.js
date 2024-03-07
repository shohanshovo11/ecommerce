const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: null,
  },
  price: {
    type: Number,
    required: true,
    default: null,
  },
  previous_price: {
    type: Number,
    required: true,
    default: null,
  },
  rating: {
    type: Number,
    required: true,
    default: null,
  },
  image: {
    type: String,
    required: true,
    default: null,
  },
  category: {
    type: String,
    required: true,
    default: null,
  },
  stock: {
    type: Number,
    required: true,
    default: null,
  },
  sell_count: {
    type: Number,
    required: true,
    default: null,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
