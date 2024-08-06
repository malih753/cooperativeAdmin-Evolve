import styled from "styled-components";
export const ProfileWrap = styled.div`
  background-color: var(--primary-darkblue);
  color: var(--white);
  padding: 80px 0;
  height: 100vh;
  .container {
    max-width: 1574px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .profile {
      padding-bottom: 20px; 
    }
    form {
      width: 100%;
      max-width: 1205px;
      color: var(--white);
     .title{
      color: var(--white);
      text-align: center;
      margin-bottom: 30px;
      @media (min-width: 992px){
        margin-bottom: 80px;
      }
     }
     .subTitle{
      color: var(--white);
      text-align: left;
      margin-bottom: 30px;
      @media (min-width: 992px){
        margin-bottom: 50px;
      }
     }
      }
    }
  
`;
