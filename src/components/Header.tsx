import { useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";
import Hambergur from "../assets/images/icon-menu.svg";
import CloseIcon from "../assets/images/icon-menu-close.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    if (ref.current !== null) {
      if (!showMenu) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
      }
    }
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <div ref={ref} id="overlay"></div>

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
      <div className="hamburger--icon" onClick={handleMenu}>
        <img src={Hambergur} />
      </div>

      <div
        className="menu-modal"
        style={{ display: showMenu ? "block" : "none" }}
      >
        <div
          className="close-icon"
          onClick={() => {
            setShowMenu(false);
            if (ref.current) {
              ref.current.style.display = "none";
            }
          }}
        >
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
