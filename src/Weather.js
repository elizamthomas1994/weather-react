import React from "react";
import Icon from "./Icon";
import "./Form.css";
import "./Location.css";
import "./Temperature.css";
import "./Units.css";
import "./Time.css";
import "./Description.css";
import "./Wind.css";

export default function Weather() {
    return(<div className="Weather">
        <form>
            <div class="row">
                <div class="col">
                <input
                    class="form-control form-control"
                    id="city-input"
                    type="search"
                    placeholder="Please enter a city here!"
                    autocomplete="off"
                />
                </div>
                <div class="col">
                <button type="submit" class="btn btn-primary" id="search">
                    🔎
                </button>
                <button type="button" class="btn btn-secondary" id="locator">
                    🧭
                </button>
                </div>
            </div>
        </form>

        <h1 className="current-city">London</h1>
        <Icon />
        <div className="row">
          <div className="col-6">
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
          </div>
          <div className="col-6">
            <span className="weather-description">SCATTERED CLOUDS</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="current-day">Fri Feb 5 21:00</h4>
          </div>
          <div className="col-6">
            <span className="wind-speed">WIND SPEED: 0mph</span>
          </div>
        </div>
    </div>)
}