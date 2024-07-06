import { forwardRef } from "react";
import { DIRECTIONS } from "constants";
import * as styles from "./styles";

export const ADTooltip = forwardRef(function ADTooltip(
  {
    className = "",
    text,
    direction = DIRECTIONS.TOP,
    contrast = false,
    children,
  },
  ref,
) {
  return (
    <styles.Container
      ref={ref}
      direction={direction}
      className={`ad-tooltip  ${className}`}
    >
      <styles.Text
        contrast={contrast}
        className={"ad-tooltip__text"}
        direction={direction}
      >
        {text}
      </styles.Text>
      {children}
    </styles.Container>
  );
});
