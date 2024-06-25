import { COMPLETE_STEP } from "constants";

export default function steps(state, action) {
  const actions = {
    [COMPLETE_STEP]: () => {
      if (!action.payload.value.step) return state;
      action.payload.value.step.completed = true;
      action.payload.value.step.error = false;
      return state;
    }
  };
  return actions[action.type]?.();
}
