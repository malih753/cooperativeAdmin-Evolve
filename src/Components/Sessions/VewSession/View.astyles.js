import styled from "styled-components";
export const ViewWrap = styled.div`
.backarrow{
  cursor: pointer;
  margin-bottom: 20px;
}
  .view {
    width: 100%;
    .sessionDetail {
      display: block;
      margin: 0 auto;

      @media (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }
      .textHolder {
        .subTitle {
          color: var(--blue);
          font-size: 18px;
          line-height: 22px;
          @media (min-width:992px){
            font-size: 20px ;
            line-height: 24px;
          }
        }
        h2 {
          font-size: 20px;
          line-height: 24px;
          font-weight: 700;
          margin-bottom: 30px;
          @media (min-width: 1200px) {
            font-size: 28px;
            line-height: 32px;
          }
        }
        .flex {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          img {
            width: 20px;
            height: 20px;
          }
          span {
            font-size: 18px;
          line-height: 22px;
          @media (min-width:992px){
            font-size: 20px ;
            line-height: 24px;
          }

          }
        }
        .btns {
          margin-top: 20px;
          button{
            width: 190px;
          }
        }
      }
      .thumb {
        img {
          width: 740px;
          margin: 0 auto;
          padding-top: 20px;
          height: 468px;
          /* @media (min-width: 1440px) {
            width: 740px;
            height: 468px;
          } */
        }
      }
    }
    .sessionPara {
      margin: 20px 0;
      @media (min-width: 992px) {
        margin: 40px 0;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
    .Accordions {
      h4 {
        padding: 0 0 0 20px;
      }
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
`;
