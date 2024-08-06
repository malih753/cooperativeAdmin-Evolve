import styled from "styled-components";
export const CompanyWrapper = styled.div`
  padding: 10px 15px 50px;
  .profile {
    margin-bottom: 30px;
    @media (min-width: 992px) {
      margin-bottom: 50px;
    }
    .bgimg {
      cursor: pointer;
      img{
        width: 100%;
        max-height: 337px;
      }
    }
    .logo {
      cursor: pointer;
      margin-top: -46px;
      @media (min-width: 576px) {
        margin-top: -60px;
      }
      @media (min-width: 992px) {
        margin-top: -100px;
      }
      @media (min-width: 1600px) {
        margin-top: -145px;
      }
      img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        @media (min-width: 576px) {
          width: 100px;
          height: 100px;
        }
        @media (min-width: 992px) {
          width: 170px;
          height: 170px;
        }
        @media (min-width: 1240px) {
          width: 230px;
          height: 230px;
        }
        @media (min-width: 1600px) {
          width: 264px;
          height: 264px;
        }
      }
    }
  }
  .InfosysLimited {
    .h1 {
      margin-bottom: 10px;
      display: block;
      @media (min-width: 600px) {
        margin-bottom: 20px;
      }
    }
    .listed {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      li {
        font-size: 16px;
        line-height: 20px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
  .about {
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .Subscription {
   
  }
  .h2 {
    margin-bottom: 20px;
    display: block;
  }
`;
