import React from "react";
import Logo from "../assets/images/logo.svg";
import Hambergur from "../assets/images/icon-menu.svg";
import CloseIcon from "../assets/images/icon-menu-close.svg";

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
      <div className="hamburger--icon">
        <img className="hamburger--icon" src={Hambergur} />
      </div>

      <div className="menu-modal">
        <div className="close-icon">
          <img src={CloseIcon} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
