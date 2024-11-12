import { actions } from "../reducer";

export const setFocus = ({ store, targets = [], value }) => {
  return store.mutate({
    targets,
    type: actions.SELECT_ITEM,
    payload: { value },
  });
}
