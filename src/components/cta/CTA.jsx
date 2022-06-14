import React from "react";
import "./cta.css";

const CTA = ({ title, text, image }) => {
  return (
    <div className="besnik__CTA  section__margin section__padding ">
      <div className="besnik__CTA-content">
        <p className="besnik__CTA-content_title"> {title} </p>
        <p className="besnik__CTA-content_text">{text}</p>

        <button className="besnik__CTA-content_btn" type="button">
          get started now
        </button>
      </div>
      <div className="besnik__CTA-image_container">
        <img src={image} alt="cta-image" />
      </div>
    </div>
  );
};

export default CTA;
