import React, {useState} from "react";
import { styled } from "@mui/material/styles"; 
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DailyWeatherData } from "../../../types/weatherInterface";
import moment from "moment";
import "../Card.scss";
import "./DailyWeatherCard.scss";

// Copy from material ui website
const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const DailyWeatherCard: React.FC<DailyWeatherData> = ({
  dt, temp, clouds, humidity, pressure, wind_speed, rain, snow, weather
}): React.ReactElement => {

  const [expand, setExpand] = useState(false);

  const handleClick = (): void => {
    setExpand(!expand); 
  }

  return(
    <Card className="card daily">
      <CardHeader
        title={moment(new Date(dt * 1000)).format('dddd')}
      />
      <CardContent>
        <Typography variant="h6">
          {weather[0].main}
        </Typography>

        <Typography paragraph>
          {weather[0].description}
        </Typography>

        <Typography variant="h6">
          Temperature:
        </Typography>

        <Typography paragraph>
          Day: {temp.day} &deg;C
          <br />
          Night: {temp.env} &deg;C
          <br />
          Max: {temp.max} &deg;C
          <br />
          Min: {temp.min} &deg;C
        </Typography>
      </CardContent>

      {/* The click button */}
      <CardActions disableSpacing>
        <ExpandMore className="icon-wrapper" expand={expand} onClick={handleClick} aria-expanded={expand} aria-label="show more data">
          <ExpandMoreIcon className="icon" />
        </ExpandMore>
      </CardActions>

      {/* Expand output */}
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <CardContent>
          <p>
            <span>Cloudiness: </span>
            {clouds} %
          </p>
          <p>
            <span>Humidity: </span>
            {humidity} %
          </p>
          <p>
            <span>Pressure: </span>
            {pressure} hPa
          </p>
          <p>
            <span>Wind Speed: </span>
            {wind_speed} m/s
          </p> 
          <p>
            <span>Rain: </span>
            {rain ? rain : 0} mm
          </p>
          <p>
            <span>Snow: </span>
            {snow ? snow : 0} mm
          </p>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DailyWeatherCard;