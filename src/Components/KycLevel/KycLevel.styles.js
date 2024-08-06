import styled from "styled-components";

export const StyledKycLevel = styled.div`
  width: 100%;
  width: 250px;
  position: relative;
  /* height: 10px; */
  background: #EAEAEA;
  overflow: hidden;
  height: ${({ $height}) => $height? $height : "10px"};
  @media  (min-width: 768px){
    width: 300px;
    height: ${({ $height}) => $height? $height : "20px"};
  }
  @media  (min-width: 992px){
    width: 370px;
    height: ${({ $height}) => $height? $height : "30px"};
  }
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ $level }) => $level + "%"};
    background: ${({ $bg }) =>$bg };
  }
`;
