import styled from "styled-components";
export const ReportedWrap =styled.div`
background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-bottom: 20px;
  strong {
    display: block;
    margin-bottom: 20px;
      font-size: 19px;
      font-weight: 600;
      @media (min-width: 992px) {
        font-size: 23px;
      }
    }
`;