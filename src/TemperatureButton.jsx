import React from "react";

const TemperatureButton = ({ emoji, onClick }) => {
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "3em",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {emoji}
    </button>
  );
};

export default TemperatureButton;
