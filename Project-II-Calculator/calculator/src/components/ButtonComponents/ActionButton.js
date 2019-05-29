import React from "react";
import "./Button.css";

const ActionButton = props => {
  const { buttonStyle, text } = props;
  return (
    <div className="action-button">
      <button style={buttonStyle}>{text}</button>
    </div>
  );
};

export default ActionButton;
