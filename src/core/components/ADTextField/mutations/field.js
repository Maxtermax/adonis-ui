import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADTextField/reducer";

export const fireSearch = (id) => {
  const store = microTextFieldStore.get(id);
  store.mutate({
    type: actions.SEARCH_START,
    targets: [id],
    payload: {},
  });
} 

export const disableInput = (id, value) => {
  const store = microTextFieldStore.get(id);
  store.mutate({
    type: actions.DISABLED,
    targets: [id],
    payload: {
      value,
    },
  });
};

export const fireChangeEvent = (id, value) => {
  const store = microTextFieldStore.get(id);
  console.log("FIRE CHANGE");
  store.mutate({
    type: actions.CHANGE,
    targets: [id],
    payload: {
      value,
    },
  });
};

export const updateValue = (id, value) => {
  const store = microTextFieldStore.get(id);
  store.mutate({
    type: actions.SET_VALUE,
    targets: [id],
    payload: {
      value,
    },
  });
};
