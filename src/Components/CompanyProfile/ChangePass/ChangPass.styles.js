import styled from "styled-components";
export const ChangePassWrap = styled.div`
.flex{
  display: flex;
  gap: 5px;
}
input{
    color:black;
    &::placeholder{
        color:black;
    }
}
  .h3 {
    display: block;
    font-size: 16px;
    line-height: 20px;
    &:nth-child(2){
      color: var(--gray-30);
    }
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
   
  }
  .forgot{
    a{
      display:block;
    color:var(--blue);
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 24px;
    }
    }
  }
  .btn{
    margin-top:10px;
   display:flex;
   justify-content:end;
  }
  .text-content{
    .h3{
      margin-bottom: 50px;
    }
  }
`;
