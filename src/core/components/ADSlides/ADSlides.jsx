import React, { useState } from "react";
import ADButton from "ADButton";
import * as styles from "./styles";

const Indicator = ({ data = [], selectedId = "", onClick }) => {
  return (
    <styles.IndicatorWrapper className="ad-slides__indicator-wrapper">
      {data.map(({ id }, index) => (
        <styles.Indicator
          className="ad-slides__indicator"
          onAnimationEnd={() =>
            onClick(data[index + 1]?.id ?? data[0]?.id)
          }
          isSelected={id === selectedId}
          onClick={() => onClick(id)}
          key={id}
        />
      ))}
    </styles.IndicatorWrapper>
  );
};

export const ADSlides = ({ data = [] }) => {
  const [selectedId, setSelectedId] = useState(data[0]?.id);
  const handleClick = (id) => setSelectedId(id);

  return (
    <styles.Container className="ad-slides">
      {data.map(({ id, src = "", title = "", link = "" }) => (
        <styles.Item
          image={src}
          isSelected={selectedId === id}
          className="ad-slides__item"
          key={id}
        >
          <styles.Link
            className="ad-slides__item __link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <ADButton variant="sharp">{title}</ADButton>
          </styles.Link>

          <Indicator
            onClick={handleClick}
            selectedId={selectedId}
            data={data}
          />
        </styles.Item>
      ))}
    </styles.Container>
  );
};
