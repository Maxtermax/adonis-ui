import { FOCUS_OPTION, BLUR_OPTION } from "constants";

export const blurOption = (store, targets = []) => {
  store.mutate({
    type: BLUR_OPTION,
    targets,
    payload: { value: '' },
  });
};

export const focusOption = (store, value, targets = []) => {
  store.mutate({
    type: FOCUS_OPTION,
    targets,
    payload: { value },
  });
};
