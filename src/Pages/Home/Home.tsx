import { FC, ReactElement } from "react";
import "./Home.scss";
import { useFetchData } from "../../hooks/useFetchData"; 
import SearchInput from "../../Components/SearchInput/SearchInput";
import CurrentWeatherCard from "../../Components/Cards/CurrentWeatherCard/CurrentWeatherCard";
import DailyWeatherCard from "../../Components/Cards/DailyWeatherCard/DailyWeatherCard";
import {v4 as uuid} from "uuid"; 

interface Props {

}

const Home: FC<Props> = (): ReactElement => {

  const { fullAddress, input, handleInputChange, getData, data } = useFetchData(); 
  
  return (
    <div className="home">
      <h1 className="title">Home Page</h1>
      <SearchInput input={input} handleInputChange={handleInputChange} handleButtonClick={getData} />

      {data &&
        <>     
          <CurrentWeatherCard fullAddress={fullAddress} {...data.current} />
          {/* <p>{data.lon}</p>
          // <p>{data.lat}</p>
          // <p>{JSON.stringify(data.current)}</p> */}
          {/* <p>{JSON.stringify(data.daily)}</p> */}
          {data.daily.map(d => (
            <DailyWeatherCard key={uuid()} {...d} />  
          ))}
        </>
      }
    </div>
    
  )
};

export default Home;
