import { forwardRef } from "react";
import { uniqueId } from "lodash";
import { Step } from "ADSteps/components/Step/Step";
import { getSteps } from "ADSteps/queries/steps";
import { useStepsStore } from "ADSteps/hooks/useStepsStore";
import * as styles from "ADSteps/styles";

export const ADSteps = forwardRef(function ADSteps(
  { className = "", id = uniqueId(), ...rest },
  ref,
) {
  const store = useStepsStore({ id, ...rest });
  const steps = getSteps(store);

  return (
    <styles.Container className={`ad-steps ${className}`} ref={ref} {...rest}>
      {steps.map(({ ...args }, index) => (
        <Step
          showGuide={index < steps.length - 1}
          key={args.id}
          {...args}
          storeId={id}
        />
      ))}
    </styles.Container>
  );
});
