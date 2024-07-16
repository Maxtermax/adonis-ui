import { events } from "ADOverlay/reducer/overlay";

export const setOpen = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: events.SET_DISPLAY,
    payload: { value },
  });
