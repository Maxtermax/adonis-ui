export const actions = {
  SET_DISPLAY: "SET_DISPLAY",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SET_DISPLAY]: () => {
      state.isOpen = action.payload.value;
    }
  };
  return actionsMap[action.type]?.();
}
