import { actions } from "ADCarousell/reducer";

export const setLoader = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.LOADING,
    payload: { value },
  });

export const nextPage = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.NEXT_PAGE,
    payload: { value },
  });

export const newPage = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.NEW_PAGE,
    payload: { value },
  });


