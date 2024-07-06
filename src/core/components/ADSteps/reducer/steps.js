import { COMPLETE_STEP, FAIL_STEP, PENDING_STEP, STEPS_STATUS } from "constants";

export default function steps(state, action) {
  const actions = {
    [COMPLETE_STEP]: () => {
      const step = action.payload.value.step;
      if (!step) return state;
      step.status = STEPS_STATUS.completed;
      state.lastStepCompleted = step;
      return state;
    },
    [FAIL_STEP]: () => {
      const step = action.payload.value.step;
      if (!step) return state;
      step.status = STEPS_STATUS.error;
      const prevStep = state.steps.indexOf(step);
      state.lastStepCompleted = state.steps[prevStep - 1] ?? null;
      return state;
    },
    [PENDING_STEP]: () => {
      const step = action.payload.value.step;
      if (!step) return state;
      step.status = STEPS_STATUS.pending;
      const prevStep = state.steps.indexOf(step);
      state.lastStepCompleted = state.steps[prevStep - 1] ?? null;
      return state;
    },
  };
  return actions[action.type]?.();
}
