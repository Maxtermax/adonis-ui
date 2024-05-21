import { useEffect, useRef } from "react";
import * as styles from "./styles";
import { DIRECTIONS } from "constants";
import { useTheme } from "@emotion/react";

export const ADTooltip = ({
  className = "",
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
      anchorRef.current.onmouseenter = () => {
        textRef.current.classList.remove("ad-hide");
        textRef.current.classList.add("ad-show");
      };
      anchorRef.current.onmouseleave = () => {
        textRef.current.classList.remove("ad-show");
        textRef.current.classList.add("ad-hide");
      };

      const [textRect] = textRef.current.getClientRects();
      const [anchorRect] = anchorRef.current.getClientRects();

      if (direction === DIRECTIONS.BOTTOM) {
        const y = `calc(${anchorRect.y}px + ${anchorRect.height}px + ${theme.spacing.regular})`;
        const x = `calc((${anchorRect.x}px - ${theme.spacing.regular}) + (${anchorRect.width}px / 2) - (${textRect.width}px / 2))`;
        textRef.current.style.transform = `translate(${x}, ${y})`;
      }
      if (direction === DIRECTIONS.TOP) {
        const y = `calc(${anchorRect.y}px - ${textRect.height}px - ${theme.spacing.regular})`;
        const x = `calc((${anchorRect.x}px - ${theme.spacing.regular}) + (${anchorRect.width}px / 2) - (${textRect.width}px / 2))`;
        textRef.current.style.transform = `translate(${x}, ${y})`;
      }
      if (direction === DIRECTIONS.LEFT) {
        const y = `calc(${anchorRect.y}px - (${theme.spacing.regular} / 2))`;
        const x = `calc(${anchorRect.x}px - (${textRect.width}px + ${theme.spacing.regular}))`;
        textRef.current.style.transform = `translate(${x}, ${y})`;
      }
      if (direction === DIRECTIONS.RIGHT) {
        const x = `calc(${anchorRect.x}px)`;
        const y = `calc(${anchorRect.y}px)`;
        textRef.current.style.top = x;
        textRef.current.style.left = y;
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
        className={`ad-tooltip ${className}`}
        direction={direction}
      >
        {text}
      </styles.Text>
    </>
  );
};
