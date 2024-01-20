import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [ForecastData, setForecastData] = useState(false);

  function handleResponse(response) {
    setReady(true);
    setForecastData(response.data.daily);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{ForecastData[0].dt}</div>
            <WeatherIcon code={ForecastData[0].weather[0].icon} size={40} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-max">
                {ForecastData[0].temp.max}°{" "}
              </span>
              <span className="WeatherForecast-min">3°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c6ccad355ceda3eadc4ad39e3b374f54";
    let longitude = props.data.lon;
    let latitude = props.data.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
