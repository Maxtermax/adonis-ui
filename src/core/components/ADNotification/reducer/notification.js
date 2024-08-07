export const events = {
  SET_OPEN: "SET_OPEN",
};

export default function notification(state, action) {
  const actions = {
    [events.SET_OPEN]: () => {
      state.isOpen = action.payload.value;
      return state;
    }
  };
  return actions[action.type]?.();
}
