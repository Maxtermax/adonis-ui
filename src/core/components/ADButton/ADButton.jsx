// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from "react";
import * as styles from "./styles";

export const ADButton = forwardRef(function ADButton({
  children,
  className = "",
  ...rest
}, ref) {
  return (
    <styles.Button className={`ad-button ${className}`} ref={ref} {...rest}>
      {children}
    </styles.Button>
  );
});
