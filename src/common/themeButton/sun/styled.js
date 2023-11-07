import styled, { css } from "styled-components";

export const StyledImg = styled.image`
  transition: 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translate(20px);
    `}
`;