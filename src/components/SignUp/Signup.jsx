import React from "react";
import "./Signup.css";
import sidebar_image from "./../../assets/img/side_image/login.svg";
import Offer from "../Offer";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Signup() {
  return (
    <>
      <Offer />
      <Navbar />
      <div className="main-page container flex justify-between">
        <div id="login">
          <div id="img">
            <img id="aa" src={sidebar_image}></img>
          </div>
          <div id="login-field">
            <div id="frame-1">
              <div id="create">Create an account</div>
              <div id="enter">Enter your details below</div>
            </div>
            <br />
            <div id="frame-2">
              <input type="text" placeholder="Name" id="name"></input>
              <br />
              <input
                type="email"
                placeholder="Email or Phone Number"
                id="mail"
              ></input>
              <br />
              <input type="password" placeholder="Password" id="pass"></input>
              <br />
            </div>
            <div id="frame-3">
              <button id="create-btn">Create Account</button>
              <div id="frame-4">
                {/* <img src='./Icon-Google.png' alt="Google Icon"></img> */}

                <button id="ggl-button">
                  <div id="icon-button">
                    {/* <img
                    src={sidebar_image}
                    alt="Google Icon"
                    id="icon-img"
                  ></img> */}
                    Sign up with Google
                  </div>
                </button>

                <div id="frame-5">
                  <div id="already-has">Already have account?</div>
                  <a href="login">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
