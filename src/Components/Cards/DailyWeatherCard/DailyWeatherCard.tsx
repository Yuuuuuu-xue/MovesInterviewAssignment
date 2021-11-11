import React from "react";
import { styled } from "@mui/material/styles"; 
import { Card, CardHeader, CardActions, Collapse, IconButton, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DailyWeatherData } from "../../../types/weatherInterface";
import moment from "moment";

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
  dt, 
}): React.ReactElement => {
  return(
    <Card sx={{maxWidth: 345}}>
      <CardHeader
        title={moment(new Date(dt * 1000)).format('dddd')}
      />
    </Card>
  );
};

export default DailyWeatherCard;