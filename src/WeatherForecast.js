import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="WeatherForecast">
      <div class="row">
        <div class="col">
          <WeatherIcon code="01d" size={40} />{" "}
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-minimum">21</span>
            <span className="WeatherForecast-maximum">26</span>
          </div>
        </div>
      </div>
    </div>
  );
}
