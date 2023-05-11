import React, { useState } from "react";
import Emoji from "./Emoji";
import TemperatureButton from "./TemperatureButton";

const App = () => {
  const [temperature, setTemperature] = useState(20);

  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    paddingBottom: "2em",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Adjust the temperature!</h1>
      <Emoji temperature={temperature} />
      <h2 style={{ fontSize: "30px" }}>{temperature}°C</h2>
      <div style={buttonContainerStyle}>
        <TemperatureButton emoji="❄️" onClick={decreaseTemperature} />
        <TemperatureButton emoji="🔥" onClick={increaseTemperature} />
      </div>
    </div>
  );
};

export default App;
