import React, { forwardRef } from "react";
import * as styles from "./styles";

export const ADGrid = forwardRef(function ADGrid(
  { children, className = "", cols = 1, rows = 1, ...rest },
  ref,
) {
  return (
    <styles.Grid
      className={`ad-grid ${className}`}
      cols={cols}
      rows={rows}
      ref={ref}
      {...rest}
    >
      {children}
    </styles.Grid>
  );
});
