import React from "react";
import ADText from "ADText";
import ADButton from "ADButton";
import ADPanel from "ADPanel";
import ADFlex from "ADFlex";
import { ADProductStrips } from "../ADProductStrips/ADProductStrips";
import ADLoaderButton from "ADLoaderButton";
import ADGrid, { ADGridCol } from "ADGrid";
import { X as CloseIcon } from "@styled-icons/feather/X";
import { CartCheck } from "@styled-icons/bootstrap/CartCheck";
import { uniqueId } from "lodash";
import * as styles from "./styles";
import formatCurrency from "../../../../../utils/formatCurrency";

export const ADShoppingCart = ({
  id = uniqueId("ad-shopping-cart"),
  data = [],
  onClose,
}) => {
  const total = data.reduce((acc, { price }) => acc + +price, 0);
  return (
    <styles.Container className="ad-shopping-cart">
      <ADGrid
        fullWidth
        cols="1fr"
        rows={"45px calc(100dvh - 185px) 40px 60px"}
        alignItems="stretch"
        lg={{
          gap: "4px",
          height: "100%",
        }}
      >
        <ADGridCol>
          <styles.Header>
            <ADFlex gap={2} alignItems="center">
              <ADPanel>
                <CartCheck size={35} />
              </ADPanel>
              <ADText value="CARRITO" uppercase variant="title" />
            </ADFlex>
            <ADButton onClick={onClose} variant="text">
              <CloseIcon size={30} />
            </ADButton>
          </styles.Header>
        </ADGridCol>

        <ADGridCol>
          <styles.Content className="ad-shopping-cart__content">
            <ADProductStrips data={data} />
          </styles.Content>
        </ADGridCol>

        <ADGridCol>
          <ADFlex
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            fullWidth
            gap={2}
          >
            <styles.Divider />
            <ADText value={`TOTAL: ${formatCurrency(total)}`} variant="title" />
          </ADFlex>
        </ADGridCol>

        <ADGridCol>
          <styles.Footer>
            <ADLoaderButton id={id}>
              <ADButton variant="sharp">
                <ADText value="Comprar" variant="subtitle" />
              </ADButton>
            </ADLoaderButton>
          </styles.Footer>
        </ADGridCol>
      </ADGrid>
    </styles.Container>
  );
};
