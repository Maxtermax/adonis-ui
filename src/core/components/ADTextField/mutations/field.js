import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADLayout/reducer";
import { actions as textFieldActions } from "ADTextField/reducer";

export const disableInput = (id, value) => {
  const store = microTextFieldStore.get(id);
  store.mutate({
    type: textFieldActions.DISABLED,
    targets: [id],
    payload: {
      value,
    },
  });
};

export const fireChangeEvent = (id, value) => {
  const store = microTextFieldStore.get(id);
  store.mutate({
    type: textFieldActions.CHANGE,
    targets: [id],
    payload: {
      value,
    },
  });
};

export const updateValue = (id, value) => {
  const store = microTextFieldStore.get(id);
  store.mutate({
    type: textFieldActions.SET_VALUE,
    targets: [id],
    payload: {
      value,
    },
  });
};
