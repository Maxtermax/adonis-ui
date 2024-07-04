import { useMutations } from "hermes-io";
import { COMPLETE_STEP, FAIL_STEP, PENDING_STEP } from "constants";

export const useStep = (initialState, { storeId, id }) => {
  const { state } = useMutations({
    initialState: { ...initialState },
    noUpdate: true,
    events: [COMPLETE_STEP, FAIL_STEP, PENDING_STEP],
    onChange: ({ step }, _, setNoUpdate) => {
      if (!step) return setNoUpdate(true);
      const noUpdate = step.id !== id;
      setNoUpdate(noUpdate);
      return step;
    },
    store: microSteps,
    id: storeId,
  });
  return state;
};
