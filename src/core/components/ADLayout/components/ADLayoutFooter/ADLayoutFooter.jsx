import React from "react";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADFlex from "ADFlex";
import { Whatsapp } from "@styled-icons/remix-line/Whatsapp";
import { ShoppingBag } from "@styled-icons/feather/ShoppingBag";
import { Instagram } from "@styled-icons/feather/Instagram";
import { Box } from "@styled-icons/feather/Box";
import * as styles from "./styles";
import { useMediaQuery } from "../../../../../utils/hooks/useMediaQuery";

export const ADLayoutFooter = () => {
  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );
  let iconSize = 50;
  let titleVariant = "title";
  if (isMobile) {
    iconSize = 30;
    titleVariant = "subtitle";
  }

  return (
    <styles.Container>
      <ADGrid
        fullWidth
        cols={"repeat(auto-fit, minmax(300px, 1fr))"}
        lg={{
          gap: "20px",
        }}
        sm={{
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          columnGap: "15px",
        }}
      >
        <styles.Item>
          <ADText value="Contacto" variant={titleVariant} />
          <ADFlex gap={5} alignItems="center" justifContent="center">
            <a href="#">
              <Whatsapp size={iconSize} />
            </a>
          </ADFlex>
        </styles.Item>
        <styles.Item>
          <ADText value="Redes Sociales" variant={titleVariant} />
          <ADFlex gap={5} alignItems="center" justifContent="center">
            <a href="#">
              <Instagram size={iconSize} />
            </a>
            <a href="#">
              <Whatsapp size={iconSize} />
            </a>
          </ADFlex>
        </styles.Item>
        <styles.Item>
          <ADText value="Devoluciones" variant={titleVariant} />
          <ADFlex gap={5} alignItems="center" justifContent="center">
            <a href="#">
              <ShoppingBag size={iconSize} />
            </a>
          </ADFlex>
        </styles.Item>

        <styles.Item>
          <ADText value="Consultar pedido" variant={titleVariant} />
          <ADFlex gap={5} alignItems="center" justifContent="center">
            <a href="#">
              <Box size={iconSize} />
            </a>
          </ADFlex>
        </styles.Item>
      </ADGrid>
    </styles.Container>
  );
};
