import React from "react";
import { Input, FormControl, InputLabel, InputAdornment, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchInput.scss";

interface Props {
  input: string,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleButtonClick: () => void
}

const SearchInput: React.FC<Props> = ({input, handleInputChange, handleButtonClick}): React.ReactElement => {
  return (
    <div className="search">
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel className="input-label" htmlFor="input-search">City Name or Postal Code</InputLabel>
        <Input
          className="input-field"
          id="input-search"
          value={input}
          onChange={handleInputChange}
          placeholder="Please enter the city name or postal code"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className="search-icon"
                aria-label="toggle password visibility"
                edge="end"
                onClick={handleButtonClick}
              >
                <SearchIcon /> 
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>   
    </div>
  )
};

export default SearchInput;

