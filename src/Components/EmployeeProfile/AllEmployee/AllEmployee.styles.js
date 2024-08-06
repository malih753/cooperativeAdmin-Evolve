import styled from "styled-components";
export const AllEmployeeWrap = styled.div`
  .reasonwrap {
    text-align: center;
    background-color: #fff;
    position: relative;
    z-index: 11;
    padding: 10px;
    margin: -5px 0 0;
    strong {
      display: block;
      font-size: 17px;
      line-height: 20px;
      text-align: left;
      padding: 0 0 20px 20px;
    }
    textarea {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 551px;
      height: 153px;
      resize: none;
      border: 1px solid red;
      margin-bottom: 20px;
      &:focus {
        border: 1px solid red;
      }
    }
    button {
      width: 158px;
      background-color: red;
      color: white;
      padding: 10px 0;
    }
  }
`;
