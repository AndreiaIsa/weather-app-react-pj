import React from "react";
import WeatherIcon from "./WeatherIcon";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <section className="actual-location">
        <div className="row">
          <div className="col-12">
            <h1>
              <span className="actual-weather float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </span>

              <WeatherTemperature celcius={props.data.temperature} />

              <span className="actual-weather float-right">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </span>
            </h1>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <span className="city">{props.data.city}</span>
          <span className="current-location">
            <button>🧭</button>
          </span>
        </div>
        <div className="row">
          <h2 id="date">
            <FormattedDate date={props.data.date} />
          </h2>
        </div>

        <ul>
          <li>
            <span className="hum">Humidity: </span>
            <span className="humid">{props.data.humidity}</span>
            <span className="percentage">%</span>
          </li>
          <li>
            <span className="wind-speed">Wind: </span>
            <span className="wind">{props.data.wind}</span>
            <span className="km"> Km/h</span>
          </li>
          <li className="text-capitalize">
            <span className="weather-description">
              {props.data.description}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
