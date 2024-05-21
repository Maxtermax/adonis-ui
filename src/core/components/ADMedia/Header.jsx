import * as styles from "./style";
import { ADText } from "components/ADText/ADText";
import { ADBadge } from "components/ADBadge/ADBadge";
import { ADTooltip } from "components/ADTooltip/ADTooltip";
import { TEXT_VARIANTS, DIRECTIONS } from "constants";

export const Header = ({ discount }) => {
  return (
    <styles.Header>
      {discount ? (
        <ADBadge active>
          <ADTooltip
            contrast
            direction={DIRECTIONS.LEFT}
            text={`${discount.percentage} de Descuento`}
            anchor={(ref) => (
              <ADText
                ref={ref}
                variant={TEXT_VARIANTS.HEADING}
                value={`-${discount.percentage}`}
                title={`-${discount.percentage}`}
              />
            )}
          />
        </ADBadge>
      ) : null}
    </styles.Header>
  );
};
