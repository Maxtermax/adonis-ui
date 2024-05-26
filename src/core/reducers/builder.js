import { SET_THEME, SAVE_THEME } from "constants";

export default function builder(state, action) {
  const actions = {
    [SET_THEME]: () => {
      console.log("SET THEME");
      return state;
    },
    [SAVE_THEME]: () => {
      console.log("SAVE THEME");
      return state;
    },
  };
  return actions[action.type]?.();
}
