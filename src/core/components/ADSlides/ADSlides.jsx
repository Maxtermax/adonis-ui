import React, { useState } from "react";
import ADButton from "ADButton";
import ADSlideIndicator from "./components/ADSlideIndicator";
import * as styles from "./styles";

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
          <div style={{ visibility: "hidden" }}>
            <ADSlideIndicator
              onClick={handleClick}
              selectedId={selectedId}
              data={data}
            />
          </div>
        </styles.Item>
      ))}
    </styles.Container>
  );
};
