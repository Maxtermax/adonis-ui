import React from 'react';
import * as styles from "./styles";
import formatCurrency from "utils/formatCurrency";
import { CartPlus } from "@styled-icons/bootstrap/CartPlus";
import ADBadge from "ADBadge";
import ADButton from "ADButton";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADTooltip from "ADTooltip";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery";

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
      <ADGrid md={{ cols: 1, rows: 1 }} cols={"1fr 70px"} rows={1}>
        <styles.LeftCol className="left-col">
          <ADText variant={TEXT_VARIANTS.TITLE} value={name} />
          {discount ? (
            <styles.Discount>
              <ADTooltip
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
              <ADTooltip text={`Ahora: ${formatCurrency(discount.now)}`}>
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
              <ADTooltip text={`Talla: ${size}`} key={index}>
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
