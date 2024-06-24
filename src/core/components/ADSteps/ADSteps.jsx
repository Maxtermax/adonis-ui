import { forwardRef } from "react";
import * as styles from "./style";

export const ADSteps = forwardRef(function ADButton({
  children,
  className = "",
  ...rest
}, ref) {
  return (
    <styles.Container className={`ad-steps ${className}`} ref={ref} {...rest}>
      {children}
    </styles.Container>
  );
});

