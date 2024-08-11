import * as styles from "./styles";
import { useADMedia } from "../../";

export const Main = ({ images, id }) => {
  const image = useADMedia(images, id);
  return (
    <styles.Figure className="main-picture">
      <styles.Picture
        selected
        src={image.src}
        title={image.description}
        alt={image.description}
      />
    </styles.Figure>
  );
};
