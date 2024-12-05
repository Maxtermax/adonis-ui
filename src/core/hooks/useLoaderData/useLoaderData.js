import { useMutations } from "hermes-io";
import { DATASOURCE, datasourceMicroStore } from "../useDataSource/store";
import { actions } from "../useDataSource/reducer";

export const useLoaderData = () => {
  const { state, onEvent } = useMutations({
    initialState: { isLoading: true, error: null, data: null },
    store: datasourceMicroStore,
    id: DATASOURCE,
  });
  return { actions, state, onEvent };
};
