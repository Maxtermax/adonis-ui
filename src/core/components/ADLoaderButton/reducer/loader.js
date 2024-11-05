export const actions = {
  SET_LOADER: "SET_LOADER",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SET_LOADER]: () => {
      state.isLoading = action.payload.value;
      return state;
    },
  };
  return actionsMap[action.type]?.();
}

