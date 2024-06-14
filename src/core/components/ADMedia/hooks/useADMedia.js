import { useMutations } from "hermes-io";
import find from "lodash/find";
// import { getImageByThumbnail, getNextImage } from "queries/products";
// import { selectImage } from "mutations/products";
import { mediaStore } from "ADMedia/store/media";
import { SELECT_IMAGE } from "constants";

export const useADMedia = (images, id) => {
  const handleUseADMediaNotification = ({ imageId }) => {
    const image = find(images, ({ id }) => imageId === id) ?? {};
    return { image };
  };

  const { state } = useMutations({
    events: [SELECT_IMAGE],
    onChange: handleUseADMediaNotification,
    initialState: { image: images[0] },
    store: mediaStore,
    id,
  });
  return state.image;
};
