import {
  datasourceMicroStore,
  DATASOURCE,
} from "@/core/hooks/useDataSource/store";

export const getTotalProducts = () => {
  const products = datasourceMicroStore.get(DATASOURCE)?.state?.products;
  return products?.length;
};

export const getProducts = () => {
  return datasourceMicroStore.get(DATASOURCE)?.state?.products;
};

export const getTotalPrice = () => {
  const products = datasourceMicroStore.get(DATASOURCE).state.products;
  return products.reduce(
    (acc, { price, amount = 1 }) => acc + amount * price,
    0,
  );
};

export const getRecommendations = () => {
  return datasourceMicroStore.get(DATASOURCE)?.state?.recommendations;
};
