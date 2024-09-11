import { FOCUS_OPTION, BLUR_OPTION } from "constants";

export const blurOption = (store, targets = []) => {
  return store.mutate({
    type: BLUR_OPTION,
    targets,
    payload: { value: "" },
  });
};

export const focusOption = (store, value, targets = []) => {
  return store.mutate({
    type: FOCUS_OPTION,
    targets,
    payload: { value },
  });
};
