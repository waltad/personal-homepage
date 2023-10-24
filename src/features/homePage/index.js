import HireMeButton from "../../common/hireMeButton";
import Section from "../../common/section";
import ThemeButton from "../../common/themeButton/index";
import myPhoto from "./../../images/myPhoto.jpg";
import { Container } from "./styled";

const HomePage = () => {
  return (
    <Container>
      <Section
        photo={myPhoto}
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
