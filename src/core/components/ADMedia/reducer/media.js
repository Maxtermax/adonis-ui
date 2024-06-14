import { SELECT_IMAGE } from "constants";
import { getImageById, getSelectedImage } from "ADMedia/queries/media";

export default function media(state, action) {
  const actions = {
    [SELECT_IMAGE]: () => {
      const { imageId } = action.payload.value;
      const image = getImageById(state.images, imageId);
      const prevImage = getSelectedImage(state.images);
      if (prevImage) prevImage.selected = false;
      image.selected = true;
      return state;
    },
  };
  return actions[action.type]?.();
}
