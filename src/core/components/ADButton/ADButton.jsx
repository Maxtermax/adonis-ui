import { forwardRef } from "react";
import * as styles from "./style";

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
