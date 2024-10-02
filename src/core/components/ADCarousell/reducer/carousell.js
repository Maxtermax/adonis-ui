export const actions = {
  NEXT_PAGE: "NEXT_PAGE",
  NEW_PAGE: "NEW_PAGE",
  FOCUS_NEXT_PAGE: "FOCUS_NEXT_PAGE", 
  FAIL: "FAIL",
  LOADING: "LOADING",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.NEXT_PAGE]: () => {
      return state;
    },
    [actions.LOADING]: () => {
      state.isLoading = action.payload.value;
      return state;
    },
    [actions.NEW_PAGE]: () => {
      state.data = [...state.data, ...action.payload.value];
      state.page += 1;
      return state;
    },
  };
  return actionsMap[action.type]?.();
}

