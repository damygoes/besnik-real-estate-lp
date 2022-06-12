import React from "react";
import "./prompter.css";

const Prompter = ({ title, text }) => {
  return (
    <div className="besnik__prompter">
      <div></div>
      <p className="besnik__prompter-title">{title}</p>
      <p className="besnik__prompter-text">{text}</p>
    </div>
  );
};

export default Prompter;
