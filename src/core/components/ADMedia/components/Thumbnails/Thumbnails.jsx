import React from "react";
import { useMutations } from "hermes-io";
import { FIGURE_VARIANTS, DIRECTIONS } from "constants";
import ADTooltip from "ADTooltip";
import * as mutations from "ADMedia/mutations/media";
import { Figure } from "ADMedia/components/Figure/styles";
import { mediaStore } from "ADMedia/store";
import { actions } from "ADMedia/reducer";
import { Image } from "./styles";

export const Thumbnails = ({ data = [], id }) => {
  const { state, onEvent } = useMutations({
    initialState: { selectedId: data[0].id },
    store: mediaStore,
    id,
  });

  onEvent(actions.SELECT_IMAGE, ({ imageId }) => {
    const thumbnail = data.find(({ id }) => id === imageId);
    return { selectedId: thumbnail.id };
  });

  const handleSelectThumbnail = (thumbnail) => {
    const store = mediaStore.get(id);
    mutations.selectImage({
      store,
      targets: [id],
      value: {
        id,
        imageId: thumbnail.belongsTo,
      },
    });
  };

  return data.map(({ id, src = "", description = "" }, index) => {
    return (
      <ADTooltip key={id} text={description} direction={DIRECTIONS.RIGHT}>
        <Figure
          onClick={() => handleSelectThumbnail(data[index])}
          selected={id === state.selectedId}
          variant={FIGURE_VARIANTS.MINI}
        >
          <Image
            selected={id === state.selectedId}
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
