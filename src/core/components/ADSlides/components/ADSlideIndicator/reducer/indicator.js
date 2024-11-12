export const actions = {
  SELECT_ITEM: "SELECT_ITEM", 
  SET_PAUSED: "SET_PAUSED",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SELECT_ITEM]: () => {
      state.selectedId = action.payload.value;
      return state;
    },
    [actions.SET_PAUSED]: () => {
      state.isPaused = action.payload.value;  
      return state;
    },
  };
  return actionsMap[action.type]?.();
};
