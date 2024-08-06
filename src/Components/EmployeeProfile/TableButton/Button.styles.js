import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => (props.color === 'green' ? 'green' : 'red')};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  img{
    width: 100px;
    height: 100px;
  }
`;