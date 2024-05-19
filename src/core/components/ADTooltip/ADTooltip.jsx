import * as styles from "./styles";
import { DIRECTIONS } from "constants";

export const ADTooltip = ({
  className = "",
  children,
  text,
  directions = DIRECTIONS.TOP,
  ...rest
}) => {
  return (
    <styles.Content className={`ad-tooltip ${className}`} {...rest}>
      {children}
      <styles.Text>{text}</styles.Text>
    </styles.Content>
  );
};
