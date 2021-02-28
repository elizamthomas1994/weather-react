import React from "react";
import axios from "axios";
import './Form.css';

function handleResponse(response) {
  console.log(response.data);
}

let apiKey= `845420caf0be768c5c5bd5aebfc06b76`;
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
axios.get(apiUrl).then(handleResponse);


export default function Form() {
  return (
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
  );
}