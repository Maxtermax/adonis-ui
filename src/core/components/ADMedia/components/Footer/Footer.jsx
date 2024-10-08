import React, { useState } from "react";
import { useMutations } from "hermes-io";
import { Eye } from "@styled-icons/fluentui-system-regular/Eye";
import ADButton from "ADButton";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADTooltip from "ADTooltip";
import { mediaStore } from "ADMedia/store";
import { selectSize } from "ADMedia/mutations";
import { actions } from "ADMedia/reducer";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery";
import formatCurrency from "../../../../../utils/formatCurrency";
import { TEXT_VARIANTS, DIRECTIONS, CARD_VARIANTS } from "constants";
import * as styles from "./styles";

const Sizes = ({ id, data = [] }) => {
  const { state, onEvent } = useMutations({
    initialState: { selected: null },
    store: mediaStore,
    id,
  });

  onEvent(actions.SELECT_SIZE, (selected) => ({ selected }));

  const handleSelectSize = (size) =>
    selectSize({ store: mediaStore.get(id), targets: [id], value: size });

  return (
    <styles.Sizes className="sizes">
      {data.map((size, index) => (
        <ADTooltip text={`Talla: ${size}`} key={index}>
          <ADButton
            onClick={() => handleSelectSize(size)}
            className={`${state.selected === size ? "size-selected" : ""}`}
            variant="text"
          >
            <ADText variant={TEXT_VARIANTS.SUBTITLE} value={size} />
          </ADButton>
        </ADTooltip>
      ))}
    </styles.Sizes>
  );
};

const ActionButton = () => {
  const match = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  return (
    <ADTooltip text="Ver" direction={match ? DIRECTIONS.TOP : DIRECTIONS.LEFT}>
      <ADButton variant={CARD_VARIANTS.CONTAINED}>
        <Eye size={25} />
      </ADButton>
    </ADTooltip>
  );
};

export const Footer = ({ id, name, price, sizes, discount }) => {
  return (
    <styles.Footer>
      <ADGrid md={{ cols: 1, rows: 1 }} cols={"1fr 70px"} rows={1}>
        <styles.LeftCol className="left-col">
          <ADText variant={TEXT_VARIANTS.HEADING} value={name} />
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
          <Sizes id={id} data={sizes} />
        </styles.LeftCol>
        <styles.RightCol className="right-col">
          <ActionButton />
        </styles.RightCol>
      </ADGrid>
    </styles.Footer>
  );
};
