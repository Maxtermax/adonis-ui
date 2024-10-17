import React, { useEffect } from "react";
import { useMutations } from "hermes-io";
import find from "lodash/find";
import { mediaStore } from "ADMedia/store";
import { selectImage } from "ADMedia/mutations/media";
import { actions } from "ADMedia/reducer";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery";

export const useADMedia = (images, id, container) => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: mediaStore,
    id,
  });

  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  useEffect(() => {
    const observers = [];
    const pictures = container.current.querySelectorAll("img");
    for (const picture of pictures) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const store = mediaStore.get(id);
              selectImage({
                store,
                targets: [id],
                value: {
                  imageId: Number(entry.target.id),
                },
              });
              break;
            }
          }
        },
        { threshold: isMobile ? 0.5 : 1 },
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
    node.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
};
