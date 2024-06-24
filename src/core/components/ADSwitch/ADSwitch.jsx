import { useState } from "react";
import { Check } from "@styled-icons/fa-solid/Check";
import { Close } from "@styled-icons/ionicons-solid/Close";
import * as styles from "./styles";

export const ADSwitch = ({
  className = "",
  onUnCheck,
  onCheck,
  checked = false,
}) => {
  const [isChecked, setIsCheck] = useState(checked);
  const handleSwitch = () => {
    setIsCheck((prevVal) => !prevVal);
    if (isChecked) return onCheck?.();
    onUnCheck?.();
  };
  return (
    <styles.Container
      onClick={handleSwitch}
      className={`ad-switch ${className}`}
    >
      <styles.Track className="__track">
        <styles.Icons>
          <Check size={15} />
          <Close size={15} />
        </styles.Icons>
        <styles.Ball isChecked={isChecked} className="__ball" />
      </styles.Track>
    </styles.Container>
  );
};
