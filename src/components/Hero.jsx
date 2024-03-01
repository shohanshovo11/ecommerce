import React, { useState } from "react";
import { CarouselCustomNavigation } from "./CarouselCustomNavigation";

function Hero() {
  const [categories, setCategories] = useState([
    "Woman's Fashion",
    "Men's Fashion",
    "Kids Fashion",
    "Home & Living",
    "Electronics",
    "Books",
    "Beauty & Health",
    "Groceries",
  ]);
  return (
    <section className="container flex justify-between gap-10 mt-12">
      <div className="flex flex-col flex-1">
        {categories.map((category, index) => (
          <button key={index} className="px-4 py-2 mr-2 text-left">
            {category}
          </button>
        ))}
      </div>
      <div className="border border-gray-300"></div>
      <CarouselCustomNavigation />
    </section>
  );
}

export default Hero;
