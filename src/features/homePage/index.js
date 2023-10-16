import Section from "../../common/section";
import myPhoto from "./../../images/myPhoto.jpg";
import { Container } from "./styled";

const HomePage = () => (
  <Container>
    <Section
      photo={myPhoto}
      title="Tadeusz Waluga"
    />
  </Container>
);

export default HomePage;
