import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Name</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">New Blog</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default NavBar;
