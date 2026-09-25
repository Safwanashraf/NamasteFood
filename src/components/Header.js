// import NamasteLogo from "../../assets/Namaste-logo.png";

import { useState } from "react";

const logo = new URL("../../assets/Namaste-logo.png", import.meta.url).href;

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Namaste Food home">
        <img className="logo" src={logo} alt="Namaste Food" />
        <span className="brand-name">Namaste<span>Food</span></span>
      </a>
      <nav className="nav-items" aria-label="Main navigation">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button className="btn-login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button></li>
        </ul>
      </nav>
    </header>
  );
};

//

export default Header;
