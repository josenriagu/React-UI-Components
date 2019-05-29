import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  const { value } = props;
  return (
    <div className="calculator-display">
      <input value={value} />
    </div>
  );
};

export default CalculatorDisplay;
