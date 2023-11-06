import bg from "./../../images/bg.svg";
import Sun from "./sun";
import { Button, SmallText } from "./styled";
import { selectIsMoveRight, toggleSun } from "./sun/sunSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const isMoveRight = useSelector(selectIsMoveRight);

  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(toggleSun())}>
      <SmallText>DARK MODE {isMoveRight ? "ON" : "OFF"}</SmallText>
      <svg width="48" height="26" xmlns="http://www.w3.org/2000/svg">
        <image href={bg} x="0" y="0" width="48" height="26" />
        <Sun />
      </svg>
    </Button>
  );
};

export default ThemeButton;