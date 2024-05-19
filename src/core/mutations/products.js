import store from "store/app";
import { SELECT_IMAGE } from "constants";

export const selectImage = (targets = [], imageId) => {
  store.mutate({
    type: SELECT_IMAGE,
    targets,
    payload: { value: imageId },
  });
};
