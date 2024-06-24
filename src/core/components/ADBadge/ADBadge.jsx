import { forwardRef } from "react";
import { SHAPES, DIMENSIONS } from "constants";
import * as styles from "./styles";

const { rounded } = SHAPES;

export const ADBadge = forwardRef(function ADBadge(
  {
    children,
    className = "",
    size = DIMENSIONS.normal,
    variant = rounded,
    ...rest
  },
  ref
) {
  return (
    <styles.Badge
      ref={ref}
      className={`ad-badge ${className}`}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </styles.Badge>
  );
});
