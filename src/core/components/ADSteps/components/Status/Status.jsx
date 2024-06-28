import { ADText } from "ADText/ADText";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { STEPS_STATUS } from "constants";
import * as styles from "ADSteps/styles";

const Icon = ({ variant, Content }) => (
  <styles.Icon variant={variant}>
    {variant === "completed" ? <Check size={20} /> : null}
    {variant === "failed" ? <CloseOutline size={20} /> : null}
    {variant === "custom" ? (
      <Content className="icon__custom" size={20} />
    ) : null}
  </styles.Icon>
);

export const Status = ({ status, customIcon, title }) => {
  const isStatusPending = status === STEPS_STATUS.pending;
  const isStatusCompleted = status === STEPS_STATUS.completed;
  const isStatusFailed = status === STEPS_STATUS.failed;

  if (isStatusCompleted) return <Icon variant="completed" />;
  if (isStatusFailed) return <Icon variant="failed" />;
  if (customIcon) return <Icon variant="custom" Content={customIcon} />;
  if (isStatusPending) {
    return (
      <ADText value={title} variant="heading" className="ad-steps__title" />
    );
  }
  return null;
};
