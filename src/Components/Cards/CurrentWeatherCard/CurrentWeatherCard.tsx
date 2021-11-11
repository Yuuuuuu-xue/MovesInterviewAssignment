import React from "react";
import {CurrentWeatherData} from "../../../types/weatherInterface";
import moment from "moment";
import "../Card.scss";
import "./CurrentWeatherCard.scss";
import WeatherDescription from "../WeatherDescription";


interface Props extends CurrentWeatherData {
  fullAddress: string
}


const CurrentWeatherCard: React.FC<Props> = ({
  fullAddress, weather, dt, temp, ...others
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
          <WeatherDescription {...others} />
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherCard;