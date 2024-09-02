import { FOCUS_OPTION, BLUR_OPTION } from "constants";

export default function layoutReducer(state, action) {
  const actions = {
    [FOCUS_OPTION]: () => {
      state.header.focus = action.payload.value.focus;
      return state;
    },
    [BLUR_OPTION]: () => {
      state.header.focus = '';
      return state;
    },
  };
  return actions[action.type]?.();
}
