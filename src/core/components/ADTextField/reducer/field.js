export const actions = {
  SET_VALUE: "SET_VALUE",
  CHANGE: "CHANGE"
};

export default function reducer(state, action) {
  const actionsMap = {
    [actions.SET_VALUE]: () => {
      state.value = action.payload.value;
      return state;
    },
  };
  return actionsMap[action.type]?.();
}

