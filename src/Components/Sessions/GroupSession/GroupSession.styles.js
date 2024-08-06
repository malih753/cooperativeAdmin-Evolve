import styled from "styled-components";
export const GroupWrapper = styled.div`
  .titleHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .cardHolder {
    display: block;
    @media (min-width: 1200px) {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
    .card {
      margin-bottom: 20px;
      display: flex;
      gap: 20px;
      width: 100%;
      border-radius: 25px;
      background-color: var(--white);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      border-left: 3px solid var(--blue);
      @media (min-width: 1200px) {
      }
      .thumb {
        img {
          height: 130px;
          width: 318px;
        }
      }

      .title {
        display: block;
        font-size: 15px;
        line-height: 19px;
        font-weight: 500;
        margin-bottom: 10px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }

      .logotext {
        .name {
          display: block;
          font-size: 15px;
          line-height: 18px;
          font-weight: 500;
          color: var(--light-gray);
        }
      }
    }
    .timeWrapper {
      display: flex;
      justify-content: space-between;
      /* margin-bottom: 10px; */
      @media (min-width: 576px){
        margin-bottom: 10px;
      }
      .time,
      .date {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 10px;
        line-height: 14px;
        color: var(--light-gray);
        @media (min-width: 576px){
            font-size: 16px;
            line-height: 20px;
        }
        img {
          width: 12px;
          height: 12px;
          @media (min-width: 576px){
            width: 16px;
            height: 16px;

          }
        }
      }
    }
  }
`;
