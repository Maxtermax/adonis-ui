import { SELECT_IMAGE } from "constants";

export const selectImage = (store, targets = [], value) => {
  store.mutate({
    type: SELECT_IMAGE,
    targets,
    payload: { value },
  });
};
