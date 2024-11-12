import { actions } from "../reducer";

export const setFocusImage = ({ store, targets = [], value }) => {
  return store.mutate({
    targets,
    type: actions.SELECT_IMAGE,
    payload: { value },
  });
}
