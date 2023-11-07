import toggle from "./../../../images/toggle.svg";
import brightness from "./../../../images/brightness.svg";
import { StyledImg } from "./styled";
import { useSelector } from "react-redux";
import { selectIsThemeDark } from "../themeSlice";

const Sun = () => {
  const isThemeDark = useSelector(selectIsThemeDark);
  
  return (
  <svg width="48" height="26" xmlns="http://www.w3.org/2000/svg">
    <StyledImg moveToRight={isThemeDark} href={toggle} x="3" y="3" />
    <StyledImg moveToRight={isThemeDark} href={brightness} x="6" y="6" />
  </svg>
)};

export default Sun;