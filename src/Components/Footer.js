import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-wrapper">
          <div className="footer-items">
            <h2>Contents</h2>
            <Link to="/">Home</Link>
            <Link to="/add">New Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
