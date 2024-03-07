import React, { useRef, useState, useEffect } from "react";
import Offer from "./Offer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Cart.css";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";
import Axios from "../api/api";

function Cart() {
  const [products, setProducts] = useState([
    {
      product: "LCD Monitor",
      price: 650,
      quantity: 1,
    },
    {
      product: "A4Tech Controller",
      price: 200,
      quantity: 10,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "/cart/email/zarif.zeisan.mustafa@gmail.com"
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Cart">
      <div className="bg-black">
        <Offer />
      </div>
      <div className="container">
        <Navbar />
        <div id="path">
          <div id="writing-1">Home /</div>
          <div id="writing-2">Cart</div>
        </div>
        <div id="frame-1">
          <div id="frame-2">
            <table id="product-list">
              <thead>
                <tr className="rows">
                  <th className="cell">Product</th>
                  <th className="cell">Price</th>
                  <th className="cell">Quantity</th>
                  <th className="cell">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr className="rows" key={index}>
                    <td className="cell">{item.product}</td>
                    <td className="cell">${item.price}</td>
                    <td className="cell">
                      <Quantity quantity={item.quantity} />
                    </td>
                    <td className="cell">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div id="frame-3">
          <button id="return-to-shop">Return to Shop</button>
          <button id="update-cart">Update Cart</button>
        </div>
        <div id="frame-4">
          <div id="frame-5">
            <input
              type="text"
              id="coupon-code"
              placeholder="Coupon Code"
            ></input>
            <button id="apply-coupon">Apply Coupon</button>
          </div>
          <div id="receipt">
            <div id="receipt-header">Card Total</div>
            <div className="receipt-rows">
              <div>Subtotal:</div>
              <div>$1750</div>
            </div>
            <div className="under-line" />
            <div className="receipt-rows">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="under-line" />
            <div className="receipt-rows">
              <div>Total:</div>
              <div>$1750</div>
            </div>
            <Link
              to="/billing"
              id="apply-coupon"
              className="w-2/3 text-center self-center"
            >
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
