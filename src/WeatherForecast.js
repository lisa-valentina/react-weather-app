import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.data.city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="WeatherForecast row">
        {forecastData.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "242e181ca0a34d6a4t3befc66o8e43fa";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
