import styled from "styled-components";
export const ExperienceWrap = styled.div`
width: 100%;
  .info {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    color: var(--gray-50);
  }
  .textareaHolder {
    min-height: 80px;
  }
  .bton{
        background-color: var(--blue);
        padding: 10px 20px;
        display: block;
        margin-left: auto;
        font-size: 25px;
        color: var(--white);
        border-radius: 50%;
      }
  .inputHolder {
    input {
      color: var(--black);
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
    max-width: 468px;
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
    padding: 8px 50px 8px 25px;
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
  }

  .dropdown-option {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
  }

  .dropdown-option:last-child {
    margin-bottom: 0;
  }

  .checkbox {
    margin-right: 10px;
  }
  .fieldWrap{
    display: block;
    gap: 20px;
    @media (min-width: 992px){
      display: flex;
    }
  }
  .btn{
    display: flex;
    justify-content: center;
  }
  .bookedPopup{
    padding: 0 15px 15px;
    margin-top: -5px;
    position: relative;
    z-index: 1;
  }
  .popupWrap{
    padding: 15px;
    background-color: #fff;
    border: 1px solid #00A2C9;
    text-align: center;
    strong, span{
      display: block;
      margin-bottom: 15px;
    }
    .title{
      color: #00A2C9;
      font-size: 25px; 
      line-height: 29px;
      font-weight: 600;
    }
    .subTitle{
      font-size: 18px; 
      line-height: 22px;
    }
    .name{
      font-size: 18px; 
      line-height: 22px;
      color: var(--light-gray);
    }
    .thumb{
      img{
        display: block;
        margin: 0 auto 20px;
      }
    }
    .timeWrap{
      display: flex;
      justify-content: space-evenly;
      .time{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px; 
        line-height: 22px;
      }
    }
  }
`;
