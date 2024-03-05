// routes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const personController = require("../controllers/personController");

// Mount bookController for all routes
router.use("/books", bookController); // Assuming bookController contains routes for books
router.use("/person", personController); // Assuming personController contains routes for persons
module.exports = router;
