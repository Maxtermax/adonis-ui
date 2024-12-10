import React from "react";
import { useTheme } from "@emotion/react";
import { Eye } from "@styled-icons/fluentui-system-regular/Eye";
import ADButton from "ADButton";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADTooltip from "ADTooltip";
import Sizes from "ADLayout/components/ADProductFilter/components/Sizes";
import { mediaStore } from "ADMedia/store";
import useMediaQuery from "@/core/hooks/useMediaQuery";
import { microCarousellStore } from "ADCarousell/store";
import * as mediaMutations from "ADMedia/mutations";
import * as microCarousellMutations from "@/core/components/ADCarousell/mutations";
import formatCurrency from "../../../../../utils/formatCurrency";
import { TEXT_VARIANTS, DIRECTIONS, CARD_VARIANTS } from "constants";
import * as styles from "./styles";

const getTargetCarousell = (productId) => {
  let target = null;
  const keys = microCarousellStore.collection.keys();
  for (const key of keys) {
    const store = microCarousellStore.get(key);
    if (store.state.data.some(({ id }) => id === productId)) {
      target = key;
      break;
    }
  }
  return target;
};

const SizesWrapper = ({ id, notAvailables = [] }) => {
  const theme = useTheme();
  const handleSelectSize = (sizes, isNotAvailable) => {
    const size = sizes.find(({ selected }) => !!selected)?.id;
    const carrousellId = getTargetCarousell(id);
    if (carrousellId && isNotAvailable) {
      microCarousellMutations.selectSize({
        store: microCarousellStore.get(carrousellId),
        id: carrousellId,
        value: { isNotAvailable, productId: id },
      });
    }
    mediaMutations.selectSize({
      store: mediaStore.get(id),
      targets: [id],
      value: { size },
    });
  };

  return (
    <Sizes
      hideTitle
      onChange={handleSelectSize}
      notAvailables={notAvailables}
      sx={{
        gap: "0px",
        columGap: theme.spacing.calc(1),
        "& .ad-sizes-button": {
          minWidth: "38px",
          height: "34px",
        },
      }}
    />
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

export const Footer = ({ id, name, price, notAvailables, discount }) => {
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
          <SizesWrapper id={id} notAvailables={notAvailables} />
        </styles.LeftCol>
        <styles.RightCol className="right-col">
          <ActionButton />
        </styles.RightCol>
      </ADGrid>
    </styles.Footer>
  );
};
