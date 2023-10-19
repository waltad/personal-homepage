import { Wrapper, Image, Title, Button, StyledArticle } from "./styled";

const Section = ({ photo, title, button }) => (
  <Wrapper>
    <Image src={photo} alt="photo" />
    <StyledArticle>
      <Button>DARK MODE OFF {button}</Button>
      <Title>{title}</Title>
    </StyledArticle>
  </Wrapper>
);

export default Section;