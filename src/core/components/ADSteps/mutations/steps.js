import { COMPLETE_STEP } from "constants";
import { getNextPendingStep } from "ADSteps/queries/steps";

export const completeNextStep = (store, targets) => {
  const step = getNextPendingStep(store);
  const payload = {
    value: {
      step,
    },
  };
  store.mutate({
    type: COMPLETE_STEP,
    targets,
    payload,
  });
};

export const rollbackStep = (mutate) => {};
