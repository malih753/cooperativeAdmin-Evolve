import styled from "styled-components";
export const SessionTopicWrap = styled.div`
  .cardHolder {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    @media (min-width: 1330px) {
      flex-wrap: nowrap;
    }
    .card {
      cursor: pointer;
      width: 100%;
      max-width: 300px;
      background-color: var(--white);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      @media (min-width: 1440px) {
        max-width: 350px;
      }
      .thumb {
        margin-bottom: 20px;
      }
      .content {
        padding: 0 15px 20px;
      }
      .title {
        display: block;
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        margin-bottom: 20px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
      .logoWrap {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 20px;
        .logo {
          width: 60px;
          height: 60px;
        }
        .logotext {
          .name {
            display: block;
            font-size: 16px;
            line-height: 18px;
            font-weight: 500;
            @media (min-width: 992px) {
              font-size: 18px;
              line-height: 22px;
            }
          }
          .designation {
            display: block;
            font-size: 16px;
            line-height: 20px;
            color: var(--light-gray);
          }
        }
        .reviewWrap {
          display: flex;
          gap: 10px;

          align-items: center;
          .stars {
            width: 60px;
          }
          .review {
            color: var(--light-gray);
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
      .timeWrapper {
        display: flex;
        justify-content: space-between;
        .time,
        .date {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          line-height: 20px;
          img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
  .wrapperr {
    padding: 10px 10px 20px;
    .heading {
      margin-bottom: 20px;
      text-align: center;
      font-size: 18px;
        line-height: 22px;
        @media (min-width: 992px) {
          font-size: 24px;
          line-height: 28px;
        }
        @media (min-width: 1200px) {
          font-size: 30px;
          line-height: 34px;
        }
      h2 {
        font-size: 20px;
        line-height: 24px;
        @media (min-width: 992px) {
          font-size: 24px;
          line-height: 28px;
        }
        @media (min-width: 1200px) {
          font-size: 30px;
          line-height: 34px;
        }
      }
      p {
        color: var(--light-gray);
      }
    }
  }
`;
