import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Account.css";

function Account() {
  return (
    <>
      <Navbar />
      <div className="Account container">
        <div className="upperLine">
          <p className="blackTxt">
            <span className="ashTxt">Home </span>/ My Account
          </p>
          <p className="blackTxt">
            Welcome!<span className="redTxt">MD Rimel</span>{" "}
          </p>
        </div>
        <div className="middleArea">
          <div className="MLeft">
            <p className="boldLine">Manage My Account</p>
            <div className="subLine">
              <div className="redTxt">My Profile</div>
              <div className="ashTxt">Address Book</div>
              <div className="ashTxt">My Payment Option</div>
            </div>
            <p className="boldLine">My Orders</p>
            <div className="subLine">
              <div className="ashTxt">My Returns</div>
              <div className="ashTxt">My Cancellation</div>
            </div>
            <p className="boldLine">My WishList</p>
          </div>
          <div className="MRight">
            <form className="Form">
              <p className="redTxt">Edit Your Profile</p>
              <div className="Name">
                <div className="label">
                  {" "}
                  <label htmlFor="FirstName">First Name:</label>
                  <input className="box" type="text" id="FirstName" />{" "}
                </div>
                <div className="label">
                  {" "}
                  <label htmlFor="LasttName">Last Name:</label>
                  <input className="box" type="text" id="LastName" />{" "}
                </div>
              </div>
              <div className="email">
                <div className="label">
                  {" "}
                  <label htmlFor="email">Email:</label>
                  <input className="box" type="text" id="email" />{" "}
                </div>
                <div className="label">
                  {" "}
                  <label htmlFor="address">Address:</label>
                  <input className="box" type="text" id="address" />{" "}
                </div>
              </div>

              <div className="password">
                <div className="label">
                  {" "}
                  <label htmlFor="pswrd">Password Changes</label>
                  <input
                    className="box"
                    type="text"
                    id="pswrd"
                    placeholder="Current Password"
                  />
                  <input
                    className="box"
                    type="text"
                    placeholder="New Password"
                  />
                  <input
                    className="box"
                    type="text"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>

              <div className="saveChanges">
                <button className="noClrBtn">Cancel</button>
                <button className="redbtn">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Account;
