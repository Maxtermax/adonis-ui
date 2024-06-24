import { ADText } from "ADText/ADText";
import { ADButton } from "ADButton/ADButton";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import * as styles from "./styles";

export const ADBreadcrumbs = ({ list = [], onSelect, className = "" }) => {
  return (
    <styles.Container className={`ad-breadcrumbs ${className}`}>
      {list.map((item, index) => (
        <styles.TextWrapper key={index}>
          <ADButton noScaleOnHover onClick={onSelect}>
            <ADText variant="subtitle" {...item} />
          </ADButton>
          {index < list.length - 1 ? (
            <ArrowIosForwardOutline size={20} />
          ) : null}
        </styles.TextWrapper>
      ))}
    </styles.Container>
  );
};
