import React, { useEffect } from "react";
import { useMutations } from "hermes-io";
import find from "lodash/find";
import { mediaStore } from "ADMedia/store";
import { selectImage } from "ADMedia/mutations/media";
import { actions } from "ADMedia/reducer";

export const useADMedia = (images, id, container) => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: mediaStore,
    id,
  });

  useEffect(() => {
    const observers = [];
    const pictures = container.current.querySelectorAll("img");
    for (const picture of pictures) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const store = mediaStore.get(id);
              selectImage(store, [id], { imageId: Number(entry.target.id) });
              break;
            }
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(picture);
      observers.push(observer);
    }
    return () => {
      for (const observer of observers) observer.disconnect();
    };
  }, []);

  onEvent(actions.SELECT_IMAGE, ({ imageId }) => {
    const image = find(images, ({ id }) => imageId === id);
    const node = container?.current?.querySelector?.(`img[src="${image.src}"]`);
    node?.scrollIntoView?.({
      block: "start",
      behavior: "smooth",
    });
  });
};
