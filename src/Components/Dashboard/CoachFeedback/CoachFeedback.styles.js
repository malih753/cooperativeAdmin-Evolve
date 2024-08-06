import styled from "styled-components";
export const CoachWrap = styled.div`
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
      align-items: center;
      flex-wrap: wrap;
      @media (min-width: 576px) {
        flex-wrap: nowrap;
      }
      @media (min-width: 992px) {
        gap: 10px;
      }
      button {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        border: 1px solid #ddd;
      }
    }
    span {
      color: var(--gray-30);
    }
  }
.lineChart{
    width: 100%;
}
  .css-q3wnbe-MuiResponsiveChart-container {
    width: 100% !important;
    max-width: 800px !important;
    margin: 0 auto;
    svg{
        width: inherit !important;
    }
  }
  .MuiBarElement-series-auto-generated-id-0 {
    fill: #ffa5a5 !important ;
  }
  .MuiBarElement-series-auto-generated-id-1 {
    fill: #787878 !important ;
  }
  .MuiBarElement-series-auto-generated-id-2 {
    fill: #009de2 !important ;
  }
  .MuiChartsLegend-series {
    &:nth-child(1) {
      .MuiChartsLegend-mark {
        fill: #ffa5a5 !important ;
      }
    }
    &:nth-child(2) {
      .MuiChartsLegend-mark {
        fill: #787878 !important ;
      }
    }
    &:nth-child(3) {
      .MuiChartsLegend-mark {
        fill: #009de2 !important ;
      }
    }
  }
`;
