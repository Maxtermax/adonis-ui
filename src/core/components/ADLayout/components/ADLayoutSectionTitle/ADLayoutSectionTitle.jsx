import React from "react";
import { ADLayoutTitle, ADLayoutSubTitle } from "ADLayout";
import * as styles from "./styles";

export const ADLayoutSectionTitle = ({ title, subtitle }) => {
  return (
    <styles.Container>
      {title ? <ADLayoutTitle className="ad-layout-section-title">{title}</ADLayoutTitle> : null}
      {subtitle ? <ADLayoutSubTitle>{subtitle}</ADLayoutSubTitle> : null}
    </styles.Container>
  );
};
