import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-self: flex-start;
  fill: red;

  &:hover {
    fill-opacity: 80%;
    stroke: #8CC2FF;
    stroke-width: 3px;
    stroke-linejoin: round;
    stroke-opacity: 0.5;
  }
`;