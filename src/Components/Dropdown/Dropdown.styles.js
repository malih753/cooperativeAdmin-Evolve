import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
z-index: 1;
  .dropdown-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid var(--light-gray);
    cursor: pointer;
    border-radius: 30px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    min-width: 230px;

    a {
      display: block;
      padding: 10px 15px;
      text-decoration: none;
      color: #333;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;
