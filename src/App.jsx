// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Billing from "./components/Billing/Billing";
import Signup from "./components/SignUp/Signup";
import Cart from "./components/Cart";
import Quantity from "./components/Quantity";
import AllProductsPage from "./components/AllProductsPage";
import Error from "./components/NotFound/Error";
import Account from "./components/Account/Account";
import Wishlist from "./components/Wishlist/Wishlist";
import Contact from "./components/ContactUs/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/allproducts" element={<AllProductsPage />} />
      <Route path="/error" element={<Error />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/*" element={<Error />} />

      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
