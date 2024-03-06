// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Billing from "./components/Billing/Billing";
import Signup from "./components/SignUp/Signup";
import Cart from "./components/Cart";
import Quantity from "./components/Quantity";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/cart" element={<Cart />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
