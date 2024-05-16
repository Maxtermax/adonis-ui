import store from "store/app";
import { SELECT_PRODUCT_VARIATION, SELECT_PRODUCTS } from "constants";

export const selectProductThumbnail = (targets = [], id) => {
  store.mutate({
    type: SELECT_PRODUCT_VARIATION,
    targets,
    payload: { value: id },
  });
};

export const setProducts = (products) => {
  store.mutate({
    type: SELECT_PRODUCTS,
    payload: { value: products },
  });
};

