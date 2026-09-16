import React from "react";
import ReactDOM from "react-dom/client";

/* 
    Header
        - logo
        - nav items
         - home
         - about
         - cart

    Body
        - search bar & button
        - resturants card
        - menu card

    Footer
        - logo
        - links
*/

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="./assets/Namaste-logo.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
const AppLayout = () => {
  return <div className="app">
    <Header />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
