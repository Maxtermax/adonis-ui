import { useMutations } from "hermes-io";
import ADLayout, { ADLayoutHeader, ADLayoutBody } from "ADLayout";
import { SEARCH_TEXT_FIELD } from "ADLayout/components/ADLayoutSearch";
import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADLayout/reducer";
import { completeSearch } from "ADLayout/mutations";

export default {
  title: "Basic/ADLayout",
  component: ADLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = () => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: microTextFieldStore,
    id: SEARCH_TEXT_FIELD,
  });

  onEvent(actions.START_SEARCH, () => {
    console.log("START_SEARCH")
    setTimeout(() => {
      console.log("Complete search");
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
      body={() => <ADLayoutBody />}
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
