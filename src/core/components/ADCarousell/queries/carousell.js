import _ from "lodash";
const { get } = _;

export const getHasReachedLastItem = (store) =>
  store.query(({ state = {} }) => get(state, "hasReachedLastItem", false));

export const getLastItem = (store) =>
  store.query(({ state = {} }) => get(state, "data", []).at(-1));

export const getCarousellData = (store) =>
  store.query(({ state = {} }) => get(state, "data", []));
