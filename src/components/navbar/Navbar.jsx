import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Logo from "../../assets/Logo.svg";
import "./navbar.css";

// Making the navigation links more compact and reuseable
const Menu = () => {
  return (
    <>
      <p>
        {" "}
        <a href="#home">Home</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#">Features</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#">Service</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#">Listed</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#">Contact</a>{" "}
      </p>
    </>
  );
};

const Navbar = () => {
  // To set the state of the menu icon so it can be toggled
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // Desktop Menu Style
    <div className="besnik__navbar">
      <div className="besnik__navbar-links">
        <div className="besnik__navabr-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="besnik__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="besnik__navbar-sign">
        <p>Sign up</p>
        <button type="button">Register</button>
      </div>
      {/* Mobile Menu Style */}
      <div className="besnik__navbar-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#0f1b4c"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#0f1b4c"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="besnik__navbar-mobile_container swing-in-right-bck">
            <div className="besnik__navbar-mobile_container-links">
              <Menu />
              <div className="besnik__navbar-mobile_container-links-sign">
                <p>Sign up</p>
                <button type="button">Register</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
