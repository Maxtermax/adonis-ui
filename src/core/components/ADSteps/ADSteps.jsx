import { forwardRef } from "react";
import { useMutations, useStore, Store, Context, Observer } from "hermes-io";
import { uniqueId } from "lodash";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { ADText } from "ADText/ADText";
import { ADButton } from "ADButton/ADButton";
import { getSteps } from "ADSteps/queries/steps";
import { microStepsStore } from "ADSteps/store/steps";
import reducer from "ADSteps/reducer/steps";
import { COMPLETE_STEP } from "constants";
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

const Step = (props) => {
  const { state } = useMutations({
    initialState: props,
    noUpdate: true,
    events: [COMPLETE_STEP],
    onChange: () => {
      const steps = getSteps();
      return { steps };
    },
    store: microStepsStore.get(props.id),
    id: props.id,
  });
  const {
    title,
    subtitle,
    customIcon = null,
    error = false,
    done = false,
    disabled = false,
  } = state;

  return (
    <styles.Step
      className="ad-steps__step"
      showGuide={props.showGuide}
    >
      <ADButton
        onClick={() => onSelect?.(steps[index])}
        disabled={disabled}
        variant="text"
      >
        {done ? <Icon variant="done" /> : null}
        {error ? <Icon variant="error" /> : null}
        {customIcon ? <Icon variant="custom" Content={customIcon} /> : null}
        {!done && !error && !customIcon ? (
          <ADText value={title} variant="heading" className="ad-steps__title" />
        ) : null}
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

export const ADSteps = forwardRef(function ADSteps(
  { className = "", id = uniqueId(), onSelect, ...rest },
  ref,
) {
  const { query } = useStore({
    microStore: microStepsStore,
    store: new Store({
      id,
      context: new Context("ADSteps"),
      observer: new Observer(),
    }),
    reducer,
    data: rest?.steps ?? [],
  });

  const steps = query(({ state }) => state, []);

  return (
    <styles.Container className={`ad-steps ${className}`} ref={ref} {...rest}>
      {steps.map(({ id, ...rest }, index) => (
        <Step showGuide={index < steps.length - 1} key={id} {...rest} />
      ))}
    </styles.Container>
  );
});
