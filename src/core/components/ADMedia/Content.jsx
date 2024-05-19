import * as styles from "./style";
import { Thumbnails } from "./Thumbnails";
import { Main } from "./Main";

export const Content = ({ images = [], thumbnails = [], productId }) => {
  return (
    <styles.Content className="content">
      <styles.Previews className="previews">
        <Thumbnails data={thumbnails} productId={productId} />
      </styles.Previews>
      <Main productId={productId} images={images} />
    </styles.Content>
  );
};
