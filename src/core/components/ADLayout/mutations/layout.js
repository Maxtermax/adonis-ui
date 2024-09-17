export const actions = {
  FOCUS_OPTION: "FOCUS_OPTION",
  BLUR_OPTION: "BLUR_OPTION",
  BLUR_LAYOUT_BODY: "BLUR_LAYOUT_BODY",
};

export const blurLayoutBackground = (store, targets = []) => {
  return store.mutate({
    type: actions.BLUR_LAYOUT_BODY,
    targets,
    payload: {},
  });
};

export const blurOption = (store, targets = []) => {
  return store.mutate({
    type: actions.BLUR_OPTION,
    targets,
    payload: { value: "" },
  });
};

export const focusOption = (store, value, targets = []) => {
  return store.mutate({
    type: actions.FOCUS_OPTION,
    targets,
    payload: { value },
  });
};
