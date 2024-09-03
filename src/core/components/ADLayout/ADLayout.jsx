import React from "react";
import * as styles from "./styles";

export const ADLayout = function ADLayout({ header, footer, content }) {
  return (
    <styles.Container>
      {header?.() ?? null}
      {content?.() ?? null}
      {footer?.() ?? null}
    </styles.Container>
  );
};
