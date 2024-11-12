export const actions = {
  SELECT_IMAGE: "SELECT_IMAGE",
};

export const productReducer = (state, action) => {
  const actionsMap = {
    [actions.SELECT_IMAGE]: () => {
      state.data = state.data.map((item) => {
        item.selected = String(item.id) === String(action.payload.value);
        return item;
      });
      return state;
    },
  };
  return actionsMap[action.type]?.();
};
