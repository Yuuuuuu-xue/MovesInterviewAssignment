import { FC, ReactElement } from "react";
import "./Home.scss";
import { useFetchData } from "../../hooks/useFetchData"; 
import SearchInput from "../../Components/SearchInput/SearchInput";
import CurrentWeatherCard from "../../Components/Cards/CurrentWeatherCard/CurrentWeatherCard";
import DailyWeatherCard from "../../Components/Cards/DailyWeatherCard/DailyWeatherCard";
import {v4 as uuid} from "uuid"; 
import { Box } from "@mui/material";

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
          <Box sx={{display: 'flex', justifyContent: "center", flexWrap: "wrap"}}>
            {data.daily.map(d => (
              <DailyWeatherCard key={uuid()} {...d} />  
            ))}          
          </Box>
        </>
      }
    </div>
    
  )
};

export default Home;
