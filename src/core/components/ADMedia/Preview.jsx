import { useState } from "react";
import { useMutations } from "hermes-io";
import { selectProductThumbnail } from "mutations/products";
import { SELECT_PRODUCT_VARIATION } from "constants";
import store from "store/app";
import * as styles from "./style";

export const Preview = ({ thumbnails = [], id }) => {
  const [selectedId, setSelectedId] = useState(thumbnails[0].id);
  useMutations({
    events: [SELECT_PRODUCT_VARIATION],
    noUpdate: true,
    onChange: (value) => setSelectedId(value.id),
    store,
    id,
  });

  const handleSelectThumbnail = (thumbnail) => {
    selectProductThumbnail([id], thumbnail);
  };

  return thumbnails.map(({ id, src = "", description = "" }, index) => {
    return (
      <styles.Figure
        key={id}
        onClick={() => handleSelectThumbnail(thumbnails[index])}
      >
        <styles.Image
          selected={id === selectedId}
          width={60}
          height={60}
          src={src}
          alt={description}
        />
      </styles.Figure>
    );
  });
};
