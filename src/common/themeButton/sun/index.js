import toggle from "./../../../images/toggle.svg";
import brightness from "./../../../images/brightness.svg";
import { StyledImg } from "./styled";
import { useSelector } from "react-redux";
import { selectIsMoveRight } from "./sunSlice";

const Sun = () => {
  const isMoveRight = useSelector(selectIsMoveRight);
  
  return (
  <svg width="48" height="26" xmlns="http://www.w3.org/2000/svg">
    <StyledImg isMoveRight={isMoveRight} href={toggle} x="3" y="3" />
    <StyledImg isMoveRight={isMoveRight} href={brightness} x="6" y="6" />
  </svg>
)};

export default Sun;