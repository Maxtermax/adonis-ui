import { actions } from "ADLayout/reducer"; 

export const completeSearch = (microStore, id, value) => {
  const store = microStore.get(id);
  store.mutate({
    type: actions.SEARCH_COMPLETED,
    targets: [id],
    payload: {
      value,
    },
  });
};

export const fireSearch = (microStore, id) => {
  const store = microStore.get(id);
  store.mutate({
    type: actions.START_SEARCH,
    targets: [id],
    payload: {},
  });
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
