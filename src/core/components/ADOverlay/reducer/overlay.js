export const events = {
  SET_DISPLAY: "SET_DISPLAY",
};

export default function overlay(state, action) {
  const actions = {
    [events.SET_DISPLAY]: () => {
      state.isOpen = action.payload.value;
    }
  };
  return actions[action.type]?.();
}
