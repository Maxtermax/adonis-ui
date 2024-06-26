import { SET_THEME_FIELD, SAVE_THEME } from "constants";
import mapKeys from "lodash/mapKeys";

export default function builder(state, action) {
  const actions = {
    [SET_THEME_FIELD]: () => {
      mapKeys(action.payload.targets, (value, key) => {
        state[key] = {
          ...state[key],
          ...value,
        };
      });
      return state;
    },
    [SAVE_THEME]: () => {
      console.log("SAVE THEME");
      return state;
    },
  };
  return actions[action.type]?.();
}
