import styled from "styled-components";
export const AnalysisWrapper = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-bottom: 20px;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    strong {
      font-size: 19px;
      font-weight: 600;
      @media (min-width: 992px) {
        font-size: 23px;
      }
    }
    .filterWrap {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      @media (min-width: 992px) {
        gap: 20px;
      }
      button {
        margin-top: 10px;
        width: 205px;
        display: flex;
        gap: 10px;
        border: 1px solid #ddd;
        &:nth-child(1) {
          width: 100px;
        }
        @media (min-width: 576px){
            width: 215px;
        }
      }
    }
    span {
      color: var(--gray-30);
    }
  }
  .holder {
    display: block;
    @media (min-width: 1200px) {
      display: flex;
      justify-content: center;
    }
    .barChart {
      padding: 0 0 0 20px;
      display: block;
      margin: 0 auto;

      @media (min-width: 1360px) {
        flex-shrink: 0;
      }
      .css-66gjpw-MuiResponsiveChart-container {
        /* height: 338px !important; */
        width: 280px !important;
        display: block;
        margin: 0 auto;
        @media (min-width: 1440px) {
          width: 350px !important;
        }
      }
      .detailChart {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        @media (min-width: 400px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 600px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1600px) {
          grid-template-columns: repeat(2, 1fr);
        }
        .textWrap {
          padding-bottom: 20px;
          display: flex;
          gap: 4px;
          &:nth-child(1) {
            .color {
              background-color: #58a7e0;
            }
          }
          &:nth-child(2) {
            .color {
              background-color: #f0ac28;
            }
          }
          &:nth-child(3) {
            .color {
              background-color: #ffa5a5;
            }
          }
          &:nth-child(4) {
            .color {
              background-color: #8fe2ff;
            }
          }
          &:nth-child(5) {
            .color {
              background-color: #f0d028;
            }
          }
          .color {
            width: 18px;
            height: 18px;

            @media (min-width: 1440px) {
              width: 22px;
              height: 22px;
            }
          }
          span {
            font-size: 14px;
            @media (min-width: 1440px) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .wrap {
    @media (min-width: 1360px) {
      flex-grow: 1;
      width: 100%;
      max-width: inherit;
    }
    max-width: 600px;
    display: block;
    margin: 0 auto;
    /* gap: 10px;
    @media (min-width: 992px) {
      display: flex;
    } */
    .progress {
      background-color: var(--white);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      padding: 20px;
      margin-bottom: 20px;
    }
    .hours {
      display: block;
      @media (min-width: 630px) {
        display: flex;
        gap: 10px;
      }
      .card {
        background-color: var(--white);
        margin-bottom: 20px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
        padding: 15px;
        .cardHead {
          display: flex;
          justify-content: space-between;
          gap: 5px;
          align-items: center;
          padding-bottom: 20px;
        }
      }
    }
    .progressWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      margin-bottom: 5px;
      @media (min-width: 992px) {
        margin-bottom: 30px;
      }
      .title {
        width: 204px;
        margin-bottom: 0;
        @media (max-width: 992px) {
          width: inherit;
        }
      }
    }
  }
  .textWrap {
    margin-bottom: 0;
    @media (max-width: 1440px) {
      font-size: 14px !important;
    }
  }
`;
