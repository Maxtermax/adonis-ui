import React from "react";
import { useMutations } from "hermes-io";
import _ from "lodash";
import ADLayout, {
  ADLayoutHeader,
  ADLayoutBody,
  ADLayoutSectionTitle,
} from "ADLayout";
import ADSlides from "ADSlides";
import { SEARCH_TEXT_FIELD } from "ADLayout/components/ADLayoutSearch";
import { microTextFieldStore } from "ADTextField/store";
import { actions as layoutActions } from "ADLayout/reducer";
import { completeSearch } from "ADLayout/mutations";
import ADProductsGrid from "../ADProductsGrid";
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
const products = getProducts(5);

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
          <ADSlides
            data={[
              {
                link: "#",
                id: "1",
                title: "Descuentos",
                subtitle: "!hasta el 50%!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNERS-WEB-01_2048x.jpg?v=1727302066",
              },

              {
                link: "#",
                id: "2",
                title: "Tendencias",
                subtitle: "¡Ultima moda!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNER-NEW_BALANCE-DESKTOP_bf513dc8-4243-432c-9efa-4341f1470bc6_3072x.jpg?v=1721073702",
              },
              {
                link: "#",
                id: "3",
                title: "Conjuntos",
                subtitle: "!Estilo que combina!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/EDITORIAL-FCF100-04.jpg?v=1728743060&width=2048",
              },
            ]}
          />

          <ADLayoutSectionTitle
            title="Tendencias"
            subtitle="¡Lo ultimo en guaracha 🔥!"
          />
          <Carousell id="1" />
          <ADSlides
            data={[
              {
                id: "a-1",
                title: "Descuentos",
                subtitle: "¡Hasta 50% de descuento!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNERS-WEB-01_2048x.jpg?v=1727302066",
              },
            ]}
          />

          <ADProductsGrid data={products} />
          <ADSlides
            data={[
              {
                id: "a-2",
                title: "Conjuntos",
                subtitle: "!Estilo que combina!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/EDITORIAL-FCF100-04.jpg?v=1728743060&width=2048",
              },
            ]}
          />
          <ADProductsGrid data={products} />
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
