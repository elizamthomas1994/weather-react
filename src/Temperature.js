import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    
    
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
        
    }
    if (unit==="celsius") {
    return(
        <div className="weather-temperature">
            <h3 className="current-weather">
                <span className="temp-number">{Math.round(props.celsius)}</span>
                <span className="units">
                    <a href="/" onClick={showCelsius} id="celsius-link">
                    °C
                    </a>{" "}
                    |
                    <a href="/" onClick={showFahrenheit} id="fahrenheit-link">
                    °F
                    </a>
                </span>
            </h3>
        </div>
    )
    } else {
        return(
        <div className="weather-temperature">
            <h3 className="current-weather">
                <span className="temp-number">{Math.round((props.celsius) * 9 / 5 + 32)}</span>
                <span className="units">
                    <a href="/" onClick={showCelsius} id="celsius-link">
                    °C
                    </a>{" "}
                    |
                    <a href="/" onClick={showFahrenheit} id="fahrenheit-link">
                    °F
                    </a>
                </span>
            </h3>
        </div>
    )
    }
}