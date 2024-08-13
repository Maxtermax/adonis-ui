import { useState } from "react";
import { FIGURE_VARIANTS, DIRECTIONS } from "constants";
import ADTooltip from "ADTooltip";
import * as mutations from "ADMedia/mutations/media";
import { Figure } from "ADMedia/components/Main/styles";
import { mediaStore } from "ADMedia/store/media";
import { Image } from "./styles";

export const Thumbnails = ({ data = [], id }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const handleSelectThumbnail = (thumbnail) => {
    const store = mediaStore.get(id);
    mutations.selectImage(store, [id], {
      id,
      imageId: thumbnail.belongsTo,
    });
    setSelectedId(thumbnail.id);
  };

  return data.map(({ id, src = "", description = "" }, index) => {
    return (
      <ADTooltip
        key={id}
        contrast
        text={description}
        direction={DIRECTIONS.RIGHT}
      >
        <Figure
          onClick={() => handleSelectThumbnail(data[index])}
          selected={id === selectedId}
          variant={FIGURE_VARIANTS.MINI}
        >
          <Image
            selected={id === selectedId}
            width={60}
            height={60}
            src={src}
            alt={description}
          />
        </Figure>
      </ADTooltip>
    );
  });
};
