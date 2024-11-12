import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import find from "lodash/find";
import { mediaStore } from "ADMedia/store";
import { selectImage } from "ADMedia/mutations/media";
import { actions } from "ADMedia/reducer";
import { useIntersection } from "ADSlides/components/ADSlideIndicator/hooks/useIntersection";

export const useADMedia = (images, id, containerRef) => {
  const isTransitioningRef = useRef(false);
  const { onEvent } = useMutations({
    noUpdate: true,
    store: mediaStore,
    id,
  });

  onEvent(actions.SELECT_IMAGE, ({ imageId }) => {
    const image = find(images, ({ id }) => imageId === id);
    const container = containerRef.current;
    const node = container?.querySelector?.(`img[src="${image.src}"]`);
    if (!node) return;
    const { offsetLeft } = node;
    isTransitioningRef.current = offsetLeft === 0;
    container.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  });

  const handleIntersection = (_, entry) => {
    const store = mediaStore.get(id);
    const isTransitioning = isTransitioningRef.current;
    if (isTransitioning) {
      isTransitioningRef.current = false;
      return;
    }
    const imageId = Number(entry.target.id);
    selectImage({
      store,
      targets: [id],
      value: {
        imageId,
      },
    });
    isTransitioningRef.current = false;
  };

  useIntersection({
    itemsSelector: ".intersection-item",
    containerRef,
    onIntersection: handleIntersection,
  });
};
