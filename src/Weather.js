import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import "./Location.css";
import Icon from "./Icon";
import "./Temperature.css";
import "./Units.css";
import "./Time.css";
import CurrentDate from "./CurrentDate";
import "./Description.css";
import "./Wind.css";

export default function Weather(props) {
    const[weatherInfo, setWeatherInfo]= useState({ ready: false });
    function handleResponse(response) {
        setWeatherInfo({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
        })
    }

    if (weatherInfo.ready) {
        return(<div className="Weather">
                <form>
                    <div className="row">
                        <div className="col">
                            <input
                            className="form-control form-control"
                            id="city-input"
                            type="search"
                            placeholder="Please enter a city here!"
                            autocomplete="off"
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary" id="search">
                             🔎
                            </button>
                            <button type="button" className="btn btn-secondary" id="locator">
                            🧭
                            </button>
                        </div>
                    </div>
                </form>
                <h1 className="current-city">{weatherInfo.city}</h1>
                <Icon />
                <div className="row">
                    <div className="col-6">
                        <h3 className="current-weather">
                        <span className="temp-number">{Math.round(weatherInfo.temperature)}</span>
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
                        <span className="weather-description text-capitalize">{weatherInfo.description}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h4 className="current-day"><CurrentDate date={weatherInfo.date}/></h4>
                    </div>
                    <div className="col-6">
                        <span className="wind-speed">Wind Speed: {Math.round(weatherInfo.wind)}mph</span>
                    </div>
                </div>
            </div>)
    } else {
        const apiKey=`845420caf0be768c5c5bd5aebfc06b76`;
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return("Loading...");
    }
}