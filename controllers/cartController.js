const express = require("express");
const router = express.Router();
const Cart = require("./../model/cartModel");

// GET all carts
router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single cart by ID
router.get("/:id", getCart, (req, res) => {
  res.json(res.cart);
});

// POST a new cart
router.post("/", async (req, res) => {
  const cart = new Cart({
    productId: req.body.productId,
    price: req.body.price,
    quantity: req.body.quantity,
    email: req.body.email,
  });

  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all cart documents associated with a user's email
router.get("/email/:email", async (req, res) => {
  try {
    console.log(req.params.email, typeof req.params.email);
    const carts = await Cart.find({ email: req.params.email });
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single cart by ID
async function getCart(req, res, next) {
  let cart;
  try {
    cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.cart = cart;
  next();
}

module.exports = router;
