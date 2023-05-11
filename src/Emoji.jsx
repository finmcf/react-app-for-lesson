import React from "react";

const Emoji = ({ temperature }) => {
  const getEmojiForTemperature = (temp) => {
    if (temp < 20) return "🥶"; // cold face
    if (temp >= 25) return "🥵"; // hot face
    return "😅"; // default face
  };

  return (
    <h1 style={{ fontSize: "12em", textAlign: "center" }}>
      {getEmojiForTemperature(temperature)}
    </h1>
  );
};

export default Emoji;
