import { ADText } from "ADText/ADText";
import { ADButton } from "ADButton/ADButton";
import { Status } from "ADSteps/components/Status/Status";
import { useStep } from "ADSteps/hooks/useStep";
import * as styles from "ADSteps/styles";

export const Step = ({ storeId, showGuide, id, ...rest }) => {
  const {
    title,
    subtitle,
    customIcon = null,
    disabled = false,
    status,
  } = useStep(rest, { storeId, id });

  return (
    <styles.Step className="ad-steps__step" showGuide={showGuide}>
      <ADButton disabled={disabled} variant="text">
        <Status title={title} status={status} customIcon={customIcon} />
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
