import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Wishlist.css";
import { useState, useEffect } from "react";

function Wishlist() {
  const [wishItem, setWishItem] = useState([]);
  return (
    <>
      <Navbar />
      <div className="Wishlist container">
        <div className="wishlistmiddle">
          <div className="topL">
            <p className="bold_txt">Wishlist(4)</p>
            <button id="moveall">Move All to Bag</button>
          </div>
          <div className="four_item_area">
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart">Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart"> Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart">Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart">Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
          </div>
        </div>
        <div className="wishlistmiddle">
          <div className="topL">
            <p className="bold_txt">Just For you</p>
            <button id="seeAll">See All</button>
          </div>
          <div className="four_item_area">
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart">Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart"> Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart">Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
            <div className="oneitem">
              <div className="item_img">
                <img
                  src="https://www.ravebd.com/wp-content/uploads/2022/04/5018A-Khaki-1-1-300x300.jpg"
                  alt=""
                />
              </div>
              <button className="addtoCart">Add to Cart</button>
              <p>Bag</p>
              <p className="redPrice">$900</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
