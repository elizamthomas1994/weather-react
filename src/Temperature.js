import React from "react";

export default function Temperature() {
  return (
    <h3 class="current-weather">
      <span class="temp-number">0</span>
      <span class="units">
        <a href="#" id="celsius-link">
          °C
        </a>{" "}
        |
        <a href="#" id="farenheit-link">
          °F
        </a>
      </span>
    </h3>
  );
}