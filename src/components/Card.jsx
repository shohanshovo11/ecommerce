import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Card() {
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
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
            alt="card-image"
            className="object-cover w-full h-full z-0 cursor-pointer"
          />
          <div
            className={`absolute z-50 bottom-0 w-full text-center bg-gray-500 text-black opacity-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            } flex items-center justify-center transition-opacity duration-300 cursor-pointer`}
          >
            <span className="font-semibold p-2">Add To Cart</span>
          </div>
          <p className="m-2 rounded-md z-40 font-light text-xs absolute text-white bg-red-600 px-2 py-1 top-0">
            -40%
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
              Apple AirPods
            </p>
            <div className="flex gap-4">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed  text-ecom-red">
                $95.00
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed line-through text-blue-gray-500">
                $150.00
              </p>
            </div>

            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-700 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
