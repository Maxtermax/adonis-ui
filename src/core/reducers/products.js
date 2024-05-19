import { SELECT_IMAGE } from "constants";
import {
  getProductById,
  getImageById,
  getSelectedImage,
} from "queries/products";
import store from "store/app";

window.store = store;

export default function products(state, action) {
  const actions = {
    [SELECT_IMAGE]: () => {
      const { imageId, productId } = action.payload.value;
      const product = store.query((store) => getProductById(store, productId));
      const image = getImageById(product.images, imageId);
      const prevImage = getSelectedImage(product.images);
      if (prevImage) prevImage.selected = false; 
      image.selected = true;
      return state;
    },
  };
  return actions[action.type]?.();
}
