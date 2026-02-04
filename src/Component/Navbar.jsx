import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const ADMIN_PASSWORD = "admin123";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    const password = prompt("Enter Admin Password");

    if (password === ADMIN_PASSWORD) {
      navigate("/admin");
    } else {
      alert("❌ Wrong password! Access denied.");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      {/* 🔐 Admin with password */}
      <button className="admin-link" onClick={handleAdminClick}>
        Admin
      </button>
    </nav>
  );
};
