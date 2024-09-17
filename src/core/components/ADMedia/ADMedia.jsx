import React from "react";
import _ from "lodash";
import { useObservableStore } from "hermes-io";
import { reducer } from "./reducer";
import { ADCard } from "../ADCard/ADCard";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { mediaStore } from "./store/media";
import { Footer } from "./components/Footer/Footer";
import * as styles from "./styles";

import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";
const { uniqueId } = _;

const { OUTLINED } = CARD_VARIANTS;

const Static = ({
  id,
  name,
  images,
  thumbnails,
  discount,
  price,
  sizes,
  className = "",
  ...rest
}) => {
  return (
    <styles.Media className={`ad-media ${className}`} {...rest}>
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
          <Footer name={name} price={price} sizes={sizes} discount={discount} />
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
  return (
    <Static
      id={id}
      name={name}
      sizes={sizes}
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
