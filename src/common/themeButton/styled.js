import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 160px;
  align-items: center;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  outline-offset: 8px;
`;

export const SmallText = styled.span`
  text-align: right;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.chainGangGrey};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;