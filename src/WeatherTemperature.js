import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="number-degrees">{props.celcius}</span>
        <span className="celcius">
          <a href="/">°C</a>
        </span>
        <span className="fahrenheit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celcius * 9) / 5 + 32);
    return (
      <span className="WeatherTemperature">
        <span className="number-degrees">{fahrenheit}</span>
        <span className="celcius">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
        </span>
        <span className="fahrenheit">
          <a href="/">°F</a>
        </span>
      </span>
    );
  }
}
