import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Offer() {
  return (
    <header className=" hidden text-white font-extralight py-3 md:flex md:justify-center md:items-center gap-40 container">
      <div>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="underline pl-4 font-bold cursor-pointer">ShopNow</span>
      </div>
      <div className="">
        English
        <FontAwesomeIcon icon={faChevronDown} className="ml-2 cursor-pointer" />
      </div>
    </header>
  );
}

export default Offer;
