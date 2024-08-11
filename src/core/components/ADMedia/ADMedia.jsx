import { forwardRef } from "react";
import { useObservableStore } from "hermes-io";
import reducer from "./reducer/media";
import { ADCard } from "../ADCard/ADCard";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { mediaStore } from "./store/media";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";
import * as styles from "./styles";
import { uniqueId } from "lodash";

const { OUTLINED } = CARD_VARIANTS;

const Static = ({
  id,
  name,
  images,
  thumbnails,
  discount,
  price,
  sizes,
  upperRef,
  className,
  ...rest
}) => {
  return (
    <styles.Media ref={upperRef} className={`ad-media ${className}`} {...rest}>
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
};

const Dinamic = ({
  upperRef,
  discount,
  sizes = [],
  name = "",
  images = [],
  thumbnails = [],
  price,
  id = uniqueId("ad-media-"),
  ...rest
}) => {
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
  return <Static {...rest} upperRef={upperRef} />;
};

export const ADMedia = forwardRef(function ADMedia(
  { isServer = false, ...rest },
  ref,
) {
  return (
    <>
      {isServer ? (
        <Static {...rest} upperRef={ref} />
      ) : (
        <Dinamic {...rest} upperRef={ref} />
      )}
    </>
  );
});
