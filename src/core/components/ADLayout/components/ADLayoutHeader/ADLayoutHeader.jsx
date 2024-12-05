import React from "react";
import { useTheme } from "@emotion/react";
import { useObservableStore } from "hermes-io";
import ADDrawer from "ADDrawer";
import ADButton from "ADButton";
import ADShoppingCart from "../ADShoppingCart";
import ADGrid, { ADGridCol } from "ADGrid";
import { Menu } from "@styled-icons/feather/Menu";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import ADLayoutSubMenu from "ADLayout/components/ADLayoutSubMenu";
import ADLayoutCart from "ADLayout/components/ADLayoutCart";
import ADLayoutSearch from "ADLayout/components/ADLayoutSearch";
import ADLayoutOption, {
  ADLayoutItem,
} from "ADLayout/components/ADLayoutOption";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import { reducer } from "ADLayout/reducer";
import * as mutations from "ADLayout/mutations/layout";
import * as queries from "ADLayout/queries/layout";
import * as styles from "./styles";
import useMediaQuery from "@/core/hooks/useMediaQuery";

const id = "shopping-cart-drawer";

export const ADLayoutHeader = ({ list = [], sublist = null }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  useObservableStore(
    LAYOUT_HEADER_STORE,
    { header: { focus: "" } },
    reducer,
    layoutMicroStore,
  );

  const handleLeave = async () => {
    const store = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    const isOpen = queries.getIsOpen(store);
    if (!isOpen) return;
    mutations.blurOption(layoutMicroStore.get(LAYOUT_HEADER_STORE), [
      LAYOUT_HEADER_STORE,
    ]);
  };

  const handleOpenCart = () => {
    const store = drawerMicroStore.get(id);
    setOpen({ store, id, value: true });
  };

  const handleCloseCart = () => {
    const store = drawerMicroStore.get(id);
    setOpen({ store, id, value: false });
  };

  const cart = <ADLayoutCart onOpen={handleOpenCart} />;
  const search = <ADLayoutSearch />;

  return (
    <styles.HeaderContainer onMouseLeave={handleLeave}>
      <styles.Header className="ad-layout__header">
        <ADGrid
          fullWidth
          md={{ cols: 3, rows: 1, gap: "0px" }}
          sm={{
            gridTemplateColumns: "80px minmax(167px, 1fr) 150px",
          }}
          cols={"repeat(3, 1fr)"}
          rows={1}
        >
          <ADGridCol className="ad-grid-col" md={{ display: "none" }} />

          <ADGridCol
            className="ad-grid-col"
            md={{ display: "flex" }}
            lg={{ display: "none" }}
          >
            <ADLayoutItem>
              <ADButton className="ad-layout__header-menu" variant="text">
                <Menu color="inherit" size={28} />
              </ADButton>
            </ADLayoutItem>
          </ADGridCol>

          <ADGridCol
            className="ad-grid-col"
            sm={{
              "& .ad-text-heading": {
                fontSize: theme.fonts.sizes.medium,
              },
            }}
          >
            <styles.Logo />
          </ADGridCol>

          <ADGridCol
            className="ad-grid-col"
            role="list"
            md={{ display: "none" }}
          >
            <ADLayoutOption data={list} />
            <ADLayoutItem>{!isMobile ? search : null}</ADLayoutItem>
            <ADLayoutItem>{!isMobile ? cart : null}</ADLayoutItem>
          </ADGridCol>

          <ADGridCol
            sm={{
              gap: theme.spacing.calc(2),
              maxWidth: "130px",
              marginRight: theme.spacing.calc(2),
              justifyContent: "space-evenly",
            }}
            md={{ display: "flex" }}
            lg={{ display: "none" }}
          >
            <ADLayoutItem>{isMobile ? search : null}</ADLayoutItem>
            <ADLayoutItem>{isMobile ? cart : null}</ADLayoutItem>
          </ADGridCol>
        </ADGrid>
      </styles.Header>
      <ADLayoutSubMenu sublist={sublist} />
      <ADDrawer
        content={
          <ADShoppingCart onClose={handleCloseCart} id="shopping-cart-drawer" />
        }
        height="100%"
        id="shopping-cart-drawer"
        variant="right"
        width="380px"
      />
    </styles.HeaderContainer>
  );
};
