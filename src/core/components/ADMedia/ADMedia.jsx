import { forwardRef } from "react";
import { useObservableStore } from "hermes-io";
import reducer from "ADMedia/reducer/media";
import { ADCard } from "components/ADCard/ADCard";
import { Header } from "ADMedia/components/Header/Header";
import { Content } from "ADMedia/components/Content/Content";
import { Footer } from "ADMedia/components/Footer/Footer";
import { mediaStore } from "ADMedia/store/media";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";
import * as styles from "ADMedia/styles";
import { uniqueId } from "lodash";

const { OUTLINED } = CARD_VARIANTS;

export const ADMedia = forwardRef(function ADMedia(
  {
    discount,
    sizes = [],
    className = "",
    name = "",
    images = [],
    thumbnails = [],
    price,
    id = uniqueId("ad-media-"),
    ...rest
  },
  ref,
) {
  const data = {
    thumbnails,
    sizes,
    discount,
    price,
    name,
    id,
    images,
  };

  useObservableStore(id, data, reducer, mediaStore);

  return (
    <styles.Media ref={ref} className={`ad-media ${className}`} {...rest}>
      <ADCard
        elevation={DIMENSIONS.regular}
        variant={OUTLINED}
        gap={DIMENSIONS.none}
        shape={SHAPES.rounded}
        Header={() => <Header discount={discount} />}
        Content={() => (
          <Content id={id} images={images} thumbnails={thumbnails} />
        )}
        Footer={() => (
          <Footer name={name} discount={discount} price={price} sizes={sizes} />
        )}
      />
    </styles.Media>
  );
});
