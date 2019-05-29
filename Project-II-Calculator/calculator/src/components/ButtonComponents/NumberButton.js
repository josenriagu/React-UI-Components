import React from "react";
import "./Button.css";

const NumberButton = props => {
  const { buttonStyle, text } = props;
  return (
    <div className="number-button">
      <button style={buttonStyle}>{text}</button>
    </div>
  );
};

export default NumberButton;
