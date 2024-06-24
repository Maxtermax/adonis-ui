import { forwardRef } from "react";
import * as styles from "./styles";

export const ADPanel = forwardRef(function ADPanel(
  { className = "", variant = "fill", children, ...rest },
  ref,
) {
  return (
    <styles.Panel
      variant={variant}
      ref={ref}
      {...rest}
      className={`ad-panel ${className}`}
    >
      {children}
    </styles.Panel>
  );
});
