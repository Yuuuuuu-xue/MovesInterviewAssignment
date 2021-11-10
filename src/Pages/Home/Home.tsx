import { FC, ReactElement } from "react";
import "./Home.scss";
import { useFetchData } from "../../hooks/useFetchData"; 
import SearchInput from "../../Components/SearchInput/SearchInput";


interface Props {

}

const Home: FC<Props> = (): ReactElement => {

  const { fullAddress, input, handleInputChange, getData, data } = useFetchData(); 
  
  return (
    <div className="home">
      <h1 className="title">Home Page</h1>
      <SearchInput input={input} handleInputChange={handleInputChange} handleButtonClick={getData} />
      <h2 className="address">{fullAddress}</h2>
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

export default Home;
