import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 0 0 30px;
  gap: 10px;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  .calendar {
    position: relative;
  }
  .sessionHolder {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: baseline;
    @media (min-width: 576px) {
      flex-wrap: nowrap;
    }
    .react-datepicker {
      position: absolute;
      left: -34%;
      z-index: 99;
    }
    button {
        width: 140px;
      display: flex;
      align-items: center;
      gap: 15px;
      color: var(--gray-light);
      padding: 10px 20px;
      font-size: 14px;
      @media (min-width: 992px){
        width: 150px;
        gap: 30px;
      }
    }

  }
  .export{
    button{
        gap: 20px;
        padding: 10px 20px;
    }
  }
`;
