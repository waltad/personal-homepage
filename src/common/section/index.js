import { Wrapper, Image, Title } from "./styled";

const Section = ({ photo, title }) => {
  <Wrapper>
    <Image src={photo} alt="photo"/>
    <Title>{title}</Title>
  </Wrapper>
};

export default Section;