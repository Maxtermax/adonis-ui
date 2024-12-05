import React, { forwardRef } from "react";
import * as styles from "./styles";

export const ADFlex = forwardRef(function ADFlex(
  { children, className = "", ...rest },
  ref,
) {
  return (
    <styles.Flex ref={ref} className={`ad-flex ${className}`} {...rest}>
      {children}
    </styles.Flex>
  );
});
