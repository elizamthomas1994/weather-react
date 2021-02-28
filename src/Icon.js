import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import './Icon.css';
 
const Icon = () => (
  <ReactAnimatedWeather
    icon={`CLEAR_DAY`}
    color={`yellow`}
    size={80}
    animate={true}
  />
);
 
export default Icon;