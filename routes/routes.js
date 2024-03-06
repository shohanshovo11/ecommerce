// routes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const personController = require("../controllers/personController");
const productController = require("../controllers/productController");

// Mount bookController for all routes
router.use("/books", bookController); // Assuming bookController contains routes for books
router.use("/person", personController); // Assuming personController contains routes for persons
router.use("/product", productController); // Assuming productController contains routes for products
module.exports = router;
