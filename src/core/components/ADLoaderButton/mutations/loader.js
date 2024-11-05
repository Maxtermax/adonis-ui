import { actions } from "../reducer";

export const setLoader = ({ store, targets = [], value }) =>
  store.mutate({
    targets,
    type: actions.SET_LOADER,
    payload: { value },
  });

