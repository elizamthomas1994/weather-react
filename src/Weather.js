import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import WeatherResults from "./WeatherResults"
import Forecast from "./Forecast";

export default function Weather(props) {
    const[weatherInfo, setWeatherInfo]= useState({ ready: false });
    const[location, setLocation] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherInfo({
            ready: true,
            city: response.data.name,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
        })
    }

    function search() {
        const apiKey=`845420caf0be768c5c5bd5aebfc06b76`;
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSearch(event) {
        setLocation(event.target.value);
    }

    if (weatherInfo.ready) {
        return(<div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input
                            className="form-control form-control"
                            id="city-input"
                            type="search"
                            placeholder="Please enter a city here!"
                            autocomplete="off"
                            onChange={handleSearch}
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary" id="search">
                             🔎
                            </button>
                        </div>
                    </div>
                </form>
                <WeatherResults data={weatherInfo}/>
                <br />
                <Forecast city={weatherInfo.city}/>
            </div>)
    } else {
        search();
        return("Loading...");
    }
}