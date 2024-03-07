// routes.js
const express = require("express");
const router = express.Router();
// const bookController = require("../controllers/bookController");
const personController = require("../controllers/personController");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

// Mount bookController for all routes
// router.use("/books", bookController); // Assuming bookController contains routes for books
router.use("/person", personController); // Assuming personController contains routes for persons
router.use("/product", productController); // Assuming productController contains routes for products
router.use("/cart", cartController); // Assuming cartController contains routes for cart
module.exports = router;
