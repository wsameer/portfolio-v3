import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 20px;
  padding: 0.7rem 1.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #f4eeeb;
  background: #fe5029;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
    background: #2d3031;
    border: 2px solid #fe5029;
	`}
`;
