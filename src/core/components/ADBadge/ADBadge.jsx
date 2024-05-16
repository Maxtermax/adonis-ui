import { SHAPES, DIMENSIONS  } from "constants";
import * as styles from "./style";

const { rounded } = SHAPES;

export const ADBadge = ({
  children,
  className = "",
  size = DIMENSIONS.normal,
  variant = rounded,
  ...rest
}) => (
  <styles.Badge
    className={`ad-badge ${className}`}
    size={size}
    variant={variant}
    {...rest}
  >
    {children}
  </styles.Badge>
);
