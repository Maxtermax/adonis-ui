import React, { forwardRef } from "react";
import { ADText } from "ADText/ADText";
import * as styles from "./styles";

export const ADLoader = forwardRef(function ADLoader(
  { text = "", variant = "", className = "", size },
  ref,
) {
  if (variant === "dots")
    return (
      <styles.DotLoader ref={ref} className={`ad-loader-dots ${className}`}>
          <span className="ad-loader__dot" />
          <span className="ad-loader__dot" />
          <span className="ad-loader__dot" />
      </styles.DotLoader>
    );
  return (
    <styles.Container ref={ref} className={`ad-loader ${className}`}>
      <styles.Spinner size={size} className="ad-loader__spinner" />
      {text ? <ADText variant="text" value={text} /> : null}
    </styles.Container>
  );
});
