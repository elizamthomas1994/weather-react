import React from "react";
import Icon from "./Icon";
import "./ForecastData.css";

export default function ForecastData(props) {
    function forecastTime() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return(
            <div className="forecast-time">
                {hours}:00
            </div>)
    }

    function forecastTemperature() {
        let temperature = Math.round(props.data.main.temp)
        return(
            <div className="forecast-temp">
                {temperature}°C
            </div>)
    }
    return(
        <div className="WeatherForecast col">
            {forecastTime()}
            <Icon code={props.data.weather[0].icon} />
            {forecastTemperature()}
        </div>
    )
}