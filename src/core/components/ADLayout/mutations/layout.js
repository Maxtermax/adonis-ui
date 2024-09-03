import { FOCUS_TRANSITION_OPTION, FOCUS_OPTION, BLUR_OPTION } from "constants";

export const blurOption = (store, targets = []) => {
  store.mutate({
    type: BLUR_OPTION,
    targets,
    payload: { value: "" },
  });
};

export const focusOption = (store, value, targets = []) => {
  store.mutate({
    type: FOCUS_OPTION,
    targets,
    payload: { value },
  });
};

export const transitionCompleted = (store, targets = []) => {
  store.mutate({
    type: FOCUS_TRANSITION_OPTION,
    targets,
    payload: {},
  });
};
