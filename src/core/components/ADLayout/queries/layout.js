import get from "lodash/get";

export const getIsOpen = (store) =>
  get(store.state, "header.focus", "") !== "";
