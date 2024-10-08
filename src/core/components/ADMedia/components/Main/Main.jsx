import React, { useRef } from "react";
import { useADMedia } from "../../";
import * as styles from "./styles";

export const Main = ({ images, id }) => {
  const containerRef = useRef(null);
  useADMedia(images, id, containerRef);

  return (
    <styles.Figure ref={containerRef} className="main-picture">
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
