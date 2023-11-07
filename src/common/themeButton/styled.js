import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-self: flex-end;
  column-gap: 12px;
  align-items: center;
  border: none;
  background: none;
  /* height: 26px; */
  color: inherit;
  cursor: pointer;
  outline-offset: 8px;
`;

export const SmallText = styled.span`
  width: 99px;
  text-align: right;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({theme}) => theme.colors.chainGangGrey};
`;