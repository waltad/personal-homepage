import {
  Wrapper,
  Image,
  Title,
  Button,
  StyledArticle,
  SmallText,
  StyledParagraf,
} from "./styled";

const Section = ({ photo, title, button, prefix }) => (
  <Wrapper>
    <Image src={photo} alt="photo" />
    <StyledArticle>
      <Button>
        <SmallText>DARK MODE OFF</SmallText>
        {button}
      </Button>
      <SmallText>{prefix}</SmallText>
      <Title>{title}</Title>
      <StyledParagraf>
        👨🏻💻 I’m a passionate Frontend Developer in love with React, <br /> currently looking for new job opportunities.
      </StyledParagraf>
    </StyledArticle>
  </Wrapper>
);

export default Section;
