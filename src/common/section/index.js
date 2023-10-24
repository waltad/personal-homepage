import {
  Wrapper,
  Title,
  StyledArticle,
  SmallText,
  StyledParagraf,
} from "./styled";

const Section = ({ photo, title, themeButton, prefix, description, hireMeButton }) => (
  <Wrapper>
    {photo}
    <StyledArticle>
      {themeButton}
      <SmallText>{prefix}</SmallText>
      <Title>{title}</Title>
      <StyledParagraf>
        {description}
      </StyledParagraf>
      {hireMeButton}
    </StyledArticle>
  </Wrapper>
);

export default Section;
