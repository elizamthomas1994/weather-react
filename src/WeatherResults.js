import React from "react";
import "./Location.css";
import Icon from "./Icon";
import Temperature from "./Temperature";
import "./Units.css";
import "./Time.css";
import CurrentDate from "./CurrentDate";
import "./Description.css";
import "./Wind.css";

export default function WeatherResults(props) {
    return (
        <div>
            <h1 className="current-city">{props.data.city}</h1>
            <Icon code={props.data.icon} />
            <div className="row">
                <div className="col-6">
                    <Temperature celsius={props.data.temperature}/>
                </div>
                <div className="col-6">
                    <span className="weather-description text-capitalize">{props.data.description}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4 className="current-day">Last updated: <CurrentDate date={props.data.date}/></h4>
                </div>
                <div className="col-6">
                    <span className="wind-speed">Wind Speed: {Math.round(props.data.wind)}mph</span>
                </div>
            </div>
        </div>
    );
}