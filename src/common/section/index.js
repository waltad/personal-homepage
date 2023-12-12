import {
  Wrapper,
  Title,
  StyledArticle,
  StyledBox,
  SmallText,
  StyledParagraf,
} from "./styled";

const Section = ({ photo, title, themeButton, prefix, description, hireMeButton }) => (
  <Wrapper>
    {photo}
    <StyledArticle>
      {themeButton}
      <StyledBox>
        <SmallText>{prefix}</SmallText>
        <Title>{title}</Title>
        <StyledParagraf>
          {description}
        </StyledParagraf>
        {hireMeButton}
      </StyledBox>
    </StyledArticle>
  </Wrapper>
);

export default Section;
