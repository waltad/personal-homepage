import myPhoto from "./../../images/myPhoto.jpg";
import { StyledPhoto } from "./styled";

const Photo = () => {
  return (
    <StyledPhoto src={myPhoto} alt="photo" />
  );
};

export default Photo;