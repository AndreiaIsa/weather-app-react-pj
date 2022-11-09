import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <span className="search-form">
            <div className="mb-5">
              <input
                type="search"
                id="search-input"
                className="form-control search-field"
                placeholder="Search City"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
          </span>
        </form>

        <WeatherInfo data={weatherData} />

        <WeatherForecast coordinates={weatherData.coordinates} />
        <footer>
          <a
            href="https://github.com/AndreiaIsa/weather-app-react-pj"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Andreia Gonçalves
        </footer>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
