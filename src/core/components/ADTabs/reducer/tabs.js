import { FOCUS_TAB } from "constants";

export default function tabs(state, action) {
  const actions = {
    [FOCUS_TAB]: () => {
      state.focus = action.payload.value;
      return state;
    },
  };
  return actions[action.type]?.();
}

