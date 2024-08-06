import styled from "styled-components";
export const SidebarWrap = styled.div`
  height: calc(100vh - 134px);
  overflow: hidden;
  position: relative;
  /* padding: 20px 20px; */
  &:hover {
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }
  &:hover {
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(245, 126, 42, 0.15);
    }
  }
  .sidebarHolder{
    ul{
      li{
        padding: 0 0 40px 30px;
        font-size: 20px;
        a{
          display: flex;
          gap: 20px;
          align-items: center;
          img{
            width: 31px;
            height: 31px;
          }
          transition: all .3s ease;
          &:hover{
            color: var(--blue);
          }
          &.active {
          background-color :var(--blue);
          color: var(--white);
          padding: 10px 0 10px 10px;
          border-radius: 12px;
        }
        }
      }
    }
  }
  
`;
