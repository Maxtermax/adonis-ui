import React from "react";
import { useMutations } from "hermes-io";
import ADText from "ADText";
import formatCurrency from "../../../../../../../utils/formatCurrency";
import { actions } from "@/core/hooks/useDataSource/reducer";
import {
  datasourceMicroStore,
  DATASOURCE,
} from "@/core/hooks/useDataSource/store";
import { getTotalPrice } from "@/core/hooks/useDataSource/queries";

export const Total = ({ defaultTotal = 0 }) => {
  const { onEvent, state } = useMutations({
    initialState: { total: defaultTotal },
    store: datasourceMicroStore,
    id: DATASOURCE,
  });

  onEvent(actions.SET_PRODUCT_AMOUNT, () => ({ total: getTotalPrice() }));

  return (
    <ADText value={`TOTAL: ${formatCurrency(state.total)}`} variant="title" />
  );
};
