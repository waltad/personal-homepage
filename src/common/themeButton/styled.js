import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  border: none;
  background-color: transparent;
  height: 26px;
  cursor: pointer;
  align-self: flex-end;
`;

export const SmallText = styled.span`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({theme}) => theme.colors.chainGangGrey};
`;