import axios from "axios";
import { useState } from "react"


interface BaseWeatherData {
  clouds: number, // Cloudiness %
  humidity: number, // %
  pressure: number, // hPa
  wind_speed: number, // metre/sec
  weather: WeatherDescription[], 
  dt: number // current time
}


interface CurrentWeatherData extends BaseWeatherData {
  temp: number
}

interface Temperature {
  day: number,
  env: number,
  max: number,
  min: number
}

interface DailyWeatherData extends BaseWeatherData{
  temp: Temperature,
}

interface WeatherDescription {
  main: string,
  description: string
}

interface Data {
  lat: number,
  lon: number,
  current: CurrentWeatherData,
  daily: DailyWeatherData[]
}


export const useFetchData = (inputLongitude: string, inputLatitude: string) => {
  const [longitude, setLongitude] = useState(inputLongitude);
  const [latitude, setLatitude] = useState(inputLatitude);
  const [data, setData] = useState<Data>();
  const getData = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=metric`)
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return { data, longitude, latitude, setLatitude, setLongitude, getData};
};
