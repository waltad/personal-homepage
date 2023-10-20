import {
  Wrapper,
  Image,
  Title,
  ThemeButton,
  StyledArticle,
  SmallText,
  StyledParagraf,
  HireMeButton,
} from "./styled";

const Section = ({ photo, title, themeButton, prefix, description, hireMeButton }) => (
  <Wrapper>
    <Image src={photo} alt="photo" />
    <StyledArticle>
      <ThemeButton>
        <SmallText>DARK MODE OFF</SmallText>
        {themeButton}
      </ThemeButton>
      <SmallText>{prefix}</SmallText>
      <Title>{title}</Title>
      <StyledParagraf>
        {description}
      </StyledParagraf>
      <HireMeButton>
        {hireMeButton}
      </HireMeButton>
    </StyledArticle>
  </Wrapper>
);

export default Section;
