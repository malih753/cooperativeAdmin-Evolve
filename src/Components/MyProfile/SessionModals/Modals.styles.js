import styled from "styled-components";
export const ModalsWrap = styled.div`
  padding: 30px 20px 20px;
  text-align: center;
  .backicon {
    cursor: pointer;
    img {
      width: 45px;
      height: 45px;
    }
  }
  .backicon {
    position: relative;
    background: white;
    margin-top: -38px;
    z-index: 1;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    @media (min-width: 768pxpx) {
      font-size: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 30px;
    }
  }
  span {
    font-size: 20px;
    color: var(--gray-50);
    font-weight: 400;
    @media (min-width: 768pxpx) {
      font-size: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 30px;
    }
  }
  .para {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    p {
      color: var(--black);
      font-size: 18px;
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }
  .timeSlots {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    /* @media (min-width: 576px){
      grid-template-columns: repeat(2, 1fr);
    } */
    @media (min-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
    }
    button {
      padding: 12px 4px;
      font-size: 12px;
      @media (min-width: 768px) {
        padding: 12px 15px;
        font-size: 14px;
      }
    }
    .time {
      margin: 0 auto;
    }
  }
  button {
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .react-datepicker {
    position: absolute;
    top: 128px;
    z-index: 1;
    @media (min-width: 800px) {
      top: 80px;
      right: -2px;
    }
  }
  .textWrap {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      color: var(--black);
    }
    span {
      display: flex;
      gap: 20px;
      align-items: center;
      font-size: 16px;
      color: var(--black);
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
  .sessionBtn {
    margin: 30px 0 0;
    button {
      border-radius: 20px;
      margin: 0 auto;
    }
  }
  .schedule {
    .heading {
      padding-bottom: 30px;
      p {
        font-size: 18px;
        color: var(--gray-50);
        @media (min-width: 992px) {
          font-size: 25px;
        }
      }
    }
    .wrapperr {
      padding: 0 30px;
      text-align: left;
      span {
        font-size: 18px;
        color: var(--black);
        @media (min-width: 992px) {
          font-size: 20px;
        }
      }
      strong {
        font-size: 18px;
        padding-bottom: 20px;
        @media (min-width: 992px) {
          font-size: 25px;
        }
      }
      .flex {
        padding: 15px 0 0;
        display: flex;
        gap: 20px;
        align-items: center;
        color: var(--black);
        img {
          width: 21px;
          height: 21px;
        }
      }
    }
  }
  label {
    padding-bottom: 20px;
  }
  select {
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.37);
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    color: var(--body-text-25);
    position: relative;
    box-sizing: border-box;
    margin: 15px 0;
    padding: 8px 50px 8px 25px;
    outline: none;
  }
  .dropdown-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  .dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.37);
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    color: var(--body-text-25);
    position: relative;
    box-sizing: border-box;
    margin: 15px 0;
    padding: 12px 50px 12px 25px;
    outline: none;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 10;
    padding: 10px;
    .dropdown-option {
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
    }
  }
  .fieldWrap {
    display: flex;
    gap: 20px;
    align-items: baseline;
  }
  input {
    color: black;
  }
  .btn{
    display: flex;
    justify-content: center;
    button{
      border-radius: 25px;
    }
  }
`;
export const StyledButton = styled.button`
  background-color: ${({ bgClr }) => bgClr || "white"};
  color: var(--black);
  border: 1px solid var(--light-gray);
  overflow: hidden;
  border-radius: 0;
`;
