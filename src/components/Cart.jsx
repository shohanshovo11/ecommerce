import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Cart.css";
import Quantity from "./Quantity"; // Import the Quantity component
import { Link } from "react-router-dom";
import Axios from "../api/api";

function Cart() {
  const [products, setProducts] = useState([]);
  const [uniqueProducts, setUniqueProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "/cart/email/zarif.zeisan.mustafa@gmail.com"
        );
        setProducts(response.data);

        // Extract unique products and their counts
        const uniqueProductsMap = response.data.reduce((acc, item) => {
          if (!acc[item.productId._id]) {
            acc[item.productId._id] = {
              ...item.productId,
              count: 1,
              totalPrice: item.price
            };
          } else {
            acc[item.productId._id].count++;
            acc[item.productId._id].totalPrice += item.price;
          }
          return acc;
        }, {});

        // Convert the unique products map into an array
        const uniqueProductsArray = Object.values(uniqueProductsMap);

        setUniqueProducts(uniqueProductsArray);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    // Update quantity and total price for the product
    setUniqueProducts(prevState =>
      prevState.map(product => {
        if (product._id === productId) {
          const totalPrice = product.price * newQuantity;
          return { ...product, count: newQuantity, totalPrice: totalPrice };
        }
        return product;
      })
    );
  };

  // Calculate subtotal based on updated uniqueProducts state
  const subtotal = uniqueProducts.reduce((acc, item) => acc + item.totalPrice, 0);

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
                {uniqueProducts.map((item, index) => (
                  <tr className="rows" key={index}>
                    <td className="cell">{item.name}</td>
                    <td className="cell">${item.price}</td>
                    <td className="cell">
                      {/* Use Quantity component here */}
                      <Quantity
                        quantity={item.count}
                        onQuantityChange={newQuantity =>
                          handleQuantityChange(item._id, newQuantity)
                        }
                      />
                    </td>
                    <td className="cell">${item.totalPrice}</td>
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
              <div>${subtotal}</div> {/* Use the calculated subtotal here */}
            </div>
            <div className="under-line" />
            <div className="receipt-rows">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="under-line" />
            <div className="receipt-rows">
              <div>Total:</div>
              <div>${subtotal}</div> {/* Use the calculated subtotal here */}
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
