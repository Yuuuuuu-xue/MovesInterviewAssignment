import React from "react";
import {CurrentWeatherData} from "../../../hooks/useFetchData";
import moment from "moment";
import "../Card.scss";
import "./CurrentWeatherCard.scss";


interface Props extends CurrentWeatherData {
  fullAddress: string
}


const CurrentWeatherCard: React.FC<Props> = ({
  fullAddress, clouds, humidity, pressure, wind_speed, weather, dt, rain, snow, temp
}): React.ReactElement => {
  return (
    <div className="card current">
      <h1 className="address">{fullAddress}</h1>
      <h1 className="time">{moment(new Date(dt * 1000)).format('MMM Do YY')}</h1>
      <div className="grid">
        <div className="left">
          <h5 className="weather">{weather[0].main}</h5>
          <h5 className="weatherDescription">{weather[0].description}</h5>
          <h5 className="temperature">{temp} &deg;C</h5>
        </div>
        <div className="right">
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
            {wind_speed} metre/sec
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
      </div>
    </div>
  )
}

export default CurrentWeatherCard;