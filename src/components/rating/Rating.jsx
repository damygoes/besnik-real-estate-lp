import React from "react";
import Logo from "../../assets/Logo.svg";
import RatingStar from "../../assets/Star.svg";
import "./rating.css";

const Rating = () => {
  return (
    <div className="besnik__rating">
      <div className="besnik__rating-content_left">
        <img src={Logo} alt="logo" />
        <p>More than 45,000+ companies trust besnik</p>
      </div>
      <div className="besnik__rating-content_right">
        <img src={RatingStar} alt="rating stars" />
        <p>5 Star Ratings (2k+ Review)</p>
      </div>
    </div>
  );
};

export default Rating;
