import { forwardRef } from "react";
import { ADText } from "ADText/ADText";
import * as styles from "./styles";

export const ADLoader = forwardRef(function ADLoader(
  { text = "", className = "" },
  ref,
) {
  return (
    <styles.Container ref={ref} className={`ad-loader ${className}`}>
        <styles.Spinner className="ad-loader__spinner" />
      {text ? <ADText variant="text" value={text} /> : null}
    </styles.Container>
  );
});
