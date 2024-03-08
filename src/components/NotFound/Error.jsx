import { Link } from "react-router-dom";
import "./Error.css";
function Error() {
  return (
    <div className="Error">
      <div className="threeLine">
        <div className="bigSize">404 Not Found</div>
        <div className="line">
          Your visited page not found. You may go home page.
        </div>
        <Link to={"/"} className="redBtnDiv">
          <button className="redbtn">Back to home page</button>
        </Link>
      </div>
    </div>
  );
}
export default Error;
