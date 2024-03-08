import React from "react";
import Offer from "../Offer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Input, Radio } from "@material-tailwind/react";

function Billing() {
  // Extract products from location state
  const location = useLocation();
  const { products } = location.state;

  let total = 0;

  return (
    <>
      <Offer />
      <Navbar />
      <div className="container">
        <h2 className="font-semibold text-4xl mb-10 mt-16">Billing Details</h2>
        <div className="flex gap-60">
          <div className="flex-1">
            {/* Billing form */}
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-6 mb-8  overflow-auto h-96 pr-10">
              {products.map((product) => (
                <div className="flex justify-between" key={product._id}>
                  <div className="flex gap-4">
                    {/* Display product details */}
                  </div>
                  {/* Display product price */}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {/* Display subtotal, shipping, and total */}
              <button className="btn-primary mt-6">Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Billing;
