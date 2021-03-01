import React from "react";
import "./Location.css";
import Icon from "./Icon";
import "./Temperature.css";
import "./Units.css";
import "./Time.css";
import CurrentDate from "./CurrentDate";
import "./Description.css";
import "./Wind.css";

export default function WeatherResults(props) {
    return (
        <div>
            <h1 className="current-city">{props.data.city}</h1>
            <Icon />
            <div className="row">
                <div className="col-6">
                    <h3 className="current-weather">
                    <span className="temp-number">{Math.round(props.data.temperature)}</span>
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
                    <span className="weather-description text-capitalize">{props.data.description}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4 className="current-day"><CurrentDate date={props.data.date}/></h4>
                </div>
                <div className="col-6">
                    <span className="wind-speed">Wind Speed: {Math.round(props.data.wind)}mph</span>
                </div>
            </div>
        </div>
    );
}