import styled from "styled-components";
export const ProfileWrapper = styled.div`
width: 100%;
.heading{
    display: block;
    font-size: 20px; 
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    padding: 0 10px;
}
.cardsHolder{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    @media (min-width: 576px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1440px){
        grid-template-columns: repeat(4, 1fr);
    }
}
  .card {
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    .thumb{
      img{
        height: 211px;
        width: 100%;
      }
    }
    .textWrapper {
        padding: 10px;
        min-height: 90px;
      strong,
      span {
        display: block;
      }
      .textWrap{
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 10px;
        .title {
        font-size: 18px;
        line-height: 22px;
        @media (min-width: 992px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
      .subTitle{
        font-size: 16px; 
        line-height: 20px;
        font-weight: 400;
      }
      }
      .session{
        padding: 10px 0;
        span{
            color: var(--light-gray);
            font-size: 16px;
            line-height: 20px;
        }
      }
      .reviewHolder{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .review{
            img{
                width: 70px;
                height: 15px;
                margin-bottom: 10px;
            }
            span{
                font-size: 12px; 
                color: var(--light-gray);
            }
        }
      }
    }
  }
`;
