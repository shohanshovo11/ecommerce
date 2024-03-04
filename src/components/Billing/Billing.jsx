import React, { useState } from "react";
import Offer from "../Offer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import product1 from "../../assets/img/flash-sales/flash-sales-2.svg";
import product2 from "../../assets/img/flash-sales/flash-sales-3.svg";
import product3 from "../../assets/img/flash-sales/flash-sales-4.svg";
import { Input, Radio } from "@material-tailwind/react";
function Billing() {
  const [products, setProducts] = useState([
    {
      name: "A4Tech Controller",
      src: product1,
      price: 200,
    },
    {
      name: "LG Monitor",
      src: product2,
      price: 200,
    },
    {
      name: "Chair",
      src: product3,
      price: 300,
    },
    {
      name: "Product 3",
      src: product3,
      price: 300,
    },
    {
      name: "Product 3",
      src: product3,
      price: 300,
    },
    {
      name: "Product 3",
      src: product3,
      price: 300,
    },
    {
      name: "Product 3",
      src: product3,
      price: 300,
    },
  ]);
  let total = 0;
  return (
    <>
      <Offer />
      <Navbar />
      <div className="container">
        <h2 className="font-semibold text-4xl mb-10 mt-16">Billing Details</h2>
        <div className="flex gap-60">
          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#000] opacity-40">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-[#f5f5f5] outline-none rounded-sm px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-[#000] opacity-40">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-[#f5f5f5] outline-none rounded-sm px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city" className="text-[#000] opacity-40">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="bg-[#f5f5f5] outline-none rounded-sm px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="postal" className="text-[#000] opacity-40">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postal"
                  id="postal"
                  className="bg-[#f5f5f5] outline-none rounded-sm px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="text-[#000] opacity-40">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="bg-[#f5f5f5] outline-none rounded-sm px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[#000] opacity-40">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-[#f5f5f5] outline-none rounded-sm px-2 py-1 "
                />
              </div>
            </form>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-6 mb-8  overflow-auto h-96 pr-10">
              {products.map(
                (product) => (
                  (total += product.price),
                  (
                    <div className="flex justify-between" key={product.id}>
                      <div className="flex gap-4">
                        <img src={product.src} alt="" className="w-12 h-12" />
                        <h2 className="self-center">{product.name}</h2>
                      </div>
                      <h2 className="self-center">${product.price}</h2>
                    </div>
                  )
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between mb-2">
                <h2>Subtotal: </h2>
                <h2>${total}</h2>
              </div>
              <hr className="border-black border-1 opacity-30"></hr>
              <div className="flex justify-between mb-2">
                <h2>Shipping: </h2>
                <h2>Free</h2>
              </div>
              <hr className="border-black border-1 opacity-30"></hr>
              <div className="flex justify-between mb-2">
                <h2>Total: </h2>
                <h2>${total}</h2>
              </div>
              <div className="flex mb-4">
                <Radio
                  // checked={selectedValue === "a"}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <label className="self-center">Cash On Delivery</label>
              </div>

              {/* <h2>Shipping: </h2> */}
              {/* <h2>Total: </h2> */}
            </div>
            <div className="flex gap-4 justify-center items-center">
              <Input label="Coupon Code" className="" size="lg" />
              <button className="btn-primary h-12">Apply</button>
            </div>
            <button className="btn-primary mt-6">Place Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Billing;
