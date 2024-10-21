import React, { useLayoutEffect, useRef, useState } from "react";
import ADButton from "ADButton";
import ADText from "ADText";
import ADSlideIndicator from "./components/ADSlideIndicator";
import { useIntersection } from "ADSlides/components/ADSlideIndicator/hooks/useIntersection";
import * as styles from "./styles";

export const ADSlides = ({ data = [] }) => {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(data[0]?.id);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const node = container.querySelector(`[id='${selectedId}']`);
    const { offsetLeft } = node;
    container.targetLeft = offsetLeft;
    containerRef.current.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  }, [selectedId]);

  useIntersection({
    containerRef,
    onIntersection: (isSliding, entry) => {
      if (isSliding) return;
      const imageId = entry.target.id;
      setSelectedId(imageId);
    },
  });

  const handleClick = (id) => setSelectedId(id);

  const handleScroll = () => {
    const { scrollLeft, targetLeft } = containerRef.current;
    if (scrollLeft === targetLeft) delete containerRef.current.targetLeft;
  };

  return (
    <styles.Wrapper>
      <styles.Container
        className="ad-slides"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {data.map(({ id, src = "", subtitle = "", title = "", link = "" }) => (
          <styles.Item
            image={src}
            id={id}
            className="ad-slides__item intersection-item"
            key={id}
          >
            <div className="slide-background" />
            <styles.Content>
              <ADText
                className="ad-slides__item__title"
                variant="fancy"
                value={title}
              />
              <ADText
                className="ad-slides__item__subtitle"
                variant="subtitle"
                value={subtitle}
              />
              {link ? (
                <styles.Link
                  className="ad-slides__item __link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ADButton className="ad-slides__item__button" variant="sharp">
                    Ver más
                  </ADButton>
                </styles.Link>
              ) : null}
            </styles.Content>
          </styles.Item>
        ))}
      </styles.Container>
      <styles.IndicatorWrapper>
        {data.length === 1 ? null : (
          <ADSlideIndicator
            onClick={handleClick}
            selectedId={selectedId}
            data={data}
          />
        )}
      </styles.IndicatorWrapper>
    </styles.Wrapper>
  );
};
