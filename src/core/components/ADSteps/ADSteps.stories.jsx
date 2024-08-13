import ADSteps from "ADSteps";
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
  argTypes: {
    className: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};

const ID = "ADSteps";

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
            subtitle: "One",
          },
          {
            id: 2,
            title: "2",
            subtitle: "Two",
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
          },
        ]}
      />
    </div>
  );
};
