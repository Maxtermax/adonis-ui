import React, { forwardRef } from "react";
import { SHAPES, DIMENSIONS } from "constants";
import * as styles from "./styles";

const { rounded } = SHAPES;

export const ADBadge = forwardRef(function ADBadge(
  {
    children,
    className = "",
    position = "",
    size = DIMENSIONS.normal,
    variant = rounded,
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
      <styles.Value position={position} className="ad-badge__value">
        {value}
      </styles.Value>
    </styles.Badge>
  );
});
