import React from "react";
import "./Forecast.css";

export default function Forecast() {
return(<div class="five-day">
                    <div class="symbol row">
                        <div class="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png"
                            alt="clouds"
                            id="forecast-one"/>
                        </div>
                        <div class="col" >
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-two"/>
                        </div>
                        <div class="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-three"/>
                        </div>
                        <div class="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-four"/>
                        </div>
                        <div class="col">
                            <img src="http://openweathermap.org/img/wn/03d@2x.png" 
                            alt="clouds"
                            id="forecast-five"/>
                        </div>
                    </div>
                    <div class="Day row">
                        <div class="col" id="time-one">0:00</div>
                        <div class="col" id="time-two">3:00</div>
                        <div class="col" id="time-three">6:00</div>
                        <div class="col" id="time-four">9:00</div>
                        <div class="col" id="time-five">12:00</div>
                    </div>
                    <div class="Temp row">
                        <div class="col" id="temp-one">7°</div>
                        <div class="col" id="temp-two">1°</div>
                        <div class="col" id="temp-three">0°</div>
                        <div class="col" id="temp-four">0°</div>
                        <div class="col" id="temp-five">1°</div>
                    </div>
</div>);
}