import React, { useRef } from "react";
import ADButton from "ADButton";
import ADText from "ADText";
import ADPanel from "ADPanel";
import ADGrid, { ADGridCol } from "ADGrid";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { LayoutGrid } from "@styled-icons/remix-fill/LayoutGrid";
import * as styles from "./styles";

const ADCart = () => (
  <ADButton className="ad-cart" variant="text">
    <ShoppingCart color="inherit" size={28} />
  </ADButton>
);

export const ADLayoutHeader = () => {
  const menuDetailRef = useRef(null);
  const cart = <ADCart />;
  const handleEnter = () => {
    const node = menuDetailRef.current;
    node.style.visibility = "visible";
  };

  const handleLeave = () => {
    const node = menuDetailRef.current;
    node.style.visibility = "hidden";
  };

  return (
    <styles.HeaderContainer>
      <styles.Header className="ad-layout-header">
        <ADGrid
          fullWidth
          md={{ cols: 3, rows: 1, gap: "0px" }}
          cols={"repeat(3, 1fr)"}
          rows={1}
        >
          <ADGridCol md={{ display: "none" }} />

          <ADGridCol md={{ display: "flex" }} lg={{ display: "none" }}>
            <LayoutGrid size={28} />
          </ADGridCol>

          <ADGridCol>
            <ADText value="ADONIS URBAN" variant="heading" />
          </ADGridCol>

          <ADGridCol role="list" md={{ display: "none" }}>
            <styles.Item>
              <ADButton
                onMouseLeave={handleLeave}
                onMouseEnter={handleEnter}
                variant="text"
              >
                <ADText value="Reciente" variant="subtitle" />
              </ADButton>
            </styles.Item>

            <styles.Item>
              <ADButton
                onMouseLeave={handleLeave}
                onMouseEnter={handleEnter}
                variant="text"
              >
                <ADText value="Categorias" variant="subtitle" />
              </ADButton>
            </styles.Item>

            <styles.Item>
              <ADButton
                onMouseLeave={handleLeave}
                onMouseEnter={handleEnter}
                variant="text"
              >
                <ADText value="Colecciones" variant="subtitle" />
              </ADButton>
            </styles.Item>

            <styles.Item>
              <ADButton
                onMouseLeave={handleLeave}
                onMouseEnter={handleEnter}
                variant="text"
              >
                <ADText value="Ofertas" variant="subtitle" />
              </ADButton>
            </styles.Item>

            <styles.Item>{cart}</styles.Item>
          </ADGridCol>

          <ADGridCol md={{ display: "flex" }} lg={{ display: "none" }}>
            <styles.Item>{cart}</styles.Item>
          </ADGridCol>
        </ADGrid>
      </styles.Header>

      <styles.SubMenu className="ad-layout-submenu">
        <ADPanel>Menu</ADPanel>
      </styles.SubMenu>
    </styles.HeaderContainer>
  );
};

export const ADLayout = function ADLayout({ header, footer, content }) {
  return (
    <styles.Container>
      {header?.() ?? null}
      {content?.() ?? null}
      {footer?.() ?? null}
    </styles.Container>
  );
};
