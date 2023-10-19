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
  grid-template-rows: auto 1fr;
`;
export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-align: left;
`;

export const Button = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  border: none;
  background-color: transparent;
  height: 26px;
  cursor: pointer;
  justify-self: end;
`;