import React from "react";
import ADFlex from "ADFlex";
import ADText from "ADText";
import ADProductCount from "ADProductCount";
import ADBadge from "ADBadge";
import { ArrowRight } from "@styled-icons/bootstrap";
import formatCurrency from "../../../../../utils/formatCurrency";
import { POSITIONS } from "constants";
import * as styles from "./styles";

export const ADProductStrips = ({
  data = [],
  onDelete,
  onChange,
  showCounter = false,
}) => {
  return data.map(
    (
      {
        amount = 1,
        name = "",
        discount = 0,
        src = "",
        thubmnail = "",
        link = "#",
        price,
        id = "",
      },
      index,
    ) => {
      const result = (
        <styles.Item key={id}>
          <ADFlex gap={5} direction="column" alignItems="flex-start" fullWidth>
            <ADFlex
              direction="column"
              alignItems="flex-start"
              fullWidth
              gap={2}
            >
              <styles.Link delay={index / 4} href={link}>
                <styles.Thumbnail src={thubmnail || src} />
                <ADFlex alignItems="flext-start" direction="column">
                  <ADFlex gap={2} alignItems="flext-start">
                    <ADText variant="text" value={name} />
                    <ArrowRight size={20} />
                  </ADFlex>
                  <ADFlex gap={2} alignItems="flext-start">
                    {discount ? (
                      <ADText
                        lineThrough
                        variant="subtitle"
                        value={
                          typeof discount === "number"
                            ? formatCurrency(price * discount) + " / "
                            : formatCurrency(discount.now)
                        }
                      />
                    ) : null}
                    <ADText variant="subtitle" value={formatCurrency(price)} />
                  </ADFlex>
                </ADFlex>
              </styles.Link>
            </ADFlex>
          </ADFlex>
        </styles.Item>
      );
      if (showCounter) {
        return (
          <ADBadge
            key={id}
            left="calc(100% - 51px)"
            bottom="70px"
            value={
              <ADProductCount
                defaultValue={amount}
                onChange={(value) => onChange({ id, value })}
                onDelete={(value) => onDelete({ id, value})}
              />
            }
            position={POSITIONS.bottomRight}
          >
            {result}
          </ADBadge>
        );
      }
      return result;
    },
  );
};
