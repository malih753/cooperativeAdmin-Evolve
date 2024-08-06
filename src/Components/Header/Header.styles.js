import styled, { css } from "styled-components";
export const HeaderWrap = styled.div`
  padding: 10px 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    @media (max-width: 576px) {
      padding: 0;
    }
    .logos {
      display: flex;
      align-items: end;
      justify-content: start;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (min-width: 1200px) {
          flex-direction: row;
        }
      }
      .logo {
        width: 120px;
        
        @media (min-width: 768px) {
          width: 200px;
        }
        @media (min-width: 1200px) {
          width: 270px;
        }
        @media (min-width: 1440px) {
          width: 305px;
        }
      }
      .mainLogo {
        width: 63px;
        height: 22px;
        @media (min-width: 768px) {
          width: 80px;
          height: 29px;
        }
        @media (min-width: 1200px) {
          width: 105px;
        }
      }
    }
  }
 
  .heading{
    display: flex;
    align-items:center;
    gap: 5px;
    @media (min-width: 768px){
      gap: 20px;
    }
    img{
      width: 35px;
      height: 35px;
      @media (min-width: 768px){
        width: 50px;
        height: 50px;
      }
    }
    .title{
      margin: 0;
      font-size: 13px; 
      line-height: 17px;
      @media (min-width: 576px){
        font-size: 15px; 
      line-height: 19px;
      }
      @media (min-width: 992px){
        font-size: 20px; 
        line-height: 24px;
      }
      @media (min-width: 992px){
        font-size: 25px; 
      line-height: 29px;
      }
    }
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: black;
  border: 1px solid var(--gray-30);
  padding: 5px 5px 0 5px;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
    font-size: 16px;
  }
`;
