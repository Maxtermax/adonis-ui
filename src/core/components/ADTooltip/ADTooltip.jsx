import { useEffect, useRef } from "react";
import * as styles from "./styles";
import { DIRECTIONS } from "constants";
import { useTheme } from "@emotion/react";

export const ADTooltip = ({
  className = "",
  children,
  text,
  direction = DIRECTIONS.TOP,
  anchor,
  contrast = false,
}) => {
  const anchorRef = useRef(null);
  const textRef = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (anchorRef.current) {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      if (direction === DIRECTIONS.BOTTOM) {
        textRef.current.style.top = `calc(${anchorRect.y}px + ${anchorRect.height}px)`;
        textRef.current.style.left = `calc((${anchorRect.x}px - ${theme.spacing.regular}) + (${anchorRect.width}px / 2) - (${textRect.width}px / 2))`;
      }
      if (direction === DIRECTIONS.TOP) {
        textRef.current.style.top = `calc(${anchorRect.y}px - ${textRect.height}px)`;
        textRef.current.style.left = `calc((${anchorRect.x}px - ${theme.spacing.regular}) + (${anchorRect.width}px / 2) - (${textRect.width}px / 2))`;
      }
    }
  }, [direction]);

  const Content = anchor?.(anchorRef) ?? null;

  return (
    <>
      {Content}
      <styles.Text
        ref={textRef}
        contrast={contrast}
        className="ad-tooltip__text"
        direction={direction}
      >
        {text}
      </styles.Text>
    </>
  );
};
