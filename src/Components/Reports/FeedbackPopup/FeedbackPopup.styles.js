import styled from "styled-components";
export const FeedbackWrap = styled.div`
  padding: 0 20px 20px;
  .title {
    display: block;
    font-size: 18px;
    line-height: 22px;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  table {
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    th,
    td {
      border-bottom: 1px solid #000;
      padding: 20px 0;
    }
    thead {
      th {
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
    tbody {
      td {
        text-align: center;
        font-size: 18px;
        line-height: 22px;
        font-weight: 300;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
`;
