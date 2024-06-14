import { useMutations } from "hermes-io";
import { SET_PANEL_STATE } from "constants";

export default function usePanel({ initialState, store, id }) {
  const { state } = useMutations({
    events: [SET_PANEL_STATE],
    initialState,
    onChange: (event) => ({ isExpanded: event.isExpanded }),
    store,
    id,
  });
  return state;
}
