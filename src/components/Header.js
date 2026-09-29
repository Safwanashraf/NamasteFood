// import NamasteLogo from "../../assets/Namaste-logo.png";

import { useEffect, useState } from "react";

const logo = new URL("../../assets/Namaste-logo.png", import.meta.url).href;

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  {
    /*
  //If there's no dependency array, then useEffect will calls after every time the component re-renders.
  useEffect(() => {
    console.log("useEffect called without dependency array!");
  });

  //If there's an empty dependency array, then useEffect will only calls on initial rendering just once.
  useEffect(()=>{
    console.log("useEffect called with a empty dependency array");
  },[]);

  //If there's something inside the dependency array, then whenever it changes the useEffect will be called.
  useEffect(()=>{
    console.log("useEffect called each time the state variable update");
  }, [btnName]);
*/
  }

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Namaste Food home">
        <img className="logo" src={logo} alt="Namaste Food" />
        <span className="brand-name">
          Namaste<span>Food</span>
        </span>
      </a>
      <nav className="nav-items" aria-label="Main navigation">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

//

export default Header;
