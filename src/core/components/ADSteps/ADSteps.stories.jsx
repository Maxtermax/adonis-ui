import { ADSteps } from "components/ADSteps/ADSteps";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { microSteps } from "ADSteps/store/steps";
import { completeNextStep, rollbackStep } from "ADSteps/mutations/steps";

export default {
  title: "Basic/ADSteps",
  component: ADSteps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const ID = "test";

export const Basic = () => {
  const handleNext = () => {
    const store = microSteps.get(ID);
    completeNextStep(store, [ID]);
  };
  const handlePrev = () => {
    const store = microSteps.get(ID);
    rollbackStep(store, [ID]);
  };

  return (
    <div>
      <div
        style={{
          paddingBottom: 50,
        }}
      >
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <ADSteps
        id={ID}
        steps={[
          {
            id: 1,
            title: "1",
            subtitle: "uno",
            disabled: false,
          },
          {
            id: 2,
            title: "2",
            subtitle: "dos",
            disabled: false,
          },
          {
            id: 3,
            title: "3",
            subtitle: "three",
            disabled: true,
          },
          {
            id: 4,
            title: "4",
            subtitle: "cuatro",
            customIcon: Instagram,
            disabled: false,
          },
        ]}
      />
    </div>
  );
};
