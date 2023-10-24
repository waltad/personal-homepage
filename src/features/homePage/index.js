import HireMeButton from "../../common/hireMeButton";
import Photo from "../../common/photo";
import Section from "../../common/section";
import ThemeButton from "../../common/themeButton/index";
import { Container } from "./styled";

const HomePage = () => {
  return (
    <Container>
      <Section
        photo={<Photo />}
        themeButton={<ThemeButton />}
        prefix="THIS IS"
        title="Tadeusz Waluga"
        description={
          <>
            👨🏻💻 I’m a passionate Frontend Developer in love with React,
            <br />
            currently looking for new job opportunities.
          </>
        }
        hireMeButton={<HireMeButton />}
      />
      <Section />
    </Container>
  );
};

export default HomePage;
