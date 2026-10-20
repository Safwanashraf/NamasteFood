import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const logo = new URL("../../assets/foodie-mark.svg", import.meta.url).href;

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
      <Link className="brand" to="/" aria-label="Foodie home">
        <img className="logo" src={logo} alt="" />
        <span className="brand-name">
          foodie<span>.</span>
        </span>
      </Link>
      <nav className="nav-items" aria-label="Main navigation">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
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
