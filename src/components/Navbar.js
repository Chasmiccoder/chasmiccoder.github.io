import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
      <div className="navbar-right">
        <Link to="https://chasmiccoder.medium.com/" className="navbar-links">
          Blog
        </Link>

        <Link to="/" className="navbar-links">
          CV
        </Link>

        <Link to="/" className="navbar-links">
          Photography
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
