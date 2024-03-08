import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const loggedUser = localStorage.getItem("userEmail") || "";
  return (
    <nav className="bg-white text-black pt-10">
      <div className="container flex justify-between items-center">
        <div>
          <a href="/" className=" text-2xl font-bold">
            T3CH-STATION
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <a href="/" className="">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="">
                About
              </a>
            </li>
            <li>
              {loggedUser === "" ? (
                <Link to="/login" className="">
                  Login
                </Link>
              ) : (
                <div className="font-bold">{loggedUser}</div>
              )}
            </li>
            <li>
              {loggedUser === "" ? (
                <Link to="/signup" className="">
                  Sign Up
                </Link>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-4 pt-2">
          <div className=" relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="bg-[#F5F5F5] py-2 pl-4 pr-12 text-sm font-light rounded-lg focus:outline-none focus:ring-ecom-red focus:border-ecom-red transition duration-150 ease-in-out"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            className="fa-xl self-center cursor-pointer"
          />
          <Link to="/cart" className="self-center cursor-pointer">
            <FontAwesomeIcon icon={faCartArrowDown} className="fa-xl" />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            id="hamburger"
            className="flex items-center px-3 py-2 border rounded text-ecom-red border-ecom-red hover:text-ecom-red hover:border-ecom-red"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <hr className="mt-3 border-gray-300" />
    </nav>
  );
}
export default Navbar;
