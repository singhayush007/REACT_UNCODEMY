import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/"></a>Home
        </li>
        <li>
          <a href="/"></a>About
        </li>
        <li>
          <a href="/"></a>Product
        </li>
        <li>
          <a href="/"></a>Services
        </li>
        <li>
          <a href="/"></a>Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
