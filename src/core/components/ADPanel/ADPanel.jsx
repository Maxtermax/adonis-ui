import { forwardRef } from "react";
import * as styles from "./styles";

export const ADPanel = forwardRef(function ADPanel(
  { className = "", children, ...rest },
  ref,
) {
  return (
    <styles.Panel ref={ref} {...rest} className={`ad-panel ${className}`}>
      {children}
    </styles.Panel>
  );
});
