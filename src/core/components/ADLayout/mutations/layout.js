import { FOCUS_OPTION, BLUR_OPTION, BLUR_LAYOUT_BODY } from "constants";

export const blurLayoutBackground = (store, targets = []) => {
  return store.mutate({
    type: BLUR_LAYOUT_BODY,
    targets,
    payload: {},
  });
};

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
