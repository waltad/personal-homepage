import { Wrapper, Image, Title, Button } from "./styled";

const Section = ({ photo, title, button }) => (
  <Wrapper>
    <Image src={photo} alt="photo" />
    <div>
      <Button>DARK MODE OFF {button}</Button>
      <Title>{title}</Title>
    </div>
  </Wrapper>
);

export default Section;