import React, { useLayoutEffect, useRef, useState } from "react";
import ADCard from "ADCard";
import ADText from "ADText";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import ADSlideIndicator from "ADSlideIndicator";
import { useIntersection } from "ADSlides/components/ADSlideIndicator/hooks/useIntersection";
import formatCurrency from "../../../utils/formatCurrency";
import * as styles from "./styles";

const Indicator = ({
  data = [],
  isPaused = true,
  onToggleAnimationState,
  containerRef,
}) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  useLayoutEffect(() => {
    const container = containerRef.current;
    const node = container?.querySelector?.(`[id="${selectedId}"]`);
    if (node) {
      const { offsetLeft } = node;
      container.targetLeft = offsetLeft;
      container.scrollTo({
        left: offsetLeft,
        behavior: "smooth",
      });
    }
  }, [selectedId, containerRef]);

  useIntersection({
    containerRef,
    isPaused,
    onIntersection: (isSliding, entry) => {
      if (isSliding && !isPaused) return;
      console.log({ isSliding, isPaused });
      setSelectedId(entry.target.id);
    },
  });

  return (
    <styles.Indicator>
      <ADSlideIndicator
        isPaused={isPaused}
        onToggleAnimationState={onToggleAnimationState}
        onClick={(id) => setSelectedId(id)}
        selectedId={selectedId}
        data={data}
      />
    </styles.Indicator>
  );
};

const Content = ({ images = [] }) => {
  const containerRef = useRef(null);
  const [isPaused, setPaused] = useState(true);
  const handleScroll = () => {
    const { scrollLeft, targetLeft } = containerRef.current;
    if (scrollLeft === targetLeft) delete containerRef.current.targetLeft;
  };
  const play = () => setPaused(false);

  const pause = () => setPaused(true);

  return (
    <styles.Container onScroll={handleScroll} ref={containerRef}>
      {images.map((image) => (
        <styles.Image
          className="intersection-item"
          id={image.id}
          key={image.src}
          src={image.src}
          alt={image.alt}
          onMouseLeave={pause}
          onMouseEnter={play}
        />
      ))}
      <Indicator
        onToggleAnimationState={() => setPaused(!isPaused)}
        isPaused={isPaused}
        containerRef={containerRef}
        data={images}
      />
    </styles.Container>
  );
};

export const ADProductCard = ({ id, name, discount, price, images = [] }) => {
  return (
    <ADCard
      id={id}
      elevation="none"
      gap="high"
      shape="sharp"
      variant="contained"
      Content={() => <Content images={images} />}
      Footer={() => (
        <styles.Footer>
          <ADText value={name} variant="title" />

          {discount ? (
            <ADFlex direction="row" alignItems="flex-start" fullWidth gap={0.5}>
              <ADText
                value={formatCurrency(discount.before)}
                variant="text"
                lineThrough
              />
              /
              <ADText value={formatCurrency(discount.now)} variant="text" />
            </ADFlex>
          ) : (
            <ADText value={formatCurrency(price)} variant="text" />
          )}
          <styles.Button>
            <ADButton onClick={() => {}} variant="sharp">
              <p>Ver</p>
            </ADButton>
          </styles.Button>
        </styles.Footer>
      )}
    />
  );
};
