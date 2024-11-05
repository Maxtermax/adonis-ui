import _ from "lodash";
const { get } = _;

export const getHasReachedLastItem = (store) =>
  store.query(({ state = {} }) => {
    return get(state, "hasReachedLastItem", false);
  });

export const getLastItem = (store) =>
  store.query(({ state = {} }) => get(state, "data", []).at(-1));

export const getCarousellData = (store) =>
  store.query(({ state = {} }) => get(state, "data", []));

export const getIsMobile = (store) =>
  store.query(({ state = {} }) => get(state, "isMobile", false));

export const getIsLoading = (store) =>
  store.query(({ state = {} }) => get(state, "isLoading", false));
