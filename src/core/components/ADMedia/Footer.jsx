import * as styles from "./style";
import formatCurrency from "@/utils/formatCurrency";
import { CartPlus } from "@styled-icons/bootstrap/CartPlus";
import { ADBadge } from "components/ADBadge/ADBadge";
import { ADButton } from "components/ADButton/ADButton";
import { ADGrid } from "components/ADGrid/ADGrid";
import { ADText } from "components/ADText/ADText";
import { TEXT_VARIANTS, DIMENSIONS, CARD_VARIANTS } from "constants";

export const Footer = ({ name, price, sizes, discount }) => {
  return (
    <styles.Footer>
      <ADGrid md={{ cols: 1, rows: 1 }} cols={2} rows={1}>
        <styles.LeftCol className="left-col">
          <ADText variant={TEXT_VARIANTS.TITLE} value={name} />
          {discount ? (
            <styles.Discount>
              <ADText
                variant={TEXT_VARIANTS.TEXT}
                value={formatCurrency(discount.before)}
                lineThrough
                title="Antes"
              />
              <ADText
                variant={TEXT_VARIANTS.TEXT}
                value={formatCurrency(discount.now)}
                title="Ahora"
              />
            </styles.Discount>
          ) : (
            <ADText
              variant={TEXT_VARIANTS.TEXT}
              value={formatCurrency(price)}
            />
          )}
          <styles.Sizes className="sizes">
            {sizes.map((size, index) => (
              <ADBadge size={DIMENSIONS.small} key={index}>
                <ADText variant={TEXT_VARIANTS.SUBTITLE} value={size} />
              </ADBadge>
            ))}
          </styles.Sizes>
        </styles.LeftCol>
        <styles.RightCol className="right-col">
          <ADButton
            className="desktop-button"
            variant={CARD_VARIANTS.CONTAINED}
          >
            <CartPlus size={20} />
          </ADButton>
        </styles.RightCol>
      </ADGrid>
    </styles.Footer>
  );
};
