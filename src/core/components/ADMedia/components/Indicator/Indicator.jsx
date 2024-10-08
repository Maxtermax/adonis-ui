import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import * as styles from "./styles";
import { mediaStore } from "ADMedia/store";
import { actions } from "ADMedia/reducer";

export const Indicator = ({ id, images = [] }) => {
  const containerRef = useRef(null);
  const { onEvent } = useMutations({
    noUpdate: true,
    store: mediaStore,
    id,
  });
  onEvent(actions.SELECT_IMAGE, ({ imageId }) => {
    const slices = containerRef.current.querySelectorAll(
      ".ad-media-indicator-slice",
    );
    for (const slice of slices) {
      const match = slice.id === `ad-media-indicator-${imageId}`; 
      if (match) {
        slice.classList.add('ad-media-indicator-selected');
      } else {
        slice.classList.remove('ad-media-indicator-selected');
      }
    }
  });

  return (
    <styles.Container ref={containerRef}>
      {images.map(({ id }) => (
        <styles.Slice
          key={id}
          className="ad-media-indicator-slice"
          id={`ad-media-indicator-${id}`}
        />
      ))}
    </styles.Container>
  );
};
