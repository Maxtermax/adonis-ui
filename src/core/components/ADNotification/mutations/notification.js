import { events } from "ADNotification/reducer/notification";

export const setOpen = ({ store, id, value }) =>
  store.mutate({
    targets: [id],
    type: events.SET_OPEN,
    payload: { value },
  });
