import React from "react";
import ADText from "ADText";
import * as styles from "./styles";

export const ADLayoutTitle = ({ children }) => {
  return (
    <styles.Container>
      <ADText variant="fancy" value={children} />
    </styles.Container>
  );
};
