import React from "react";
import ADText from "ADText";
import * as styles from "./styles";

export const ADLayoutSubTitle = ({ children }) => {
  return (
    <styles.Container>
      <ADText variant="subtitle" value={children} />
    </styles.Container>
  );
};
