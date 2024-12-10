import React from "react";
import { useMutations } from "hermes-io";
import { uniqueId } from "lodash";
import { microCarousellStore } from "ADCarousell/store";
import { newPage } from "ADCarousell/mutations";
import { getProducts } from "../../../mocks";
import ADCarousell from "ADCarousell";
import { actions as carousellActions } from "ADCarousell/reducer";

const recommendations = getProducts(5);

export const Carousell = ({ id = "carousell" }) => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: microCarousellStore,
    id,
  });

  onEvent(carousellActions.NEXT_PAGE, (_, resolver) => {
    const [product] = getProducts(1);
    setTimeout(() => {
      resolver();
      newPage({
        value: new Array(5).fill(null).map(() => {
          const uniq = uniqueId();
          return {
            ...product,
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
