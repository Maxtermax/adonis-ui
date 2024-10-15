import React from "react";
import ADText from "ADText";
import * as styles from "./styles";

export const ADLayoutTitle = ({ children }) => {
  return (
    <styles.Container>
      <ADText variant="title" value={children} />
    </styles.Container>
  );
};
