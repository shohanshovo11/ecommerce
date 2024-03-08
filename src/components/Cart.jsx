import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Cart.css";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";
import Axios from "../api/api";

function Cart() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`/cart/email/${localStorage.getItem("userEmail")}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = async (productId, newQuantity, product) => {
    try {
      console.log(product, "product");
      await Axios.put(`/cart/${productId}`, { quantity: newQuantity });

      setProducts(prevProducts =>
        prevProducts.map(item =>
          item._id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // Conditionally render "Add Products to Cart" message if products array is empty
  if (products.length === 0) {
    return (
      <div className="Cart">
        <div className="container">
          <Navbar />
          <div
            id="empty-cart-message"
            className="text-5xl text-center flex items-center justify-center h-72"
          >
            Add Products to Cart
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Render the cart if products array is not empty
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
                  <th className="cell">Image</th>
                  <th className="cell">Product</th>
                  <th className="cell">Price</th>
                  <th className="cell">Quantity</th>
                  <th className="cell">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr className="rows" key={product._id}>
                    <td className=" mr-4">
                      <img className="w-8" src={product.productId.image} alt={product.productId.name} />
                    </td>
                    <td className="cell">{product.productId.name}</td>
                    <td className="cell">${product.price.toFixed(2)}</td>
                    <td className="cell">
                      <Quantity
                        quantity={product.quantity}
                        onQuantityChange={newQuantity =>
                          handleQuantityChange(product._id, newQuantity, product)
                        }
                      />
                    </td>
                    <td className="cell">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
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
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="under-line" />
            <div className="receipt-rows">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="under-line" />
            <div className="receipt-rows">
              <div>Total:</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <Link
              to={{
                pathname: "/billing",
                state: { products: products },
              }}
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
