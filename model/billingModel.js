const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  products: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
});

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;
