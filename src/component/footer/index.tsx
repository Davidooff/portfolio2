import logo from "../../assets/logo.png";
import instagram from "../../assets/social media/Instagram.png";
import facebook from "../../assets/social media/Facebook.png";
import twiter from "../../assets/social media/Twiter.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="" />
        <div className="footer-content-text">
          <ul>
            <li>About App</li>
            <li>FAQs</li>
            <li>Store</li>
            <li>Cookies</li>
            <li>Info</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
          <div>
            <p>
              Your Name <br /> St Name number 1 <br /> City, Country
              <br />
              <br />
              +00 123 456 789
              <br />
              <br />
              name@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h2>Copyright | Davidooff</h2>
        <ul>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twiter} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
