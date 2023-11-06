// import { ReactComponent as ToggleOff } from "./../../images/ToggleOff-light.svg";
import bg from "./../../images/bg.svg";
// import toggle from "./../../images/toggle.svg";
// import brightness from "./../../images/brightness.svg";
import Sun from "./sun";
import { Button, SmallText } from "./styled";
import { toggleSun } from "./sun/sunSlice";
import { useDispatch } from "react-redux";

const ThemeButton = () => {
  
  const dispatch = useDispatch();
  
  return (
    <Button onClick={() => dispatch(toggleSun())}>
      <SmallText>DARK MODE OFF</SmallText>
      <svg width="48" height="26" xmlns="http://www.w3.org/2000/svg">
        <image href={bg} x="0" y="0" width="48" height="26" />
        <Sun />
      </svg>
    </Button>
  );
};

export default ThemeButton;