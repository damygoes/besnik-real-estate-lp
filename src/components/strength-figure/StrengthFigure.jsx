import React from "react";
import "./strengthfigure.css";

const StrengthFigure = ({ title, text }) => {
  return (
    <div className="besnik__strengthfigure">
      <p className="besnik__strengthfigure-title"> {title} </p>
      <p className="besnik__strengthfigure-text"> {text} </p>
    </div>
  );
};

export default StrengthFigure;
