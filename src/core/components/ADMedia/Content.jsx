import * as styles from "./style";
import { Preview } from './Preview';
import { Main } from './Main';

export const Content = ({ images = [], thumbnails = [], id }) => {
  return (
    <styles.Content className="content">
      <styles.Previews className="previews">
        <Preview thumbnails={thumbnails} id={id} />
      </styles.Previews>
      <Main id={id} images={images} />
    </styles.Content>
  );
};
