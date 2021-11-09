import React from "react";
import { useFetchData } from "../hooks/useFetchData";

interface Props {

}

const Data: React.FC<Props> = () => {
  
  const { data, getData, latitude, longitude, setLongitude, setLatitude} = useFetchData("-94.04", "33.44");
  
  const handleLongitudeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLongitude(event.target.value);
  }

  const handleLatitudeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLatitude(event.target.value)
  }

  return (
    <div>
      <h1>Data Page</h1>
      <label>Latitude:</label>
      <input type="text" value={latitude} onChange={handleLatitudeInput} />
      <label>Longitude:</label>
      <input type="text" value={longitude} onChange={handleLongitudeInput} />
      <button type="button" onClick={getData}>Get Data</button>
      {data &&
        <>
          <p>{data.lon}</p>
          <p>{data.lat}</p>
          <p>{JSON.stringify(data.current)}</p>
          <p>{JSON.stringify(data.daily)}</p>
        </>
      }
    </div>
  )
};

export default Data;
