import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastData from "./ForecastData";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="Forecast row">
                <ForecastData data={forecast.list[0]}/>
                <ForecastData data={forecast.list[1]}/>
                <ForecastData data={forecast.list[2]}/>
                <ForecastData data={forecast.list[3]}/>
                <ForecastData data={forecast.list[4]}/>
            </div>
        )
    } else {
        let key = `845420caf0be768c5c5bd5aebfc06b76`;
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${key}&units=metric`;
        axios.get(url).then(handleForecast);
        
        return (null)
    }
}