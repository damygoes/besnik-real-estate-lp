import React from "react";
import Brand1 from "../../assets/brand-logos/logo1.svg";
import Brand2 from "../../assets/brand-logos/logo2.svg";
import Brand3 from "../../assets/brand-logos/logo3.svg";
import Brand4 from "../../assets/brand-logos/logo4.svg";
import Brand5 from "../../assets/brand-logos/logo5.svg";
import "./brand.css";

const Brand = () => {
  return (
    <div className="besnik__brand">
      <img src={Brand1} alt="brand-logo" />
      <img src={Brand2} alt="brand-logo" />
      <img src={Brand3} alt="brand-logo" />
      <img src={Brand4} alt="brand-logo" />
      <img src={Brand5} alt="brand-logo" />
    </div>
  );
};

export default Brand;
