import { ReactComponent as ToggleOff } from "./../../images/ToggleOff-light.svg";
import { Button, SmallText } from "./styled";

const ThemeButton = (color) => {
  return (
    <Button>
      <SmallText>DARK MODE OFF</SmallText>
      <ToggleOff fill={color}/>
    </Button>
  );
};

export default ThemeButton;