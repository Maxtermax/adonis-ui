import React from "react";
import ADFlex from "ADFlex";
import ADText from "ADText";
import { ArrowRight } from "@styled-icons/bootstrap";
import formatCurrency from "../../../../../utils/formatCurrency";
import * as styles from "./styles";

export const ADProductStrips = ({ data = [] }) => {
  return data.map(
    (
      { name = "", discount = 0, thubmnail = "", link = "#", price, id = "" },
      index,
    ) => {
      console.log({ discount });
      return (
        <styles.Item key={id}>
          <ADFlex gap={5} direction="column" alignItems="flex-start" fullWidth>
            <ADFlex
              direction="column"
              alignItems="flex-start"
              fullWidth
              gap={2}
            >
              <styles.Link delay={index / 4} href={link}>
                <styles.Thumbnail src={thubmnail} />
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
    },
  );
};
