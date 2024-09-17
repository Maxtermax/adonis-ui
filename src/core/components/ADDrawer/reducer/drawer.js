export const actions = {
  SET_DRAWER_OPEN: "SET_DRAWER_OPEN",
};

export default function reducer(state, action) {
  const actionsMap = {
    [actions.SET_DRAWER_OPEN]: () => {
      state.isOpen = action.payload.value;
      return state;
    },
  };
  return actionsMap[action.type]?.();
}
