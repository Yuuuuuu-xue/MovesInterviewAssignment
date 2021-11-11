import axios from "axios";
import { useEffect, useState } from "react"


interface BaseWeatherData {
  clouds: number, // Cloudiness %
  humidity: number, // %
  pressure: number, // hPa
  wind_speed: number, // metre/sec
  weather: WeatherDescription[], 
  dt: number // current time,
  rain?: number, // mm
  snow?: number, // mm
}


export interface CurrentWeatherData extends BaseWeatherData {
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


export const useFetchData = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data>();
  const [fullAddress, setFullAddress] = useState("Welcome");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  }

  const getData = async () => {
    try {
      const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=+${input}&key=${process.env.REACT_APP_GOOGLE_MAP_API}`)
      
      switch(res.data.status) {
        case "ZERO_RESULTS":
          alert("Invalid address");
          setInput("");
          break;
        case "OK":
          console.log(res);
          const longitude = res.data.results[0].geometry.location.lng;
          const latitude = res.data.results[0].geometry.location.lat;
          setFullAddress(res.data.results[0].formatted_address);
          const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=metric`)
          setData(weatherRes.data);
          // save the data
          window.localStorage.setItem("weatherAddress", JSON.stringify(res.data.results[0].formatted_address));
          window.localStorage.setItem("weatherData", JSON.stringify(weatherRes.data));
          break;
        default:
          console.error("Unexpected status" + res.data.status);
          setInput("");  
      }
    } catch (err) { 
      alert(err);
      setInput("");
      console.error(err);
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem("weatherData") !== null && window.localStorage.getItem("weatherAddress") !== null) {
      setFullAddress(JSON.parse(window.localStorage.getItem("weatherAddress") || ''));
      setData(JSON.parse(window.localStorage.getItem("weatherData") || ''));
    }
  }, [])

  return { data, input, handleInputChange, getData, fullAddress};
};
