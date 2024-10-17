import React from "react";
import ADButton from "ADButton";
import { PlayCircle } from "@styled-icons/feather/PlayCircle";
import { PauseCircle } from "@styled-icons/feather/PauseCircle";
import * as styles from "./styles";

export const ADSlideIndicator = ({
  isPaused = false,
  data = [],
  selectedId = "",
  duration = "4000ms",
  onToggleAnimationState,
  onClick,
}) => {
  return (
    <styles.Wrapper isPaused={isPaused} showButton={!!onToggleAnimationState}>
      <styles.Container
        isPaused={isPaused}
        className="ad-slides__indicator-container"
      >
        {data.map(({ id }, index) => (
          <styles.Indicator
            duration={duration}
            className="ad-slides__indicator"
            isPaused={isPaused}
            onAnimationEnd={() => onClick(data[index + 1]?.id ?? data[0]?.id)}
            isSelected={id === selectedId}
            onClick={() => onClick(id)}
            key={id}
          />
        ))}
      </styles.Container>
      {
        onToggleAnimationState ? <ADButton
        onClick={onToggleAnimationState}
        className="ad-slides__indicator-button"
        variant="text"
      >
        {isPaused ? (
          <PlayCircle className="ad-slides__indicator-play" size={25} />
        ) : (
          <PauseCircle className="ad-slides__indicator-pause" size={25} />
        )}
      </ADButton> :  null
      }
    </styles.Wrapper>
  );
};
