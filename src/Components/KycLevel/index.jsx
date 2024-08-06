import React from "react";
import { StyledKycLevel } from "./KycLevel.styles";

const KycLevel = ({ level , bg , height }) => {
  return <StyledKycLevel $level={level} $bg={bg} $height={height}> 
  </StyledKycLevel>;
};

export default KycLevel;
