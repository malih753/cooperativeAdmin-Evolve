import styled from "styled-components";
export const ProfileHold = styled.div`
  margin-bottom: 20px;
  .backimg{
    margin-bottom: 20px;
  }
  .bgImg {
    width: 100%;

    position: relative;
    img {
      width: 100%;
      height: 300px;
      border-radius: 20px;
    }
  }
  .logo {
    position: relative;
    z-index: 1;
    margin-top: -70px;
    margin-left: 20px;
    margin-bottom: 30px;

    img {
      border-radius: 50%;
      width: 130px;
      height: 130px;
      @media (min-width: 576px) {
        margin-top: -100px;
        width: 170px;
        height: 170px;
      }
      @media (min-width: 992px) {
        width: 238px;
        height: 238px;
      }
    }
  }
  .textxWrap {
   display: block;
    padding: 0 20px 15px;

    @media (min-width: 576px) {
      padding-bottom: 30px;
      display: flex;
    justify-content: space-between;
    align-items: center;
    }
    @media (min-width: 768px) {
      padding-bottom: 30px;
    }
    .text{
      margin-bottom: 20px;
    }
    p,
    span,
    strong {
      font-size: 17px;
      font-weight: 400;
      color: var(--black);
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }
  .btn {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    button {
      width: 152px;
      @media (min-width: 768px) {
        width: 208px;
      }
    }
  }
`;
