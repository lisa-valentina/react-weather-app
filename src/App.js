import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pinneberg" />
        <footer>
          This project was coded by Lisa Valentina Riedel and is open sourced on{" "}
          <a
            href="https://github.com/lisa-valentina/react-weather-app"
            target={"_blank"}
            rel={"noreferrer"}
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
