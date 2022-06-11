import React from "react";
import { Navbar } from "../../components";
import House from "../../assets/house illustration.svg";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="besnik__header section__padding" id="home">
        <div className="besnik__header-content">
          <p className="besnik__header-content_subtext">
            Welcome to Besnik Agency
          </p>
          <h1 className="besnik__header-content_maintext">
            Discover a place you'll love to live.
          </h1>
          <p className="besnik__header-content_desctext">
            Get the best real estate deals first, before they hit the mass
            market! <span>hot foreclosure deals</span> with one simple search
          </p>
          <div className="besnik__header-content__btn-container">
            <button type="button">More About Us</button>
          </div>
        </div>
        <div className="besnik__header-image">
          <img src={House} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
