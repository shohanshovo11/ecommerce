import React, { useRef, useState, useEffect } from "react";
import Offer from "./Offer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Timer from "./Timer";
import Card from "./Card";
import hero from "./../assets/img/middle-hero-1.svg";
import service1 from "./../assets/img/services/Services1.svg";
import service2 from "./../assets/img/services/Services2.svg";
import service3 from "./../assets/img/services/Services3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import CategoryCard from "./CategoryCard";
import Footer from "./Footer";
import './Cart.css'
import Quantity from "./Quantity";

function Cart() {
  const cardContainerRef = useRef(null);
  const [products,setProducts] = useState([]);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  function init(){
    let tmpproducts=[];
    for(let i=0;i<2;i++){
      tmpproducts.push(<Card/>);
    }
    setProducts(tmpproducts);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="Cart">
      <div className="bg-black">
        <Offer />
      </div>
      <div className="container">
        <Navbar />
        <div id="path">
          <div id="writing-1">
          Home / 
          </div>
          <div id="writing-2">
          Cart
          </div>
        </div>
        <div id="frame-1">
          <div id="frame-2">
            <table id="product-list">
              <tr class="rows">
                <th class="cell">Product</th>
                <th class="cell">Price</th>
                <th class="cell">Quantity</th>
                <th class="cell">Subtotal</th>
              </tr>
              {
              products.map(
                (item,index) =>(
                  <tr class="rows">
                    <td class="cell">LCD Monitor</td>
                    <td class="cell">$650</td>
                    <td class="cell"><Quantity/></td>
                    <td class="cell">$650</td>
                  </tr>
                )
              )
            }
            </table>

          </div>
          
          
        </div>
        <div id="frame-3">
          <button id="return-to-shop">Return to Shop</button>
          <button id="update-cart">Update Cart</button>
        </div>
        <div id="frame-4">
            <div id="frame-5">
              <input type="text" id="coupon-code" placeholder="Coupon Code"></input>
              <button id="apply-coupon">Apply Coupon</button>
            </div>
            <div id="receipt">
              <div id="receipt-header">Card Total</div>
              <div class="receipt-rows">
                <div>Subtotal:</div>
                <div>$1750</div>
              </div>
              <div class="under-line"/>
              <div class="receipt-rows">
                <div>Shipping:</div>
                <div>Free</div>
              </div>
              <div class="under-line"/>
              <div class="receipt-rows">
                <div>Total:</div>
                <div>$1750</div>
              </div>
              <button id="apply-coupon">Process to checkout</button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
