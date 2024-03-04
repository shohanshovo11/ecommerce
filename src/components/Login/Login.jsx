import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Offer from "../Offer";
import side_bar from "../../assets/img/side_image/login.svg";

function Login() {
  return (
    <>
      <Offer />
      <Navbar />
      <div className="container">
        <div className="flex gap-20 mt-24 justify-center items-center">
          <div className="w-3/6">
            <img src={side_bar} alt="" className="" />
          </div>
          <div className="flex justify-center items-center h-screen">
            <div className=" bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl text-left mb-4">
                Log in To T3CH-STATION
              </h1>
              <h1 className="mb-6 text-left">Enter your details below</h1>
              <form className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-200 w-full p-2 rounded-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-200 w-full p-2 rounded-sm"
                  />
                </div>
                <div className="flex gap-4 justify-between">
                  <button className="btn-primary text-white p-2 rounded-sm">
                    Login
                  </button>
                  <a href="/" className="text-ecom-red self-center">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
