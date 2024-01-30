import React from "react";
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="header-items-list">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </header>
  );
}

export default Header;
