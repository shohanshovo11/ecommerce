// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Billing from "./components/Billing/Billing";
import Signup from "./components/SignUp/Signup";
import Cart from "./components/Cart"
import Quantity from "./components/Quantity"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/billing" element={<Billing />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
