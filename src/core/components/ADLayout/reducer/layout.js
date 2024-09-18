export const actions = {
  BLUR_LAYOUT_BODY: "BLUR_LAYOUT_BODY",
  FOCUS_OPTION: "FOCUS_OPTION",
  BLUR_OPTION: "BLUR_OPTION",
  START_SEARCH: "START_SEARCH",
  SEARCH_COMPLETED: "SEARCH_COMPLETED",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.FOCUS_OPTION]: () => {
      state.header.focus = action.payload.value.focus;
      return state;
    },
    [actions.BLUR_OPTION]: () => {
      state.header.focus = "";
      return state;
    },
    [actions.BLUR_LAYOUT_BODY]: () => {
      return state;
    },
  };
  return actionsMap[action.type]?.();
};
