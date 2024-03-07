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
import Axios from "../api/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const cardContainerRef = useRef(null);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const navigate = useNavigate(); // Importing the useNavigate hook

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const [cart, setCart] = useState([]);
  const [flashSales, setFlashSales] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [products, setProducts] = useState([]);
  async function fetchData() {
    const products = await Axios.get("product");
    if (products.status === 200 && products.data.length > 0) {
      setProducts(products.data);
    }

    let tmpFlashSales = [],
      tmpBestSelling = [],
      tmpExploreProducts = [],
      tmpCategories = [];
    for (let i = 0; i < 8; i++) {
      tmpFlashSales.push(<Card />);
    }
    for (let i = 0; i < 8; i++) {
      tmpCategories.push(<CategoryCard />);
    }
    for (let i = 0; i < 8; i++) {
      tmpBestSelling.push(<Card />);
    }
    for (let i = 0; i < 10; i++) {
      tmpExploreProducts.push(<Card />);
    }
    // setFlashSales(tmpFlashSales);
    setCategories(tmpCategories);
    // setBestSelling(tmpBestSelling);

    try {
      const productsResponse = await Axios.get("product");
      const productsData = productsResponse.data;

      // Sort products based on sell_count in descending order
      productsData.sort((a, b) => b.sell_count - a.sell_count);

      // Get top 10 products
      const topProducts = productsData.slice(0, 10);

      // Set the top products to the bestSelling state
      setBestSelling(
        topProducts.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            previous_price={item.previous_price}
            rating={item.rating}
            image={item.image}
            category={item.category}
            stock={item.stock}
            sell_count={item.sell_count}
          />
        ))
      );

      // Handle other data like flashSales, categories, etc.
      // ...
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error
    }
    try {
      const productsResponse = await Axios.get("product");
      const productsData = productsResponse.data;

      // Sort products based on stock in ascending order
      productsData.sort((a, b) => a.stock - b.stock);

      // Get top 10 products
      const topProducts = productsData.slice(0, 10);

      // Set the top products to the flashSales state
      setFlashSales(
        topProducts.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            previous_price={item.previous_price}
            rating={item.rating}
            image={item.image}
            category={item.category}
            stock={item.stock}
            sell_count={item.sell_count}
          />
        ))
      );
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const productsToShow = viewAllProducts ? products : products.slice(0, 10);

  // Function to add a product to the cart
  const addToCart = async (productId, price, quantity, email) => {
    const data = await Axios.post("cart", {
      productId,
      price,
      quantity,
      email,
    });
    console.log(data);
    // setCart((prevCart) => ({
    //   ...prevCart,
    //   [productId]: prevCart[productId] ? prevCart[productId] + 1 : 1,
    // }));
  };

  // Function to navigate to the all products page
  const handleViewAllProducts = () => {
    navigate("/allproducts");
  };

  return (
    <>
      <div className="bg-black">
        <Offer />
      </div>
      {console.log(cart)}
      <div className="container">
        <Navbar />
        <Hero />
        <div className="mt-24">
          <div className="flex gap-4">
            <div className="bg-ecom-red w-4 rounded-sm"></div>
            <p className="text-ecom-red font-bold">Today's</p>
          </div>
          <div className="flex gap-10 mt-4 ">
            <h2 className="text-3xl font-semibold self-center">Flash Sales</h2>
            <Timer />
            <div className="flex gap-2 flex-auto justify-end">
              <button onClick={() => scrollLeft(cardContainerRef)}>
                <FontAwesomeIcon icon={faCircleLeft} size="2xl" />
              </button>
              <button onClick={() => scrollRight(cardContainerRef)}>
                <FontAwesomeIcon icon={faCircleRight} size="2xl" />
              </button>
            </div>
          </div>
          <div
            className="gap-1 flex overflow-x-scroll relative scroll-smooth scrolling-auto"
            ref={cardContainerRef}
          >
            {flashSales.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="mt-6 w-full flex">
            {/* Use handleViewAllProducts function to navigate */}
            <button
              type="button"
              className="btn-primary mx-auto"
              onClick={handleViewAllProducts}
            >
              View All Products
            </button>
          </div>
          <hr className="mt-8 border-gray-300 mb-3" />
        </div>
        <div className="container">
          <div className="flex gap-4 mt-16">
            <div className="bg-ecom-red w-4 rounded-sm"></div>
            <p className="text-ecom-red font-bold">Categories</p>
          </div>
          <div className="flex gap-10 mt-6 ">
            <h2 className="text-3xl font-semibold self-center">
              Browse By Category
            </h2>
            <div className="flex gap-2 flex-auto justify-end">
              <button onClick={() => scrollLeft()}>
                <FontAwesomeIcon icon={faCircleLeft} size="2xl" />
              </button>
              <button onClick={() => scrollRight()}>
                <FontAwesomeIcon icon={faCircleRight} size="2xl" />
              </button>
            </div>
          </div>
          <div className="flex mt-10 gap-8 p-4 overflow-x-scroll scroll-smooth">
            {categories.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
        <hr className="mt-10 border-gray-300 mb-3" />
        <div className="mt-16">
          <div className="flex gap-4">
            <div className="bg-ecom-red w-4 rounded-sm"></div>
            <p className="text-ecom-red font-bold">This Month</p>
          </div>
          <div className="flex gap-10 mt-4 justify-between">
            <h2 className="text-3xl font-semibold self-center">
              Best Selling Products
            </h2>
            <button type="button" className="btn-primary">
              View All
            </button>
          </div>
          <div className="gap-1 flex overflow-x-scroll relative scroll-smooth scrolling-auto">
            {bestSelling.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="mt-6 w-full flex">
            {/* Use handleViewAllProducts function to navigate */}
            <button
              type="button"
              className="btn-primary mx-auto"
              onClick={handleViewAllProducts}
            >
              View All Products
            </button>
          </div>
        </div>
        <div className="bg-black flex w-full mt-28 h-[30rem]">
          <div className="flex flex-col flex-1 text-white p-16">
            <h1 className="text-[#00ff66]">Categories</h1>
            <h1 className="text-6xl mt-10">Enhance Your Music Experience</h1>
            <button
              type="button"
              className="bg-[#00FF66] px-10 py-3 rounded-md text-white hover:bg-gray-300 hover:text-ecom-red font-light transition-all duration-300 ease-in-out w-40 mt-20"
            >
              Buy Now!
            </button>
          </div>
          <div className="flex-1 my-auto">
            <img
              src={hero}
              style={{
                backgroundImage: `radial-gradient(closest-side, #000000, #fff, #000000)`,
              }}
            />
          </div>
        </div>
        <div className="mt-24">
          <div className="flex gap-4">
            <div className="bg-ecom-red w-4 rounded-sm"></div>
            <p className="text-ecom-red font-bold">Our Products</p>
          </div>
          <div className="flex gap-10 mt-4 ">
            <h2 className="text-3xl font-semibold self-center">
              Explore Our Products
            </h2>
            <div className="flex gap-2 flex-auto justify-end">
              <button onClick={() => scrollLeft(productRef)}>
                <FontAwesomeIcon icon={faCircleLeft} size="2xl" />
              </button>
              <button onClick={() => scrollRight(productRef)}>
                <FontAwesomeIcon icon={faCircleRight} size="2xl" />
              </button>
            </div>
          </div>
          <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
            {productsToShow
              .filter((item) => item.stock > 0) // Filter products based on stock availability
              .map((item, index) => (
                <div key={item._id}>
                  <Card
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    previous_price={item.previous_price}
                    rating={item.rating}
                    image={item.image}
                    category={item.category}
                    stock={item.stock}
                    sell_count={item.sell_count}
                    addToCart={() =>
                      addToCart(
                        item._id,
                        item.price,
                        1,
                        "zarif.zeisan.mustafa@gmail.com"
                      )
                    }
                  />
                </div>
              ))}
          </div>
          <div className="mt-6 w-full flex">
            {/* Use handleViewAllProducts function to navigate */}
            <button
              type="button"
              className="btn-primary mx-auto"
              onClick={handleViewAllProducts}
            >
              View All Products
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-16 gap-24">
          <div className="flex flex-col text-center">
            <div className="items-center w-full">
              <img src={service1} className="w-16 mx-auto" />
            </div>
            <p className="uppercase font-bold mt-4 mb-2">
              FREE AND FAST DELIVERY
            </p>
            <p className="text-xs">Free delivery for all orders above $40</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="items-center w-full">
              <img src={service2} className="w-16 mx-auto" />
            </div>
            <p className="uppercase font-bold mt-4 mb-2">
              24/7 CUSTOMER SERVICE
            </p>
            <p className="text-xs">Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="items-center w-full">
              <img src={service3} className="w-16 mx-auto" />
            </div>
            <p className="uppercase font-bold mt-4 mb-2">
              MONEY BACK GUARANTEE
            </p>
            <p className="text-xs">We return money within 30 days</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
