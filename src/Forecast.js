import React from "react";
import "./Forecast.css";

export default function Forecast() {
return(<div className="five-day">
                    <div className="symbol row">
                        <div className="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png"
                            alt="clouds"
                            id="forecast-one"/>
                        </div>
                        <div className="col" >
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-two"/>
                        </div>
                        <div className="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-three"/>
                        </div>
                        <div className="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-four"/>
                        </div>
                        <div className="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-five"/>
                        </div>
                    </div>
                    <div className="Day row">
                        <div className="col" id="time-one">0:00</div>
                        <div className="col" id="time-two">3:00</div>
                        <div className="col" id="time-three">6:00</div>
                        <div className="col" id="time-four">9:00</div>
                        <div className="col" id="time-five">12:00</div>
                    </div>
                    <div className="Temp row">
                        <div className="col" id="temp-one">7°</div>
                        <div className="col" id="temp-two">1°</div>
                        <div className="col" id="temp-three">0°</div>
                        <div className="col" id="temp-four">0°</div>
                        <div className="col" id="temp-five">1°</div>
                    </div>
</div>);
}