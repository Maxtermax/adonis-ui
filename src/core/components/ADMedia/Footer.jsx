import * as styles from "./style";
import formatCurrency from "@/utils/formatCurrency";
import { CartPlus } from "@styled-icons/bootstrap/CartPlus";
import { ADBadge } from "components/ADBadge/ADBadge";
import { ADButton } from "components/ADButton/ADButton";
import { ADGrid } from "components/ADGrid/ADGrid";
import { ADText } from "components/ADText/ADText";
import { TEXT_VARIANTS, DIMENSIONS, CARD_VARIANTS } from "constants";

export const Footer = ({ name, price }) => {
  return (
    <styles.Footer>
      <ADGrid md={{ cols: 1, rows: 1 }} cols={2} rows={1}>
        <styles.LeftCol className="left-col">
          <ADText variant={TEXT_VARIANTS.TITLE} value={name} />
          <ADText variant={TEXT_VARIANTS.TEXT} value={formatCurrency(price)} />
          <styles.Sizes className="sizes">
            <ADBadge size={DIMENSIONS.small}>
              <ADText variant={TEXT_VARIANTS.SUBTITLE} value="M" />
            </ADBadge>
            <ADBadge size={DIMENSIONS.small}>
              <ADText variant={TEXT_VARIANTS.SUBTITLE} value="S" />
            </ADBadge>
            <ADBadge size={DIMENSIONS.small}>
              <ADText variant={TEXT_VARIANTS.SUBTITLE} value="XS" />
            </ADBadge>
            <ADBadge size={DIMENSIONS.small}>
              <ADText variant={TEXT_VARIANTS.SUBTITLE} value="L" />
            </ADBadge>
          </styles.Sizes>
        </styles.LeftCol>
        <styles.RightCol className="right-col">
          <ADButton className="desktop-button" variant={CARD_VARIANTS.CONTAINED}>
            <CartPlus size={20} />
          </ADButton>
        </styles.RightCol>
      </ADGrid>
    </styles.Footer>
  );
};
