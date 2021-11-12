import axios from "axios";
import { useEffect, useState } from "react";
import { Data } from "../types/weatherInterface";


export const useFetchData = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<Data>();
  const [fullAddress, setFullAddress] = useState("Welcome");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  }

  const getData = () => {
    setLoading(true); 
    setData(undefined);
    // Clear the local storage 
    window.localStorage.removeItem("weatherAddress");
    window.localStorage.removeItem("weatherData");

    
    // If input is empty
    if (!input) {
      setInput("");
      setError("Input cannot be empty");
      setLoading(false); 
      alert("Input cannot be empty");
      return;
    } else {
      setError("");
    }

    let longitude: number;
    let latitude: number;
    let formatAddress: string; 

    // convert the address to longitude and latitude by using google map api
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=+${input}&key=${process.env.REACT_APP_GOOGLE_MAP_API}`)
    .then(res => {
      if (res.data.status === "ZERO_RESULTS") {
        throw new Error("Invalid address");
      } else if (res.data.status === "OK") {
        console.log(res);
        formatAddress = res.data.results[0].formatted_address;
        longitude = res.data.results[0].geometry.location.lng;
        latitude = res.data.results[0].geometry.location.lat;
        setFullAddress(res.data.results[0].formatted_address);    
      } else {
        throw new Error("Unexpected state");
      }
    })
    // get the actual weather data
    .then(() => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=metric`))
    .then(weatherRes => {
      setData(weatherRes.data);
      // save the data
      window.localStorage.setItem("weatherAddress", JSON.stringify(formatAddress));
      window.localStorage.setItem("weatherData", JSON.stringify(weatherRes.data));
      setError("");
    })
    .catch(err => {
      setError(err.message);
      alert(err);
    })
    .finally(() => {
      setLoading(false);
      setInput("");
    });
  }

  useEffect(() => {
    if (window.localStorage.getItem("weatherData") !== null && window.localStorage.getItem("weatherAddress") !== null) {
      setFullAddress(JSON.parse(window.localStorage.getItem("weatherAddress") || ''));
      setData(JSON.parse(window.localStorage.getItem("weatherData") || ''));
    }
  }, [])

  return { data, input, handleInputChange, getData, fullAddress, loading, error};
};
