import find from "lodash/find";

export const getStep = (store, id) =>
  store.query(({ state }) => find(state, ["id", id]));

export const getNextPendingStep = (store) =>
  store.query(({ state }) => find(state, ["completed", false]));
