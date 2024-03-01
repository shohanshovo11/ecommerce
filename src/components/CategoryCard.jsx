import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function CategoryCard() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="bg-white rounded-sm flex flex-col justify-center items-center w-44 outline outline-2 outline-gray-400 py-6 cursor-pointer hover:bg-ecom-red hover:outline-none hover:duration-300 transition-all duration-300 "
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <FontAwesomeIcon
          icon={faMobileScreen}
          className={`text-5xl ${isHovered ? "text-white" : "text-black"}`}
        />
        <h1
          className={`text-lg mt-4 ${isHovered ? "text-white" : "text-black"}`}
        >
          Phones
        </h1>
      </div>
    </div>
  );
}

export default CategoryCard;
