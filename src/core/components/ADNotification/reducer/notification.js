export const actions = {
  SET_OPEN: "SET_OPEN",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SET_OPEN]: () => {
      state.isOpen = action.payload.value;
      return state;
    }
  };
  return actionsMap[action.type]?.();
}
