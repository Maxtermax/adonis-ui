import get from "lodash/get";
import { microTextFieldStore } from "ADTextField/store";

export const getValue = (id) => {
  return microTextFieldStore
    .get(id)
    .query((store) => get(store.state, "value", ""));
};
