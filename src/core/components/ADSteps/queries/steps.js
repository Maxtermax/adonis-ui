import find from "lodash/find";

export const getStep = (store, id) =>
  store.query(({ state }) => find(state.steps, ["id", id]));

export const getSteps = (store) => store.query(({ state }) => state.steps);

export const getNextPendingStep = (store) =>
  store.query(({ state }) => find(state.steps, ["status", "pending"]));

export const getLastStepCompleted = (store) =>
  store.query(({ state }) => state.lastStepCompleted);
