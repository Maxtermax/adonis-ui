export const actions = {
  NEXT_PAGE: "NEXT_PAGE",
  NEW_PAGE: "NEW_PAGE",
  FOCUS_NEXT_PAGE: "FOCUS_NEXT_PAGE",
  HAS_REACHED_LAST_ITEM: "HAS_REACHED_LAST_ITEM",
  FOCUS_NEXT_ITEM: "FOCUS_NEXT_ITEM",
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
    [actions.HAS_REACHED_LAST_ITEM]: () => {
      state.hasReachedLastItem = action.payload.value;
      return state;
    },
    [actions.FOCUS_NEXT_ITEM]: () => {
      return state;
    },
  };
  return actionsMap[action.type]?.();
};
