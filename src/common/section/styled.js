import styled from "styled-components";

export const Wrapper = styled.section`
  width: 63%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Image = styled.img`
  grid-column: 1;
  max-width: 384px;
  height: auto;
  border-radius: 50%;
`;

export const StyledArticle = styled.article`
  grid-column: 2;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto 1fr;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-align: left;
`;

export const ThemeButton = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  border: none;
  background-color: transparent;
  height: 26px;
  cursor: pointer;
  justify-self: end;
`;

export const SmallText = styled.span`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({theme}) => theme.colors.chainGangGrey};
`;

export const StyledParagraf = styled.p`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
  color: ${({theme}) => theme.colors.chainGangGrey};
`;

export const HireMeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: start;

  &:hover {
    stroke: #8CC2FF;
    stroke-width: 3px;
    stroke-linejoin: round;
    stroke-opacity: 0.5;
  }
`;