import React from "react";
import { StrengthFigure } from "../../components";
import "./strength.css";

const Strength = () => {
  return (
    <div className="besnik__strength">
      <StrengthFigure title="2,500" text="homes for sale" />
      <StrengthFigure title="5,000+" text="homes recently sold" />
      <StrengthFigure title="170+" text="price reduced" />
    </div>
  );
};

export default Strength;
