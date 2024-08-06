import { StyledButton } from "./Button.styles";
import React from "react";
const Button = ({ color, onClick, children }) => {
    return (
      <StyledButton color={color} onClick={onClick}>
        {children}
      </StyledButton>
    );
  };
  
  export default Button;