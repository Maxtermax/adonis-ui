import { forwardRef } from "react";
import * as styles from "./style";
import { ADCard } from "components/ADCard/ADCard";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

const { OUTLINED } = CARD_VARIANTS;

export const ADMedia = forwardRef(function ADMedia({
  discount,
  sizes = [],
  className = "",
  name = "",
  images = [],
  thumbnails = [],
  price,
  id,
  ...rest
}, ref) {
  return (
    <styles.Media ref={ref} className={`ad-media ${className}`} {...rest}>
      <ADCard
        elevation={DIMENSIONS.regular}
        variant={OUTLINED}
        gap={DIMENSIONS.none}
        shape={SHAPES.rounded}
        Header={() => <Header discount={discount} />}
        Content={() => (
          <Content productId={id} images={images} thumbnails={thumbnails} />
        )}
        Footer={() => (
          <Footer
            name={name}
            discount={discount}
            productId={id}
            price={price}
            sizes={sizes}
          />
        )}
      />
    </styles.Media>
  );
});
