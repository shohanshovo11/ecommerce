import React, { useEffect, useState } from "react";
import Offer from "../Offer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Input, Radio } from "@material-tailwind/react";
import Axios from "../../api/api";
import { useNavigate } from "react-router-dom";

function Billing() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `/cart/email/${localStorage.getItem("userEmail")}`
        );
        setCart(response.data);
        const transformedData = response.data.map((product) => ({
          name: product.productId.name,
          price: product.productId.price,
          quantity: product.quantity,
          src: product.productId.image,
        }));
        setCart(response.data);
        console.log(transformedData, "shohan");
        setProductData(transformedData);
        setProducts(transformedData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);
  let total = 0;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Capture form field values
    const name = e.target.name.value;
    const address = e.target.address.value;
    const city = e.target.city.value;
    const postal = e.target.postal.value;
    const country = e.target.country.value;
    const phone = e.target.phone.value;

    // Validate form fields
    if (!name || !address || !city || !postal || !country || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("Please login to place the order.");
      return;
    }

    // Prepare order data
    const orderData = {
      userEmail,
      products,
      total,
      name,
      address,
      city,
      postal,
      country,
      phone,
      // Add other necessary order details
    };

    // Send order data to backend
    Axios.post("orders", orderData)
      .then((response) => {
        console.log("Order placed successfully:", response.data);
        alert("Order placed successfully!");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Error placing order. Please try again later.");
      });
    async function deleteCart() {
      cart.forEach((product) => {
        Axios.delete(`cart/${product._id}`)
          .then((data) => {
            navigate("/");
          })
          .catch();
      });
    }
    await deleteCart();
  };

  return (
    <>
      <Offer />
      <Navbar />
      <div className="container">
        <h2 className="font-semibold text-4xl mb-10 mt-16">Billing Details</h2>
        <div className="flex gap-60">
          <div className="flex-1">
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => handlePlaceOrder(e)}
            >
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
              <button className="btn-primary mt-6">Place Order</button>
            </form>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-6 mb-8  overflow-auto h-96 pr-10">
              {products.map(
                (product) => (
                  (total += product.price * product.quantity),
                  (
                    <div className="flex justify-between" key={product.id}>
                      <div className="flex gap-4">
                        <img src={product.src} alt="" className="w-12 h-12" />
                        <h2 className="self-center">{product.name}</h2>
                      </div>
                      <h2 className="self-center">
                        {product.quantity} X ${product.price} ={" $"}
                        {product.quantity * product.price}
                      </h2>
                    </div>
                  )
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              {/* Display subtotal, shipping, and total */}
              <button className="btn-primary mt-6">Place Order</button>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <Input label="Coupon Code" className="" size="lg" />
              <button className="btn-primary h-12">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Billing;
