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

const logo = new URL("./assets/Namaste-logo.png", import.meta.url).href;

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={logo} />
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

const Body = () => {
    return (
        <div className="body">
            <h1>Top restaurant chains in Banglore</h1>
            <div className="body-container">
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            </div>
        </div>
    )
}

const ResCard = () => {
    return (
        <div className="res-card">
            <img className="res-card-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aouhnkmtmchfkiowm8ou"/>
            <h3 className="res-name">Dum Safari Biryani</h3>
            <h4 className="res-rating">3.4 . 30-40 mins</h4>
            <h4 className="res-item">Biriyani, Hyderabadi, Kebabs, North...</h4>
            <h4 className="res-address">Koramangala</h4>
        </div>
    )
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
