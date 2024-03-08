import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Contact.css";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="Contact container py-16">
        <div className="upperLine">
          <p className="blackTxt">
            <span className="ashTxt">Home /</span> Contact
          </p>
        </div>
        <div className="middleArea">
          <div className="leftPart">
            <div className="boldTxt">
              <div className="RedBg">
                <img className="icon" src="Vector.jpg" alt="" />
              </div>
              Call To Us
            </div>
            <div>We are available 24/7,7days a week</div>
            <div>Phone:+8801678814708</div>
            <hr class="hrLine"></hr>
            <div className="boldTxt">Write To US</div>
            <div>
              Fill out our form and we will contact <br></br>you within 24
              hours.
            </div>
            <div>Emails: customer@exclusive.com</div>
            <div>Emails: support@exclusive.com</div>
          </div>
          <div className="rightPart">
            <div className="threeField">
              <input
                className="box"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="box3"
                type="text"
                placeholder="Your Email"
                required
              />
              <input
                className="box"
                type="text"
                placeholder="Your Phone"
                required
              />
            </div>
            <div>
              <input
                className="box1"
                type="text"
                placeholder="Your Massage"
                required
              />
            </div>
            <div className="redBtnDiv">
              <button className="redbtn">Send Massage</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
