import React, { forwardRef, useState } from "react";
import ADText from "ADText";
import ADFlex from "ADFlex";
import ADButton from "ADButton";
import { Minus } from "@styled-icons/feather/Minus";
import { Trash } from "@styled-icons/feather/Trash";
import { Plus } from "@styled-icons/feather/Plus";
import * as styles from "./styles";

export const ADProductCount = forwardRef(function ADProductCount(
  { onDelete, onChange, className = "", minValue = 0, maxValue = 100, defaultValue = 0 },
  ref,
) {
  const [value, setValue] = useState(defaultValue);
  const handleIncrease = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrease = () => {
    if (minValue && value === minValue) return;
    const newValue = value - 1;
    if (newValue < 0) {
      onDelete?.(0);
      return;
    }
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <styles.Container ref={ref} className={`ad-product-count ${className}`}>
      <ADFlex alignItems="center" gap={1}>
        <ADButton
          variant={value === 0 ? "text" : "text"}
          onClick={handleDecrease}
        >
          {value === 0 ? <Trash size={16} /> : <Minus size={18} />}
        </ADButton>
        <ADText variant="subtitle" value={value} />
        <ADButton
          variant="text"
          disabled={value === maxValue}
          onClick={handleIncrease}
        >
          <Plus size={18} />
        </ADButton>
      </ADFlex>
    </styles.Container>
  );
});
