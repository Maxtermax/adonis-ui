import { ADSteps } from "components/ADSteps/ADSteps";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { microStepsStore } from "ADSteps/store/steps";

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
    const { mutate } = microStepsStore.get(ID);
    

  }
  const handlePrev = () => {
    const { mutate } = microStepsStore.get(ID);
  }

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
            error: true,
          },
          {
            id: 2,
            title: "2",
            subtitle: "dos",
            done: true,
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
