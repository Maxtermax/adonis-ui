import { forwardRef } from "react";
import { ADOverlay } from "ADOverlay/ADOverlay";
import * as styles from "ADPopup/styles";

export const ADPopup = forwardRef(function ADPopup(
  { children = null, className = "" },
  ref,
) {
  return (
    <ADOverlay>
      <styles.Container ef={ref} className={`ad-popup ${className}`}>
        {children}
      </styles.Container>
    </ADOverlay>
  );
});
