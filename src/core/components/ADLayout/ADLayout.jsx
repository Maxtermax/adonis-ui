import React from "react";
import * as styles from "./styles";

export const ADLayout = function ADLayout({ header, footer, body }) {
  return (
    <styles.Container>
      {header?.() ?? null}
      {body?.() ?? null}
      {footer?.() ?? null}
    </styles.Container>
  );
};
