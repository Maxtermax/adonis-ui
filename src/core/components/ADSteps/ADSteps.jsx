import { forwardRef } from "react";
import { useMutations, useStoreFactory } from "hermes-io";
import { uniqueId } from "lodash";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { ADText } from "ADText/ADText";
import { ADButton } from "ADButton/ADButton";
import { microSteps } from "ADSteps/store/steps";
import reducer from "ADSteps/reducer/steps";
import { getSteps } from "ADSteps/queries/steps";
import { COMPLETE_STEP, FAIL_STEP, PENDING_STEP } from "constants";
import * as styles from "./styles";

const Icon = ({ variant, Content }) => (
  <styles.Icon variant={variant}>
    {variant === "done" ? <Check size={20} /> : null}
    {variant === "error" ? <CloseOutline size={20} /> : null}
    {variant === "custom" ? (
      <Content className="icon__custom" size={20} />
    ) : null}
  </styles.Icon>
);

const Step = ({ storeId, showGuide, id, ...rest }) => {
  const { state, onEvent } = useMutations({
    initialState: { ...rest },
    noUpdate: true,
    store: microSteps,
    id: storeId,
  });
  const updateStep = ({ step }, _, setNoUpdate) => {
    if (!step) return setNoUpdate(true);
    const noUpdate = step.id !== id;
    setNoUpdate(noUpdate);
    return step;
  };
  onEvent(COMPLETE_STEP, updateStep);
  onEvent(FAIL_STEP, updateStep);
  onEvent(PENDING_STEP, updateStep);

  const {
    title,
    subtitle,
    customIcon = null,
    disabled = false,
    status,
  } = state;
  const isStatusPending = status === "pending";
  const isStatusCompleted = status === "completed";
  const isStatusFailed = status === "failed";

  const renderStatus = () => {
    if (isStatusCompleted) return <Icon variant="done" />;
    if (isStatusFailed) return <Icon variant="error" />;
    if (customIcon) return <Icon variant="custom" Content={customIcon} />;
    if (isStatusPending)
      return (
        <ADText value={title} variant="heading" className="ad-steps__title" />
      );
  };

  return (
    <styles.Step className="ad-steps__step" showGuide={showGuide}>
      <ADButton disabled={disabled} variant="text">
        {renderStatus()}
        {subtitle ? (
          <ADText
            value={subtitle}
            className="ad-steps__subtitle"
            variant="subtitle"
          />
        ) : null}
      </ADButton>
    </styles.Step>
  );
};

const mapStepsToData = (steps = []) => ({
  lastStepCompleted: null,
  steps: steps.map(({ ...rest }) => ({
    ...rest,
    status: "pending",
  })),
});

export const ADSteps = forwardRef(function ADSteps(
  { className = "", id = uniqueId(), ...rest },
  ref,
) {
  const data = mapStepsToData(rest?.steps ?? []);
  const { store } = useStoreFactory(id, data, reducer, microSteps);
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
