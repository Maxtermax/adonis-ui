import React from 'react';
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import * as styles from "./styles";

// const { uniqueId } = _;
export const ADLayoutBurgerMenu = () => (
  <styles.BurguerMenu>
    <Menu size={40} />
  </styles.BurguerMenu>
);

export const ADLayout = function ADLayout({ header, footer, content }) {
  return (
    <styles.Container>
      {header?.() ?? null}
      {content?.() ?? null}
      {footer?.() ?? null}
    </styles.Container>
  );
};
