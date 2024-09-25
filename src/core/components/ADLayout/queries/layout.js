import get from "lodash/get";

export const getFocus = (store) => get(store.state, "header.focus", "");

export const getIsOpen = (store) => get(store.state, "header.focus", "") !== "";
