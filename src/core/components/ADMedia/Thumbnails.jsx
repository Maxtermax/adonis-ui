import { useState } from "react";
import { FIGURE_VARIANTS } from 'constants';
import * as mutations from "mutations/products";
import * as styles from "./style";

export const Thumbnails = ({ data = [], productId }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const handleSelectThumbnail = (thumbnail) => {
    mutations.selectImage([productId], {
      productId,
      imageId: thumbnail.belongsTo,
    });
    setSelectedId(thumbnail.id);
  };

  return data.map(({ id, src = "", description = "" }, index) => {
    return (
      <styles.Figure
        key={id}
        onClick={() => handleSelectThumbnail(data[index])}
        selected={id === selectedId}
        variant={FIGURE_VARIANTS.MINI}
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
