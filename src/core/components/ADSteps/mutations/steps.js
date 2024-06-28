import { COMPLETE_STEP, PENDING_STEP } from "constants";
import { getNextPendingStep, getLastStepCompleted } from "ADSteps/queries/steps";

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

export const rollbackStep = (store, targets) => {
  const step = getLastStepCompleted(store);
  const payload = {
    value: {
      step,
    },
  };
  store.mutate({
    type: PENDING_STEP,
    targets,
    payload,
  });
};
