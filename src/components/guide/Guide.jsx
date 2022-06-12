import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./guide.css";

const Guide = ({ icon, title, linkText }) => {
  return (
    <div className="besnik__guide">
      <div className="besnik__guide-icon_container">
        <img src={icon} alt="icon" />
      </div>
      <div className="besnik__guide-content_container">
        <p>{title}</p>
        <div>
          <a>{linkText}</a>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Guide;
