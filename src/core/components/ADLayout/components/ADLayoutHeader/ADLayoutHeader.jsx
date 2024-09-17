import React from "react";
import { useTheme } from "@emotion/react";
import { useObservableStore } from "hermes-io";
import ADButton from "ADButton";
import ADGrid, { ADGridCol } from "ADGrid";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import ADLayoutSubMenu from "ADLayout/components/ADLayoutSubMenu";
import ADLayoutCart from "ADLayout/components/ADLayoutCart";
import ADLayoutSearch from "ADLayout/components/ADLayoutSearch";
import ADRecommendations from "ADLayout/components/ADRecommendations";
import ADLayoutOption, {
  ADLayoutItem,
} from "ADLayout/components/ADLayoutOption";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store/layout";
import layoutReducer from "ADLayout/reducer/layout";
import * as mutations from "ADLayout/mutations/layout";
import * as queries from "ADLayout/queries/layout";
import * as styles from "./styles";

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

const recommendations = [
  {
    id: "upper",
    name: "Prendas superiores",
    products: [
      {
        name: "Producto",
        price: 10000,
        discount: 0.5,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
        id: 1,
      },
      {
        name: "Producto 2",
        price: 10000,
        discount: 0.5,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 2,
      },
      {
        name: "Producto 3",
        price: 10000,
        discount: 0.5,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 3,
      },
      {
        name: "Producto 4",
        price: 10000,
        discount: 0.5,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 4,
      },
    ],
  },
  {
    id: "bottom",
    name: "Prendas inferiores",
    products: [
      {
        name: "Producto 5",
        price: 10000,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 4,
      },
      {
        name: "Producto 6",
        price: 10000,
        discount: 0,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 5,
      },
      {
        name: "Producto 6",
        price: 10000,
        discount: 0,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 6,
      },
      {
        name: "Producto 7",
        price: 10000,
        discount: 0,
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 7,
      },
    ],
  },
];

export const ADLayoutHeader = () => {
  const theme = useTheme();
  useObservableStore(
    LAYOUT_HEADER_STORE,
    { header: { focus: "" } },
    layoutReducer,
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
  const search = (
    <ADLayoutSearch
      recommendations={<ADRecommendations data={recommendations} />}
    />
  );

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
            {options.map(({ id, ...rest }) => (
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
      <ADLayoutSubMenu />
    </styles.HeaderContainer>
  );
};
