import * as styles from "./style";
import { ADText } from "components/ADText/ADText";
import { ADBadge } from "components/ADBadge/ADBadge";
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
