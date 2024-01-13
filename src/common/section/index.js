import {
  Wrapper,
  Title,
  Subtitle,
  StyledArticle,
  StyledBox,
  SmallText,
  StyledParagraf,
} from "./styled";

const Section = ({ photo, title, subtitle, themeButton, prefix, description, hireMeButton }) => (
  <Wrapper>
    {photo}
    <StyledArticle>
      {themeButton}
      <StyledBox>
        <SmallText>{prefix}</SmallText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <StyledParagraf>
          {description}
        </StyledParagraf>
        {hireMeButton}
      </StyledBox>
    </StyledArticle>
  </Wrapper>
);

export default Section;
