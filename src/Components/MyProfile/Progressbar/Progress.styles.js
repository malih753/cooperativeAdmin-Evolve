import styled from "styled-components";
export const ProgressWrap = styled.div`
display: flex;
gap: 20px;
flex-grow: 1;
justify-content: center;
margin-top: 20px;
flex-direction: column;
@media (min-width: 576px){
 
  flex-direction: row;
}
@media (min-width: 992px){
  margin-top: 80px;
}
  .reviews {
    display: block;
    margin: 0 auto;
    strong,
    span {
      display: block;
    }
    strong {
      font-size: 35px;
      line-height: 39px;
      @media (min-width: 992px) {
        font-size: 45px;
        line-height: 49px;
      }
      @media (min-width: 1200px) {
        font-size: 50px;
        line-height: 54px;
      }
      @media (min-width: 1440px) {
        font-size: 64px;
        line-height: 68px;
      }
    }
    span {
      font-size: 16px;
      line-height: 20px;
      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  .progressWrap{
display: block;
margin: 0 auto;
  }
  .progressholder{
    display: flex;
    gap: 10px;
    align-items: baseline;
  }
`;
