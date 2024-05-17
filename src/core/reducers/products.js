// import { getProductById } from "queries/products";
// import store from "store/app";
import { SELECT_PRODUCT_VARIATION, SET_PRODUCTS } from "constants";

export default function products(state, action) {
  const actions = {
    [SELECT_PRODUCT_VARIATION]: () => {
      // const thumbnail = action.payload.value; 
      // const { id: thumbnailId, productId } = thumbnail; 
      // const d = store.query(() => getProductById(state, productId))
      debugger;
      return state;
    },
    [SET_PRODUCTS]: (products = []) => {
      console.log('ENTRA: ', products);
      return state.products = products;
    } 
  }
  return actions[action.type]?.();
}
