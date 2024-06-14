import * as styles from "./styles";
import { Thumbnails } from "ADMedia/components/Thumbnails/Thumbnails";
import { Main } from "ADMedia/components/Main/Main";

export const Content = ({ images = [], thumbnails = [], id }) => {
  return (
    <styles.Content className="content">
      <styles.Previews className="previews">
        <Thumbnails data={thumbnails} id={id} />
      </styles.Previews>
      <Main id={id} images={images} />
    </styles.Content>
  );
};
