import { SET_DRAWER_OPEN } from "constants";

export const setOpen = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: SET_DRAWER_OPEN,
    payload: { value },
  });
