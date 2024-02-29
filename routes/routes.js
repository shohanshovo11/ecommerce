// routes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Mount bookController for all routes
router.use("/books", bookController); // Assuming bookController contains routes for books

module.exports = router;
