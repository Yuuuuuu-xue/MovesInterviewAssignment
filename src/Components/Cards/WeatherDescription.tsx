import React from "react";
import { BaseWeatherDescription } from "../../types/weatherInterface";


const WeatherDescription: React.FC<BaseWeatherDescription> = ({
  clouds, humidity, pressure, wind_speed, rain, snow
}): React.ReactElement => {
  return (
    <div className="content">
      <p>
        <span>Cloudiness: </span>
        {clouds} %
      </p>
      <p>
        <span>Humidity: </span>
        {humidity} %
      </p>
      <p>
        <span>Pressure: </span>
        {pressure} hPa
      </p>
      <p>
        <span>Wind Speed: </span>
        {wind_speed} m/s
      </p> 
      <p>
        <span>Rain: </span>
        {rain ? rain : 0} mm
      </p>
      <p>
        <span>Snow: </span>
        {snow ? snow : 0} mm
      </p>
    </div>
  );
};

export default WeatherDescription;
