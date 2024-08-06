import styled from "styled-components";
export const SessionWrapper = styled.div`
  .sessionwrap {
    padding: 0 10px;
    .titleHolder {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }
    .cardHolder {
      display: grid;
      justify-content: center;
    
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      .card {
        margin: 0 auto;
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
            img{
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
`;
