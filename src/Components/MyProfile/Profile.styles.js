import styled from "styled-components";
export const ProfileWrapper = styled.div`
  width: 100%;
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    gap: 10px;
    flex: 1;
  }
  h2 {
    font-weight: 600;
  }
  .flexwrap {
    display: block;
    margin-bottom: 20px;
    @media (min-width: 1200px) {
      display: flex;
      align-items: start;
      gap: 5px;
    }
    @media (min-width: 1440px) {
      justify-content: space-between;
    }
  }
`;
