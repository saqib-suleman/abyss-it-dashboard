import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header-logo"
          src="https://abysssolutions.co/wp-content/themes/Abyss/images/logo.webp"
        />
      </Link>
      <div className="main-text">Employees Self Service Portal</div>
    </div>
  );
}

export default Header;
