import React from "react";

import "./Weather.css";

let weatherData = {
  temperature: 10,
  city: "Machico",
  date: "Thursday 3 November 2022",
  time: "21:39",
  humidity: 12,
  wind: 1,
  description: "Scattered clouds",
};

export default function Weather(props) {
  return (
    <div className="Weather">
      <form id="search-form">
        <span className="search-form">
          <div className="mb-5">
            <input
              type="search"
              id="search-input"
              className="form-control search-field"
              placeholder="Search City"
              autoComplete="off"
            />
          </div>
        </span>
      </form>

      <section className="actual-location">
        <div className="row">
          <div className="col-12">
            <h1>
              <span className="number-degrees">{weatherData.temperature}</span>
              <span className="celcius">
                <a href="/" class="active">
                  °C
                </a>
              </span>
              <span className="fahrenheit">
                <a href="/" className="active">
                  °F
                </a>
              </span>
              <span className="actual-weather">🌥️</span>
            </h1>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <span className="city">{weatherData.city}</span>
          <span className="current-location">
            <button>🧭</button>
          </span>
        </div>
        <div className="row">
          <h2 id="date">{weatherData.date}</h2>
        </div>
        <div className="row">
          <h3>{weatherData.time}</h3>
        </div>

        <ul>
          <li>
            <span className="hum">Humidity:</span>
            <span className="humid">{weatherData.humidity}</span>
            <span className="percentage">%</span>
          </li>
          <li>
            <span className="wind-speed">Wind:</span>
            <span className="wind">{weatherData.wind}</span>
            <span className="km">Km/h</span>
          </li>
          <li>
            <span className="weather-description">
              {weatherData.description}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
