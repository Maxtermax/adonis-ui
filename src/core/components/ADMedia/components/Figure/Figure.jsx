import React, { useRef } from "react";
import { useADMedia } from "ADMedia/hooks/useADMedia";
import * as styles from "./styles";

export const Figure = ({ images, id }) => {
  const containerRef = useRef(null);
  useADMedia(images, id, containerRef);

  return (
    <styles.Figure className="ad-media__figure" ref={containerRef}>
      {images.map((item) => (
        <styles.Picture
          key={item.id}
          src={item.src}
          id={item.id}
          title={item.description}
          alt={item.description}
        />
      ))}
    </styles.Figure>
  );
};
