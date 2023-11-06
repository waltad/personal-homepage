import styled, { css } from "styled-components";

export const StyledSvg = styled.svg`
  transition: 0.3s;

  ${({ isMoveRight }) =>
    isMoveRight &&
    css`
      transform: translate(20px);
    `}
`;

export const StyledImg = styled.image`
  transition: 0.3s;

  ${({ isMoveRight }) =>
    isMoveRight &&
    css`
      transform: translate(20px);
    `}
`;