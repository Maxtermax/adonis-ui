import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADTextField/reducer";

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
