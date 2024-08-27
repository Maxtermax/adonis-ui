import React, { forwardRef } from "react";
import * as styles from "./styles";

export const ADCarousell = forwardRef(function ADCarousell({
  children = [],
  width,
}) {
  return (
    <styles.Container width={width}>
      <styles.Content>{children}</styles.Content>
    </styles.Container>
  );
});
