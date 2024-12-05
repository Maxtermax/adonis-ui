import {
  datasourceMicroStore,
  DATASOURCE,
} from "@/core/hooks/useDataSource/store";

export const getTotalProducts = () => {
  const products = datasourceMicroStore.get(DATASOURCE).state.products;
  return products.length; 
};



export const getTotalPrice = () => {
  const products = datasourceMicroStore.get(DATASOURCE).state.products;
  return products.reduce(
    (acc, { price, amount = 1 }) => acc + amount * price,
    0,
  );
};
