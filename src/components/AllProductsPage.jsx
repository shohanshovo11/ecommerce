import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Axios from "../api/api";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsResponse = await Axios.get("product");
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Offer />
      <Navbar />
      <div className="container" style={{marginTop:"20px"}}>
        <h2 className="text-3xl font-semibold mb-6">All Products</h2>
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              previous_price={product.previous_price}
              rating={product.rating}
              image={product.image}
              category={product.category}
              stock={product.stock}
              sell_count={product.sell_count}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProductsPage;
