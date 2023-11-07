import bg from "./../../images/bg.svg";
import Sun from "./sun";
import { Wrapper, Button, SmallText } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsThemeDark, toggleTheme } from "./themeSlice";
import { Wrapper } from "../section/styled";

const ThemeButton = () => {
  const isThemeDark = useSelector(selectIsThemeDark);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <SmallText>DARK MODE {isThemeDark ? "ON" : "OFF"}</SmallText>
        <svg width="48" height="26" xmlns="http://www.w3.org/2000/svg">
          <image href={bg} x="0" y="0" width="48" height="26" />
          <Sun />
        </svg>
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;