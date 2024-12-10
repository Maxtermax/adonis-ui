import { useMutations } from "hermes-io";
import { DATASOURCE, datasourceMicroStore } from "../useDataSource/store";
import {
  getRecommendations,
  getTotalProducts,
  getProducts,
} from "@/core/hooks/useDataSource/queries";
import { actions } from "@/core/hooks/useDataSource/reducer";

export const useLoaderData = (watch = "") => {
  const fieldsHashMap = {
    recommendations: () => getRecommendations(),
    total: () => getTotalProducts(),
    products: () => getProducts(),
  };

  const buildInitialState = () => {
    const initialState = { isLoading: true, error: null, data: null };
    const data = fieldsHashMap[watch]?.();
    const isLoading = data === undefined || data === null;
    initialState.isLoading = isLoading;
    initialState.data = data;
    return initialState;
  };

  const { state, onEvent } = useMutations({
    initialState: buildInitialState(),
    store: datasourceMicroStore,
    id: DATASOURCE,
  });
  return { actions, state, onEvent };
};
