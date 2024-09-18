import React from "react";
import { useTheme } from "@emotion/react";
import { useObservableStore } from "hermes-io";
import ADButton from "ADButton";
import ADGrid, { ADGridCol } from "ADGrid";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
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

export const ADLayoutHeader = ({
  list = [],
  sublist = null,
  recommendations = [],
}) => {
  const theme = useTheme();
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

  const cart = <ADLayoutCart />;
  const search = <ADLayoutSearch recommendations={recommendations} />;

  return (
    <styles.HeaderContainer onMouseLeave={handleLeave}>
      <styles.Header className="ad-layout__header">
        <ADGrid
          fullWidth
          md={{ cols: 3, rows: 1, gap: "0px" }}
          sm={{
            gridTemplateColumns: "50px minmax(167px, 1fr) 95px",
          }}
          cols={"repeat(3, 1fr)"}
          rows={1}
        >
          <ADGridCol md={{ display: "none" }} />

          <ADGridCol md={{ display: "flex" }} lg={{ display: "none" }}>
            <ADLayoutItem>
              <ADButton className="ad-layout__header-menu" variant="text">
                <Menu color="inherit" size={28} />
              </ADButton>
            </ADLayoutItem>
          </ADGridCol>

          <ADGridCol
            sm={{
              "& .ad-text-heading": {
                fontSize: theme.fonts.sizes.medium,
              },
            }}
          >
            <styles.Logo />
          </ADGridCol>

          <ADGridCol role="list" md={{ display: "none" }}>
            {list.map(({ id, ...rest }) => (
              <ADLayoutOption key={id} id={id} {...rest} />
            ))}
            <ADLayoutItem>{search}</ADLayoutItem>
            <ADLayoutItem>{cart}</ADLayoutItem>
          </ADGridCol>

          <ADGridCol
            sm={{
              gap: theme.spacing.calc(1),
              maxWidth: "130px",
              "& .ad-button": {
                minWidth: "40px",
              },
            }}
            md={{ display: "flex" }}
            lg={{ display: "none" }}
          >
            <ADLayoutItem>{cart}</ADLayoutItem>
            <ADLayoutItem>{search}</ADLayoutItem>
          </ADGridCol>
        </ADGrid>
      </styles.Header>
      <ADLayoutSubMenu sublist={sublist} />
    </styles.HeaderContainer>
  );
};
