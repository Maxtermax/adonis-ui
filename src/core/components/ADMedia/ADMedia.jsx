import React from "react";
import _ from "lodash";
import { useObservableStore } from "hermes-io";
import { reducer } from "./reducer";
import { ADCard } from "../ADCard/ADCard";
import { Content } from "./components/Content/Content";
import { mediaStore } from "./store/media";
import { Footer } from "./components/Footer/Footer";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";
import * as styles from "./styles";

const { uniqueId } = _;

const { SHARP } = CARD_VARIANTS;

const Static = ({
  id,
  name,
  images,
  thumbnails,
  discount,
  price,
  notAvailables,
  className = "",
  cardProps = {},
  ...rest
}) => {
  return (
    <styles.Media className={`ad-media ${className}`} {...rest}>
      <ADCard
        variant={SHARP}
        gap={DIMENSIONS.none}
        shape={SHAPES.rounded}
        Header={() => null}
        Content={() => (
          <Content
            id={id}
            discount={discount}
            images={images}
            thumbnails={thumbnails}
          />
        )}
        Footer={() => (
          <Footer
            id={id}
            name={name}
            price={price}
            notAvailables={notAvailables}
            discount={discount}
          />
        )}
        {...cardProps}
      />
    </styles.Media>
  );
};

const Dinamic = ({
  upperRef,
  discount,
  notAvailables = [],
  name = "",
  images = [],
  thumbnails = [],
  price,
  id = uniqueId("ad-media-"),
  ...rest
}) => {
  const data = {
    thumbnails,
    notAvailables,
    size: null,
    isPaused: true,
    discount,
    price,
    name,
    id,
    images,
  };
  useObservableStore(id, data, reducer, mediaStore);

  return (
    <Static
      id={id}
      name={name}
      notAvailables={notAvailables}
      thumbnails={thumbnails}
      discount={discount}
      images={images}
      upperRef={upperRef}
      {...rest}
    />
  );
};

export const ADMedia = function ADMedia({ ...rest }, ref) {
  const isServer = typeof document === "undefined";
  return (
    <>
      {isServer ? (
        <Static {...rest} upperRef={ref} />
      ) : (
        <Dinamic {...rest} upperRef={ref} />
      )}
    </>
  );
};
