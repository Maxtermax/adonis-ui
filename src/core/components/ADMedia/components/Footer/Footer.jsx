import * as styles from "./styles";
import formatCurrency from "@/utils/formatCurrency";
import { CartPlus } from "@styled-icons/bootstrap/CartPlus";
import { ADBadge } from "components/ADBadge/ADBadge";
import { ADButton } from "components/ADButton/ADButton";
import { ADGrid } from "components/ADGrid/ADGrid";
import { ADText } from "components/ADText/ADText";
import { ADTooltip } from "components/ADTooltip/ADTooltip";
import { useMediaQuery } from "hooks/useMediaQuery";

import {
  TEXT_VARIANTS,
  DIMENSIONS,
  DIRECTIONS,
  CARD_VARIANTS,
} from "constants";

const Button = () => {
  const match = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  return (
    <ADTooltip
      contrast
      text="Añadir"
      direction={match ? DIRECTIONS.TOP : DIRECTIONS.LEFT}
    >
      <ADButton variant={CARD_VARIANTS.CONTAINED}>
        <CartPlus size={20} />
      </ADButton>
    </ADTooltip>
  );
};

export const Footer = ({ name, price, sizes, discount }) => {
  return (
    <styles.Footer>
      <ADGrid md={{ cols: 1, rows: 1 }} cols={2} rows={1}>
        <styles.LeftCol className="left-col">
          <ADText variant={TEXT_VARIANTS.TITLE} value={name} />
          {discount ? (
            <styles.Discount>
              <ADTooltip
                contrast
                direction={DIRECTIONS.TOP}
                text={`Antes: ${formatCurrency(discount.before)}`}
              >
                <ADText
                  variant={TEXT_VARIANTS.TEXT}
                  value={formatCurrency(discount.before)}
                  lineThrough
                  title="Antes"
                />
              </ADTooltip>
              /
              <ADTooltip
                contrast
                text={`Ahora: ${formatCurrency(discount.now)}`}
              >
                <ADText
                  variant={TEXT_VARIANTS.TEXT}
                  value={formatCurrency(discount.now)}
                  title="Ahora"
                />
              </ADTooltip>
            </styles.Discount>
          ) : (
            <ADText
              variant={TEXT_VARIANTS.TEXT}
              value={formatCurrency(price)}
            />
          )}
          <styles.Sizes className="sizes">
            {sizes.map((size, index) => (
              <ADTooltip contrast text={size} key={index}>
                <ADBadge size={DIMENSIONS.small}>
                  <ADText variant={TEXT_VARIANTS.SUBTITLE} value={size} />
                </ADBadge>
              </ADTooltip>
            ))}
          </styles.Sizes>
        </styles.LeftCol>
        <styles.RightCol className="right-col">
          <Button />
        </styles.RightCol>
      </ADGrid>
    </styles.Footer>
  );
};
