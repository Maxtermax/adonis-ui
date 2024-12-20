import findIndex from "lodash/findIndex";
import find from "lodash/find";

export const getIsPaused = (store) => store.state.isPaused;

export const getProductById = (store, id) =>
  find(store.state, (product) => product.id === id);

export const getImageById = (images, imageId) =>
  find(images, (image) => image.id === imageId);

export const getSelectedImage = (images) =>
  find(images, (image) => image.selected === true);

export const getImageByThumbnail = (images, thumbnail) =>
  find(images, ({ id }) => id === thumbnail.belongsTo);

export const getNextImage = (images, id) => {
  const index = findIndex(images, (image) => image.id === id);
  const hasFoundIndex = index !== -1;
  if (hasFoundIndex) return images[index + 1];
  return null;
};
