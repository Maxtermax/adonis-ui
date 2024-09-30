import React, { useRef } from "react";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { KeyboardArrowRight } from "@styled-icons/material-outlined/KeyboardArrowRight";
import ADButton from "ADButton";
import { DIRECTIONS } from "constants";
import * as styles from "./styles";

export const ADCarousell = ({ children = [] }) => {
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const focusFirstVisibleTab = () => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".ad-media");
    let width = 0;
    let focusTab = null;
    for (const item of items) {
      width += item.clientWidth + 49;
      console.log({ tab: item, width, scrollLeft: container.scrollLeft });
      if (width >= container.scrollLeft) {
        focusTab = item;
        break;
      }
    }
    focusTab?.scrollIntoView?.({ block: "center", behavior: "smooth" });
  };

  const focusLastVisibleTab = () => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".ad-media");
    let width = 0;
    let focusTab = null;
    for (const item of items) {
      width += item.clientWidth;
      if (width > container.clientWidth + container.scrollLeft) {
        focusTab = item;
        break;
      }
    }
    focusTab?.scrollIntoView?.({ block: "center", behavior: "smooth" });
  };

  const handleFocus = (direction) => {
    const isLeft = direction === DIRECTIONS.LEFT;
    const isRight = direction === DIRECTIONS.RIGHT;
    if (isLeft) focusFirstVisibleTab();
    if (isRight) focusLastVisibleTab();
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const posX = container.scrollLeft;
    if (posX === 0) prevButtonRef.current.disabled = true;
    if (posX > 0) prevButtonRef.current.disabled = false;
    if (container.scrollWidth - posX === container.clientWidth) {
      nextButtonRef.current.disabled = true;
    } else {
      nextButtonRef.current.disabled = false;
    }
  };

  return (
    <styles.Wrapper>
      <ADButton
        ref={prevButtonRef}
        onClick={() => handleFocus(DIRECTIONS.LEFT)}
        variant="text"
        className="ad-carousell__arrow __arrow-left"
      >
        <KeyboardArrowLeft />
      </ADButton>
      <styles.Container
        onScroll={handleScroll}
        ref={containerRef}
        className="ad-carousell"
      >
        <styles.Content>{children}</styles.Content>
      </styles.Container>
      <ADButton
        ref={nextButtonRef}
        onClick={() => handleFocus(DIRECTIONS.RIGHT)}
        variant="text"
        className="ad-carousell__arrow __arrow-right"
      >
        <KeyboardArrowRight />
      </ADButton>
    </styles.Wrapper>
  );
};
