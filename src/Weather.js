import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`);
    }

    let apiKey=`845420caf0be768c5c5bd5aebfc06b76`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return(
    <h2>Hello from Weather</h2>
    );
}