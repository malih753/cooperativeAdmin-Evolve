import styled, { css } from "styled-components";

export const TableWrap = styled.div`
  width: 100%;
  table {
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  table tr {
    ${(props) =>
      props.border &&
      css`
        border-bottom: 1px solid #ddd;
      `}
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
    word-wrap: break-word;
    overflow: hidden;
  }

  table th {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;

    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  table td {
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;

    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      display: block;
      text-align: right;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }

  img {
    margin-left: auto;
    @media (min-width: 600px) {
      margin: 0 auto;
    }
  }

  .imgWrap {
    display: flex;
    justify-content: center;

    @media (min-width: 600px) {
      align-items: center;
    }
    
  }
  .imag {
      img {
        width: 50px !important;
        height: 50px;
        margin-top: -15px;
        margin-right: 10px;

        @media (min-width: 600px) {
          margin-top: 0;
        }

        @media (min-width: 992px) {
          width: 100px !important;
          height: 100px;
        }
      }
    }
`;
