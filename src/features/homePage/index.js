import Section from "../../common/section";
import ThemeButton from "../../common/themeButton/index";
import myPhoto from "./../../images/myPhoto.jpg";
import { Container } from "./styled";

const HomePage = () => (
  <Container>
    <Section
      photo={myPhoto}
      button={<ThemeButton />}
      title="Tadeusz Waluga"
    />
  </Container>
);

export default HomePage;
