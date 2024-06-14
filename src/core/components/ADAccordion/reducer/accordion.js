import { SET_PANEL_STATE, ACCORDION_PANEL } from "constants";
import map from "utils/map";

export default function accordion(state, action) {
  const actions = {
    [SET_PANEL_STATE]: () => {
      return map(
        state,
        ({ type, id }) => type === ACCORDION_PANEL && id === action.payload.id,
        { isExpanded: action.payload.value.isExpanded },
      );
    },
  };
  return actions[action.type]?.();
}
