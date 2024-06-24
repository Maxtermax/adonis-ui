import { SET_DRAWER_OPEN } from "constants";

export default function drawer(state, action) {
  const actions = {
    [SET_DRAWER_OPEN]: () => {
      state.isOpen = action.payload.value;
      return state;
    },
  };
  return actions[action.type]?.();
}
