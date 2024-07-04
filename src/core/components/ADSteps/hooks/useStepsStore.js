import { useStore, Store, Context, Observer } from "hermes-io";
import { microSteps } from "ADSteps/store/steps";
import reducer from "ADSteps/reducer/steps";
import { STEPS_STATUS } from "constants";

const mapStepsToData = (steps = []) => ({
  lastStepCompleted: null,
  steps: steps.map(({ ...rest }) => ({
    ...rest,
    status: rest.status || STEPS_STATUS.pending})),
});

export const useStepsStore = (props) => {
  const store = useStore({
    microStore: microSteps,
    store: new Store({
      id: props.id,
      context: new Context("ADSteps"),
      observer: new Observer(),
    }),
    reducer,
    data: mapStepsToData(props?.steps ?? []),
  });
  return store;
};
