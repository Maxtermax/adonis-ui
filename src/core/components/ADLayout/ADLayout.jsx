import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useTheme, withTheme } from "@emotion/react";
import { useObservableStore, useMutations } from "hermes-io";
import ADButton from "ADButton";
import ADText from "ADText";
import ADPanel from "ADPanel";
import ADGrid, { ADGridCol } from "ADGrid";
import { FOCUS_OPTION, BLUR_OPTION } from "constants";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { layoutMicroStore, id } from "./store/layout";
import * as mutations from "./mutations/layout";
import layoutReducer from "./reducer/layout";
import * as styles from "./styles";

const ADLayoutCart = withTheme(({ theme }) => (
  <ADButton className="ad-cart" variant="text">
    <ShoppingCart
      color="inherit"
      size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.extra)}
    />
  </ADButton>
));

const ADLayoutSearch = withTheme(({ theme }) => (
  <ADButton className="ad-layout__header-search" variant="text">
    <MagnifyingGlass
      color="inherit"
      size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.big)}
    />
  </ADButton>
));

const ADLayoutSubMenu = () => {
  const { state, onEvent } = useMutations({
    initialState: { isOpen: false, focus: "" },
    store: layoutMicroStore,
    id,
  });

  onEvent(FOCUS_OPTION, (value = {}) => {
    return {
      isOpen: true,
      focus: value.focus ?? "",
    };
  });

  onEvent(BLUR_OPTION, (value = {}) => {
    return {
      isOpen: false,
      focus: value?.focus ?? "",
    };
  });

  if (!state.isOpen) return null;
  return (
    <styles.SubMenu className="ad-layout-submenu">
      <ADPanel variant="flat">Sub Menu: {state.focus}</ADPanel>
    </styles.SubMenu>
  );
};

const Option = (props = {}) => {
  const { state } = useMutations({
    initialState: { focus: "" },
    events: [FOCUS_OPTION, BLUR_OPTION],
    onChange: (value) => ({ focus: value?.focus ?? "" }),
    store: layoutMicroStore,
    id,
  });

  const handleEnter = (focus = "") => {
    console.log(focus);
    const store = layoutMicroStore.get(id);
    mutations.blurOption(store, [id]);
    mutations.focusOption(store, { focus }, [id]);
  };
  const isSelected = state.focus === props.id;

  return (
    <styles.Item isSelected={isSelected}>
      <ADButton onMouseEnter={() => handleEnter(props.id)} variant="text">
        <ADText value={props.name} variant="subtitle" />
      </ADButton>
    </styles.Item>
  );
};

const options = [
  {
    name: "Recientes",
    id: "recents",
  },
  {
    name: "Categorias",
    id: "categories",
  },
  {
    name: "Ofertas",
    id: "offers",
  },
];

export const ADLayoutHeader = () => {
  const theme = useTheme();
  useObservableStore(
    id,
    { header: { focus: "" } },
    layoutReducer,
    layoutMicroStore,
  );

  const handleLeave = () => {
    document?.startViewTransition?.(() =>
      mutations.blurOption(layoutMicroStore.get(id), [id]),
    );
  };

  const cart = <ADLayoutCart />;
  const search = <ADLayoutSearch />;

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
            <styles.Item>
              <ADButton className="ad-layout__header-menu" variant="text">
                <Menu color="inherit" size={28} />
              </ADButton>
            </styles.Item>
          </ADGridCol>

          <ADGridCol
            sm={{
              "& .ad-text-heading": {
                fontSize: theme.fonts.sizes.medium,
              },
            }}
          >
            <ADText value="ADONIS URBAN" variant="heading" />
          </ADGridCol>

          <ADGridCol role="list" md={{ display: "none" }}>
            {options.map(({ id, ...rest }) => (
              <Option key={id} id={id} {...rest} />
            ))}
            <styles.Item>{search}</styles.Item>
            <styles.Item>{cart}</styles.Item>
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
            <styles.Item>{cart}</styles.Item>
            <styles.Item>{search}</styles.Item>
          </ADGridCol>
        </ADGrid>
      </styles.Header>
      <ADLayoutSubMenu />
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
