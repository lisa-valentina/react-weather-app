import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [WeatherForecastData, setWeatherForecastData] = useState({
    ready: false,
  });

  function handleResponse(response) {
    setWeatherForecastData({
      ready: true,
      icon: response.data.weather[0].icon,
      maxTemp: response.data.daily[0].temp[3],
      minTemp: response.data.daily[0].temp[3],
    });
  }

  function WeatherForecastDaily() {
    const apiKey = "c6ccad355ceda3eadc4ad39e3b374f54";
    let longitude = props.data.lon;
    let latitude = props.data.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="WeatherForecast">
      {WeatherForecastDaily}
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">{maxTemp}° </span>
            <span className="WeatherForecast-min">3°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
