import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: #ffd82b;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', 'Arial';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      font-size: 10px;
      background-color: #e6e6e6;
    `}
  ${({ active }) =>
    active &&
    css`
      border: 3px solid black;
    `}
`;
export default Button;
