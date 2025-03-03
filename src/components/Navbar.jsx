import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ff6b81",
    padding: "15px 20px",
    color: "white",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    transition: "color 0.3s",
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={logoStyle}>FoodFirst</h1>
      <ul style={navLinksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
        <li><Link to="/register" style={linkStyle}>Register</Link></li>
        <li><Link to="/cart" style={linkStyle}>Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;