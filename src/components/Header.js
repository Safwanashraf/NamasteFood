 // import NamasteLogo from "../../assets/Namaste-logo.png";

const logo = new URL("../../assets/Namaste-logo.png", import.meta.url).href;

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

//

export default Header;