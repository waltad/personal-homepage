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

const Section = ({ photo, title, themeButton, prefix, hireMeButton }) => (
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
        👨🏻💻 I’m a passionate Frontend Developer in love with React, <br /> currently looking for new job opportunities.
      </StyledParagraf>
      <HireMeButton>
        {hireMeButton}
      </HireMeButton>
    </StyledArticle>
  </Wrapper>
);

export default Section;
