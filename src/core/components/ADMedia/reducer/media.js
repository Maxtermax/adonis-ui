import { getImageById, getSelectedImage } from "ADMedia/queries";

export const actions = {
  SELECT_IMAGE: "SELECT_IMAGE",
  SELECT_SIZE: "SELECT_SIZE",
  SET_PAUSED: "SET_PAUSED",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SELECT_IMAGE]: () => {
      const { imageId } = action.payload.value;
      const image = getImageById(state.images, imageId);
      const prevImage = getSelectedImage(state.images);
      if (prevImage) prevImage.selected = false;
      image.selected = true;
      return state;
    },
    [actions.SELECT_SIZE]: () => {
      state.size = action.payload.value.size;
      return state;
    },
    [actions.SET_PAUSED]: () => {
      state.isPaused = action.payload.value;
      return state;
    },
  };
  return actionsMap[action.type]?.();
};
