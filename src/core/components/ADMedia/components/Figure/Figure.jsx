import React, { useRef } from "react";
import { useADMedia } from "ADMedia/hooks/useADMedia";
import ADLoader from "ADLoader";
import * as styles from "./styles";

function Picture({ id, src, description }) {
  const loaderRef = useRef(null);
  return (
    <>
      <styles.Picture
        className="intersection-item"
        key={id}
        src={src}
        id={id}
        title={description}
        alt={description}
      />
      <ADLoader
        className="ad-media__picture--loading"
        variant="dots"
        ref={loaderRef}
      />
    </>
  );
}

export const Figure = ({ images, id }) => {
  const containerRef = useRef(null);
  useADMedia(images, id, containerRef);
  const handleScroll = () => {
    const { scrollLeft, targetLeft } = containerRef.current;
    if (scrollLeft === targetLeft) delete containerRef.current.targetLeft;
  };

  return (
    <styles.Figure
      onScroll={handleScroll}
      className="ad-media__figure"
      ref={containerRef}
    >
      {images.map((item, index) => (
        <Picture {...item} key={index} />
      ))}
    </styles.Figure>
  );
};
