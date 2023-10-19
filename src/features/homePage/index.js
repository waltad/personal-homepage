import HireMeButton from "../../common/hireMeButton";
import Section from "../../common/section";
import ThemeButton from "../../common/themeButton/index";
import myPhoto from "./../../images/myPhoto.jpg";
import { Container } from "./styled";

const HomePage = () => (
  <Container>
    <Section
      photo={myPhoto}
      themeButton={<ThemeButton />}
      prefix="THIS IS"
      title="Tadeusz Waluga"
      hireMeButton={<HireMeButton />}
    />
  </Container>
);

export default HomePage;
