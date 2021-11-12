import React from "react";
import "./StateCard.scss"; 

interface Props {
  info: string
  color: string
};

const StateCard: React.FC<Props> = ({info, color}): React.ReactElement => {
  return (
    <div className="stateCard">
      <h5 className={color}>{info}</h5>
    </div>
  )
}; 

export default StateCard;
