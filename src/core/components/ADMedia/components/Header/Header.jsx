import React from 'react';
import * as styles from "./styles";
import ADText from "../../../ADText";
import ADBadge from "../../../ADBadge";
import { TEXT_VARIANTS } from "constants";

export const Header = ({ discount }) => {
  return (
    <styles.Header>
      {discount ? (
        <ADBadge>
          <ADText
            variant={TEXT_VARIANTS.SUBTITLE}
            value={`-${discount.percentage}`}
            title={`-${discount.percentage}`}
          />
        </ADBadge>
      ) : null}
    </styles.Header>
  );
};
