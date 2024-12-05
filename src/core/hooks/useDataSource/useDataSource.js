import { useObservableStore } from "hermes-io";
import { reducer } from "./reducer";
import { datasourceMicroStore, DATASOURCE } from "./store";
import { setProducts, setRecommendations } from "./mutations";

export const useDataSource = (datasource) => {
  const { store } = useObservableStore(
    DATASOURCE,
    { products: [], recommendations: [] },
    reducer,
    datasourceMicroStore,
  );
  return {
    setProducts: () =>
      setProducts(store, [DATASOURCE], datasource.getProducts()),
    setRecommendations: () =>
      setRecommendations(store, [DATASOURCE], datasource.getRecommendations()),
  };
};
