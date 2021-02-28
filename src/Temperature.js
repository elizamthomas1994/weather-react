import React from "react";
import './Temperature.css';
import './Units.css';

export default function Temperature() {
  return (
    <h3 className="current-weather">
      <span className="temp-number">0</span>
      <span className="units">
        <a href="/" id="celsius-link">
          °C
        </a>{" "}
        |
        <a href="/" id="farenheit-link">
          °F
        </a>
      </span>
    </h3>
  );
}