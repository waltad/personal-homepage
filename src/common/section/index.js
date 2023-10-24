import {
  Wrapper,
  Image,
  Title,
  StyledArticle,
  SmallText,
  StyledParagraf,
} from "./styled";

const Section = ({ photo, title, themeButton, prefix, description, hireMeButton }) => (
  <Wrapper>
    <Image src={photo} alt="photo" />
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
