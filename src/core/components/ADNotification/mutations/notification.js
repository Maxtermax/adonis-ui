import { actions } from "ADNotification/reducer";

export const setOpen = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.SET_OPEN,
    payload: { value },
  });
