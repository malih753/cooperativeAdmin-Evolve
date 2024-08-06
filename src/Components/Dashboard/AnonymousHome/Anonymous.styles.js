import styled from "styled-components";
export const AnalysisWrapper = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-bottom: 20px;
.lineChart, .barChart {
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 10px;
}
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    margin-bottom: 20px;
    strong {
      font-size: 18px;
      font-weight: 600;
      @media (min-width: 992px) {
        font-size: 18px;
      }
      @media (min-width: 1440px) {
        font-size: 23px;
      }
    }
    .filterWrap {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
     
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
      gap: 5px;
    }
    @media (min-width: 1200px) {
     
      gap: 15px;
    }
    .barChart {
      padding: 20px;
      display: block;
      margin: 0 auto;

      @media (min-width: 1360px) {
        flex-shrink: 0;
        width: 473px;
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
      .MuiPieArc-root{
        &:nth-child(1){
            fill:#f0ac28 !important;
        }
        &:nth-child(2){
            fill:#58a7e0 !important;
        }
      }
      .detailChart {
        @media (max-width:1200px){
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
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
  .lineChart {
    
    @media (min-width: 1360px) {
      flex-grow: 1;
      width: 100%;
      max-width: inherit;
    }
    /* max-width: 600px; */
    display: block;
    margin: 0 auto 20px;
    @media (min-width: 1200px){
      margin: 0 auto ;
    }
    .MuiChartsLegend-series {
      &:nth-child(1) {
        .MuiChartsLegend-mark {
          fill: #8fe2ff !important;
        }
      }
      &:nth-child(2) {
        .MuiChartsLegend-mark {
          fill: #009de2 !important;
        }
      }
      &:nth-child(3) {
        .MuiChartsLegend-mark {
          fill: #0057e7 !important;
        }
      }
    }
    .MuiLineElement-root {
      &.MuiLineElement-series-auto-generated-id-0 {
        stroke: #8fe2ff !important;
      }
      &.MuiLineElement-series-auto-generated-id-1 {
        stroke: #009de2 !important;
      }
      &MuiLineElement-series-auto-generated-id-2 {
        stroke: #0057e7 !important;
      }
    }
    .css-10vg0a6-MuiResponsiveChart-container {
        width: inherit !important;
    }
    .css-1evyvmv-MuiChartsSurface-root{
       @media (max-width: 576px){
        width: 100% !important;
        max-width: 320px !important;
       }
    }
  }
`;
