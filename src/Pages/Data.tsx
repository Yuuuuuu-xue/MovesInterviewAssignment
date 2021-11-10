import React from "react";
import { useFetchData } from "../hooks/useFetchData";

interface Props {

}

const Data: React.FC<Props> = () => {
  
  const { data, getData, input, handleInputChange} = useFetchData();

  return (
    <div>
      <h1>Data Page</h1>
      <label>City:</label>
      <input type="text" value={input} onChange={handleInputChange} />
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
