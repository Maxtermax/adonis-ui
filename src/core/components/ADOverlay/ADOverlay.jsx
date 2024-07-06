import { forwardRef } from "react";
import { createPortal } from "react-dom";
import * as styles from "./styles";

export const ADOverlay = forwardRef(function ADOverlay(
  { children = null, className = "" },
  ref,
) {
  return createPortal(
    <styles.Container ref={ref} className={`ad-overlay ${className}`}>
      {children}
    </styles.Container>,
    document.body,
  );
});
