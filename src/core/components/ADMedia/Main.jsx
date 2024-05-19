import * as styles from "./style";
import { useADMedia } from "./hooks/useADMedia";

export const Main = ({ images, productId }) => {
  const image = useADMedia(images, productId);
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
