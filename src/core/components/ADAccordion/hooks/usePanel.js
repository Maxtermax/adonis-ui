import { useMutations } from "hermes-io";
import { actions } from "ADAccordion/reducer";

export default function usePanel({ initialState, store, id }) {
  const { state } = useMutations({
    events: [actions.SET_PANEL_STATE],
    initialState,
    onChange: (event) => ({ isExpanded: event.isExpanded }),
    store,
    id,
  });
  return state;
}
