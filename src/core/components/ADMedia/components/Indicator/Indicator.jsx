import React from "react";
import { useMutations } from "hermes-io";
import ADSlideIndicator from "ADSlides/components/ADSlideIndicator";
import { mediaStore } from "ADMedia/store";
import { actions } from "ADMedia/reducer";
import { selectImage, setPaused } from "ADMedia/mutations";

export const Indicator = ({ storeId, images = [] }) => {
  const { onEvent, state } = useMutations({
    initialState: { isPaused: true, imageId: images[0].id },
    store: mediaStore,
    id: storeId,
  });

  onEvent(actions.SET_PAUSED, (isPaused) => ({ isPaused }));

  onEvent(actions.SELECT_IMAGE, ({ imageId }) => ({ imageId }));

  const handleSelectIndicator = (imageId) => {
    const store = mediaStore.get(storeId);
    const payload = {
      store,
      targets: [storeId],
      value: {
        imageId,
      },
    };
    selectImage(payload);
  };

  const handleToggleAnimationState = () => {
    const store = mediaStore.get(storeId);
    setPaused({ store, targets: [storeId], value: !state.isPaused });
  };

  return (
    <ADSlideIndicator
      duration="4000ms"
      isPaused={state.isPaused}
      selectedId={state.imageId}
      data={images}
      onClick={handleSelectIndicator}
      onToggleAnimationState={handleToggleAnimationState}
    />
  );
};