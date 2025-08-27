import { use, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  // React renders the entire component again when there is a change in state or props
  // Hence when we click on the button the state changes and the component re-renders
  console.log("render cycle ");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {" "}
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
