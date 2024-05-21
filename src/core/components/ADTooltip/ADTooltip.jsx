import { useEffect, useRef } from "react";
import * as styles from "./styles";
import { DIRECTIONS } from "constants";
import { useTheme } from "@emotion/react";

export const ADTooltip = ({
  className = "",
  children,
  text,
  direction = DIRECTIONS.TOP,
  contrast = false,
  ...rest
}) => {
  const anchorRef = useRef(null);
  const textRef = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (anchorRef.current) {
      const anchorRect= anchorRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      textRef.current.style.top = `calc(${anchorRect.y}px + ${anchorRect.height}px)`;
      textRef.current.style.left = `calc((${anchorRect.x}px - ${theme.spacing.regular}) + (${anchorRect.width}px / 2) - (${textRect.width}px / 2))`;
    }
  }, []);

  return (
    <>
      <styles.Content
        ref={anchorRef}
        contrast={contrast}
        direction={direction}
        className={`ad-tooltip ${className}`}
        {...rest}
      >
        {children}
      </styles.Content>
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
