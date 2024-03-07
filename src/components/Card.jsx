import React, { useState, useEffect } from "react";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="relative flex flex-col w-64"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative mx-4 mt-4 text-gray-700 bg-white bg-clip-border rounded-sm h-56">
          <img
            src={
              props.image
                ? props.image
                : "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="card-image"
            className="object-contain w-full h-full z-0 cursor-pointer"
          />
          <div
            className={`absolute z-50 bottom-0 w-full text-center bg-gray-500 text-black opacity-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            } flex items-center justify-center transition-opacity duration-300 cursor-pointer`}
          >
            <span className="font-semibold p-2">Add To Cart</span>
          </div>
          <p className="m-2 rounded-md z-40 font-light text-xs absolute text-white bg-red-600 px-2 py-1 top-0">
            {props.price - props.previous_price < 0
              ? Math.floor(
                  ((props.price - props.previous_price) /
                    props.previous_price) *
                    100
                )
              : "-40"}
            %
          </p>
          <div className="my-2 mr-2 flex flex-col gap-4 z-40 font-light text-xs absolute top-0 right-0">
            <div className="bg-gray-50 cursor-pointer text-black rounded-full w-8 h-8 flex justify-center items-center">
              <FontAwesomeIcon icon={faHeart} size="xl" />
            </div>
            <div className="bg-gray-50 text-black cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
              <FontAwesomeIcon icon={faEye} size="xl" />
            </div>
          </div>
        </div>

        <div className="px-6 pt-2">
          <div className="flex flex-col mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {props.name || "Airpods Pro"}
            </p>
            <div className="flex gap-4">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed  text-ecom-red">
                ${props.price || 250}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed line-through text-blue-gray-500">
                ${props.previous_price || 300}
              </p>
            </div>
            <div className="text-sm font-semibold text-black opacity-40">
              Only {props.stock || 100} Pc left
            </div>

            <div className="flex items-center">
              {[...Array(5)].map((_, index) => {
                if (index + 1 <= (props.rating || 4)) {
                  return (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  );
                } else {
                  return (
                    <svg
                      key={index}
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
