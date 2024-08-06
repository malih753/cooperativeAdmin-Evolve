import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 0 0 10px;
  gap: 5px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    flex-wrap: nowrap;
    gap: 10px;
  }

  .calendar {
    position: relative;
    button {
      padding: 9px 12px;
    }
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
      margin-bottom: 10px;
      width: 90px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--gray-light);
      padding: 10px 20px;
      font-size: 14px;
      @media (min-width: 992px) {
        width: 150px;
        gap: 30px;
      }
    }
  }
  .searchbar {
    .sc-cPiJYC{
    padding: 0;}
    @media (min-width: 576px) {
      width: 100%;
    }
  }
`;
