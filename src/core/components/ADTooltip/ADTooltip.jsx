import * as styles from "./styles";
import { DIRECTIONS } from "constants";

export const ADTooltip = ({
  className = "",
  text,
  direction = DIRECTIONS.TOP,
  contrast = false,
  children,
}) => {
  return (
    <styles.Container
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
};
