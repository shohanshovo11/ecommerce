// app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

// Connect to the database
connectDB();

// Define CORS options
const corsOptions = {
  origin: "http://localhost:5173",
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Include routes
app.use(routes);

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
