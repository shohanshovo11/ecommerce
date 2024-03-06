import React from "react";
import "./Signup.css";
import sidebar_image from "./../../assets/img/side_image/login.svg";
import Offer from "../Offer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Axios from "../../api/api";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  // const history = useHistory();
  const handleSubmit =async(e)=>{
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    e.preventDefault(); // Prevent default form submission
    console.log("helo");
    try {
      // Make POST request using Axios
      const response = await Axios.post("person/", {
        name: name,
        email: email,
        password: password,
        verified: true
      });
      navigate("/");
      // history.push("/");
      // Handle response accordingly
      console.log(response,"zarif"); // Log response data or do something with it
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error("Error:", error.response.data.message); // Log any errors
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }
  return (
    <>
      <Offer />
      <Navbar />
      <div className="main-page container flex justify-between">
        <div id="login">
          <div id="img">
            <img id="aa" src={sidebar_image}></img>
          </div>
          <form id="login-field" onSubmit={(e)=>handleSubmit(e)}>
            <div id="frame-1">
              <div id="create">Create an account</div>
              <div id="enter">Enter your details below</div>
            </div>
            <br />
            <div id="frame-2">
              <input type="text" placeholder="Name" id="name" name="name"></input>
              <br />
              <input
                type="email"
                placeholder="Email or Phone Number"
                id="mail"
                name="email"
              ></input>
              <br />
              <input type="password" placeholder="Password" id="pass" name="password"></input>
              <br />
            </div>
            <div id="frame-3">
              <button id="create-btn" type="submit">
                Create Account</button>
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
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
