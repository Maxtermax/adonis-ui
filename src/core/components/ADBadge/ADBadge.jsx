import React, { forwardRef } from "react";
import { SHAPES, DIMENSIONS, POSITIONS } from "constants";
import * as styles from "./styles";

const { rounded } = SHAPES;

export const ADBadge = forwardRef(function ADBadge(
  {
    children,
    className = "",
    position = POSITIONS.topRight,
    size = DIMENSIONS.normal,
    variant = rounded,
    bottom,
    left,
    value = null,
    ...rest
  },
  ref,
) {
  return (
    <styles.Badge
      ref={ref}
      className={`ad-badge ${className}`}
      size={size}
      variant={variant}
      {...rest}
    >
      <styles.Content className="ad-badge__content">{children}</styles.Content>
      <styles.Value bottom={bottom} left={left} position={position} className="ad-badge__value">
        {value}
      </styles.Value>
    </styles.Badge>
  );
});
