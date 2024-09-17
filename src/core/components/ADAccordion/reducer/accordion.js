import map from "utils/map";
import { ACCORDION_PANEL } from "constants";

export const actions = {
  SET_PANEL_STATE: "SET_PANEL_STATE",
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SET_PANEL_STATE]: () => {
      return map(
        state,
        ({ type, id }) => type === ACCORDION_PANEL && id === action.payload.id,
        { isExpanded: action.payload.value.isExpanded },
      );
    },
  };
  return actionsMap[action.type]?.();
};
