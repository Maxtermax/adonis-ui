import { actions } from "ADOverlay/reducer";

export const setOpen = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: actions.SET_DISPLAY,
    payload: { value },
  });
