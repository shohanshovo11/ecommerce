const mongoose = require("mongoose");
const productModel = require("./productModel");
const personModel = require("./personModel");

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      validate: {
        validator: async function (productId) {
          const product = await productModel.findById(productId);
          return product !== null;
        },
        message: "Product does not exist",
      },
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      validate: {
        validator: async function (value) {
          const product = await productModel.findById(this.productId);
          return product.stock >= value;
        },
        message: "Quantity exceeds available stock",
      },
    },
    email: {
      type: String,
      ref: "Person",
      validate: {
        validator: async function (email) {
          const person = await personModel.findOne({ email: email });
          return person !== null;
        },
        message: "User does not exist",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Populate product details for each cart document
cartSchema.pre("find", function (next) {
  this.populate("productId");
  next();
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
