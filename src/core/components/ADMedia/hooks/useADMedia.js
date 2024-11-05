import React from "react";
import { useMutations } from "hermes-io";
import find from "lodash/find";
import { mediaStore } from "ADMedia/store";
import { selectImage } from "ADMedia/mutations/media";
import { actions } from "ADMedia/reducer";
import { getIsPaused } from "ADMedia/queries";
import { useIntersection } from "ADSlides/components/ADSlideIndicator/hooks/useIntersection";

export const useADMedia = (images, id, containerRef) => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: mediaStore,
    id,
  });

  const handleIntersection = (isSliding, entry) => {
    const store = mediaStore.get(id);
    const isRunning = !getIsPaused(store);
    if (isSliding && isRunning) return;
    const imageId = Number(entry.target.id);
    selectImage({
      store,
      targets: [id],
      value: {
        imageId,
      },
    });
  };

  useIntersection({
    itemsSelector: ".intersection-item",
    containerRef,
    onIntersection: handleIntersection,
  });

  onEvent(actions.SELECT_IMAGE, ({ imageId }) => {
    const image = find(images, ({ id }) => imageId === id);
    const container = containerRef.current;
    const node = container?.querySelector?.(`img[src="${image.src}"]`);
    if (!node) return;
    const { offsetLeft } = node;
    container.targetLeft = offsetLeft;
    container.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  });
};
