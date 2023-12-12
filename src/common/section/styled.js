import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 116px;
  max-width: 1216px;
  display: flex;
  gap: 72px;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-align: left;
  align-self: left;
`;

export const SmallText = styled.span`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.chainGangGrey};
`;

export const StyledParagraf = styled.p`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.chainGangGrey};
`;
