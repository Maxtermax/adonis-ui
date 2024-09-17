import { actions } from "ADDrawer/reducer";

export const setOpen = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.SET_DRAWER_OPEN,
    payload: { value },
  });
