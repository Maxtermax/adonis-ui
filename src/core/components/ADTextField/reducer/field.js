export const actions = {
  SET_VALUE: "SET_VALUE",
  CHANGE: "CHANGE",
  DISABLED: "DISABLED",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SET_VALUE]: () => {
      state.value = action.payload.value;
      return state;
    },
    [actions.DISABLED]: () => {
      state.disabled = action.payload.value;
      return state;
    },
  };
  return actionsMap[action.type]?.();
}

