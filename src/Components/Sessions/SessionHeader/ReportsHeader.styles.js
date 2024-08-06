import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 0 0 30px;
  gap: 10px;
  display: flex;
  .calendar {
    position: relative;
  }
  .sessionHolder {
    button {
      @media (min-width: 768px) {
        width: 202px;
      }
    }
  }
  .searchbar {
    width: 100%;
  }
`;
