import React, { useEffect } from "react";
import StateCard from "../Cards/StateCard/StateCard";

interface Props {

}

const NotFound: React.FC<Props> = (): React.ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }, [])
  

  return (
    <StateCard info="Opppps ... Page Not Found" color="white" />
  )
};

export default NotFound;