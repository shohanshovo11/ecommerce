import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Quantity.css";

function Quantity(props) {
  const [cnt, setCnt] = useState(props.quantity);
  function handleUp() {
    setCnt(cnt + 1);
  }
  function handleDown() {
    cnt > 1 ? setCnt(cnt - 1) : setCnt(1);
  }
  return (
    <div className="Quantity">
      <div id="counter">
        <div style={{ visibility: cnt >= 10 ? "hidden" : "visible" }}>0</div>
        {cnt}
      </div>
      <div id="arrows">
        <FontAwesomeIcon
          icon={faAngleUp}
          className="cursor-pointer"
          style={{ color: "#000000" }}
          onClick={() => {
            handleUp();
          }}
        />
        <FontAwesomeIcon
          icon={faAngleDown}
          className="cursor-pointer"
          style={{ color: "#000000" }}
          onClick={() => {
            handleDown();
          }}
        />
      </div>
    </div>
  );
}

export default Quantity;
