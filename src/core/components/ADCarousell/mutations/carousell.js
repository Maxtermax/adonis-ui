import { actions } from "ADCarousell/reducer";

export const setLoader = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.LOADING,
    payload: { value },
  });

export const setIsMobile = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.MOBILE_LAYOUT,
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

export const setHasReachedLastItem = ({ store, id, value }) => {
  return store.mutate({
    targets: [id],
    type: actions.HAS_REACHED_LAST_ITEM,
    payload: { value },
  });
}

export const focusNextItem = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.FOCUS_NEXT_ITEM,
    payload: { value },
  });

export const updateUINextPage = ({ store, id }) =>
  store.mutate({
    targets: [id],
    type: actions.UPDATE_UI_NEXT_PAGE,
    payload: {},
  });
