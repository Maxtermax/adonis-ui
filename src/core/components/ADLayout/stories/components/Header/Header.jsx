import React from "react";
import { useMutations } from "hermes-io";
import { ADLayoutHeader } from "ADLayout";
import { microTextFieldStore } from "ADTextField/store";
import { SEARCH_TEXT_FIELD } from "ADLayout/components/ADLayoutSearch";
import { completeSearch } from "ADLayout/mutations";
import { actions as layoutActions } from "ADLayout/reducer";
import { getProducts } from "../../../mocks";

export const Header = () => {
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
          products: getProducts(25),
        },
        {
          id: "low",
          name: "Prendas inferiores",
          products: getProducts(25),
        },
      ]);
    }, 1000);
  });

  return (
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
  );
};
