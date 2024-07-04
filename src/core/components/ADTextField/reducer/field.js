export default function field(state, action) {
  const actions = {
    ["SET_VALUE"]: () => {
      state.value += action.payload.value;
      return state;
    },
  };
  return actions[action.type]?.();
}

