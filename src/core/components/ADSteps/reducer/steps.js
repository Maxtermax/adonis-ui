import { COMPLETE_STEP, FAIL_STEP, PENDING_STEP } from "constants";

export default function steps(state, action) {
  const actions = {
    [COMPLETE_STEP]: () => {
      const step = action.payload.value.step;
      if (!step) return state;
      step.status = "completed";
      state.lastStepCompleted = step;
      return state;
    },
    [FAIL_STEP]: () => {
      const step = action.payload.value.step;
      if (!step) return state;
      step.status = "failed";
      const prevStep = state.steps.indexOf(step);
      state.lastStepCompleted = state.steps[prevStep - 1] ?? null;
      return state;
    },
    [PENDING_STEP]: () => {
      const step = action.payload.value.step;
      if (!step) return state;
      step.status = "pending";
      const prevStep = state.steps.indexOf(step);
      state.lastStepCompleted = state.steps[prevStep - 1] ?? null;
      return state;
    },
  };
  return actions[action.type]?.();
}
