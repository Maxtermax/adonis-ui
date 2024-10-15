import React from "react";
import { useMutations } from "hermes-io";
import _ from "lodash";
import ADLayout, {
  ADLayoutHeader,
  ADLayoutBody,
  ADLayoutCategories,
  ADLayoutSectionTitle
} from "ADLayout";
import { SEARCH_TEXT_FIELD } from "ADLayout/components/ADLayoutSearch";
import { microTextFieldStore } from "ADTextField/store";
import { actions as layoutActions } from "ADLayout/reducer";
import { completeSearch } from "ADLayout/mutations";
import ADCarousell from "ADCarousell";
import { actions as carousellActions } from "ADCarousell/reducer";
import { newPage } from "ADCarousell/mutations";
import { microCarousellStore } from "ADCarousell/store";
import mock from "ADMedia/mock";

const { uniqueId } = _;

const getProducts = (total) =>
  new Array(total).fill(null).map(() => {
    const uniq = uniqueId();
    return { ...mock, id: uniq };
  });

const recommendations = getProducts(5);
const products = getProducts(10);

export default {
  title: "Basic/ADLayout",
  component: ADLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Carousell = ({ id = "carousell" }) => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: microCarousellStore,
    id,
  });

  onEvent(carousellActions.NEXT_PAGE, (_, resolver) => {
    setTimeout(() => {
      resolver();
      newPage({
        value: new Array(5).fill(null).map(() => {
          const uniq = uniqueId();
          return {
            ...mock,
            id: uniq,
          };
        }),
        store: microCarousellStore.get(id),
        id,
      });
    }, 1000);
  });

  return <ADCarousell id={id} data={recommendations} />;
};

const Template = () => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: microTextFieldStore,
    id: SEARCH_TEXT_FIELD,
  });

  onEvent(layoutActions.START_SEARCH, () => {
    setTimeout(() => {
      completeSearch(microTextFieldStore, SEARCH_TEXT_FIELD, [
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
          ],
        },
        {
          id: "low",
          name: "Prendas inferiores",
          products: [
            {
              name: "Producto",
              price: 10000,
              discount: 0.5,
              thubmnail:
                "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
              id: 4,
            },
            {
              name: "Producto 2",
              price: 10000,
              discount: 0.5,
              thubmnail:
                "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
              id: 5,
            },
          ],
        },
      ]);
    }, 1000);
  });

  return (
    <ADLayout
      body={() => (
        <ADLayoutBody>
          <ADLayoutCategories
            collections={[
              {
                id: "collections-1",
                src: "https://placehold.co/1200x700",
                title: "collections-1",
                link: "#",
              },
              {
                id: "collections-2",
                src: "https://placehold.co/1200x700",
                title: "collections-2",
                link: "#",
              },
              {
                id: "collections-3",
                src: "https://placehold.co/1200x700",
                title: "collections-3",
                link: "#",
              },
            ]}
            sets={[
              {
                id: "sets-1",
                src: "https://placehold.co/1200x700",
                title: "sets-1",
                link: "#",
              },
              {
                id: "sets-2",
                src: "https://placehold.co/1200x700",
                title: "sets-2",
                link: "#",
              },
              {
                id: "sets-3",
                src: "https://placehold.co/1200x700",
                title: "sets-3",
                link: "#",
              },
            ]}
            trends={[
              {
                id: "trends-1",
                src: "https://placehold.co/1700x800",
                title: "trends-1",
                link: "#",
              },
              {
                id: "trends-2",
                src: "https://placehold.co/1700x800",
                title: "trends-2",
                link: "#",
              },
              {
                id: "trends-3",
                src: "https://placehold.co/1700x800",
                title: "trends-3",
                link: "#",
              },
            ]}
          />
          <ADLayoutSectionTitle
            title="Tendencias"
            subtitle="¡Lo ultimo en guaracha 🔥!"
          />
          <Carousell id="1" />

          {/*
            
         
          <ADLayoutCategories
            collections={[
              {
                id: "collections-1",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "collections-2",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "collections-3",
                src: "https://placehold.co/1200x700",
              },
            ]}
            sets={[
              {
                id: "sets-1",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "sets-2",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "sets-3",
                src: "https://placehold.co/1200x700",
              },
            ]}
            offerts={[
              {
                id: "offerts-1",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "offerts-2",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "offerts-3",
                src: "https://placehold.co/1200x700",
              },
            ]}
            trends={[
              {
                id: "trends-1",
                src: "https://placehold.co/1700x800",
              },
              {
                id: "trends-2",
                src: "https://placehold.co/1700x800",
              },
              {
                id: "trends-3",
                src: "https://placehold.co/1700x800",
              },
            ]}
            exclusives={[
              {
                id: "exclusives-1",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "exclusives-2",
                src: "https://placehold.co/1200x700",
              },
              {
                id: "exclusives-3",
                src: "https://placehold.co/1200x700",
              },
            ]}
          />
          <ADPanel
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
            variant="flat"
          >
            <Carousell id="2" />
            <Carousell id="3" />
          </ADPanel>
            */}
          {/* 
          <ADProductsGrid data={products} />
          <ADLayoutSectionTitle
            title="Descuentos"
            subtitle="No te pierdas!!! 😉"
          />
          <ADProductsGrid data={products} />

          <ADLayoutSectionTitle
            title="Conjuntos"
            subtitle="Vistelo en conjunto 😍"
          />
          <ADProductsGrid data={products} />

          <ADLayoutSectionTitle
            title="Colecciones"
            subtitle="¡Las coleciones mas parchadas 🔥!"
          />
          <ADProductsGrid data={products} />
            */}
        </ADLayoutBody>
      )}
      header={() => (
        <ADLayoutHeader
          list={[
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
          ]}
          recommendations={[
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
          ]}
          sublist={{
            recents: [
              {
                name: "Recientes",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 0,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 1,
                  },
                  {
                    name: "Item 3",
                    link: "#",
                    ix: 2,
                  },
                ],
              },
              {
                name: "Recientes 2",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 3,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 4,
                  },
                  {
                    name: "Item 3",
                    link: "#",
                    ix: 5,
                  },
                ],
              },
              {
                name: "Recientes 3",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 4,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 5,
                  },
                ],
              },
            ],
            categories: [
              {
                name: "Recientes",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 0,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 1,
                  },
                  {
                    name: "Item 3",
                    link: "#",
                    ix: 2,
                  },
                ],
              },
              {
                name: "Recientes 2",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 3,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 4,
                  },
                  {
                    name: "Item 3",
                    link: "#",
                    ix: 5,
                  },
                ],
              },
              {
                name: "Recientes 3",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 4,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 5,
                  },
                ],
              },
            ],
            offers: [
              {
                name: "Recientes",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 0,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 1,
                  },
                  {
                    name: "Item 3",
                    link: "#",
                    ix: 2,
                  },
                ],
              },
              {
                name: "Recientes 2",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 3,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 4,
                  },
                  {
                    name: "Item 3",
                    link: "#",
                    ix: 5,
                  },
                ],
              },
              {
                name: "Recientes 3",
                items: [
                  {
                    name: "Item 1",
                    link: "#",
                    ix: 4,
                  },
                  {
                    name: "Item 2",
                    link: "#",
                    ix: 5,
                  },
                ],
              },
            ],
          }}
        />
      )}
    />
  );
};

export const Default = Template.bind({});
