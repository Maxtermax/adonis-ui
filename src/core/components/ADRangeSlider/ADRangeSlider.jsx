import React, { useState } from "react";
import ADText from "ADText";
import { uniqueId } from "lodash";
import * as styles from "./styles";
import formatCurrency from "../../../utils/formatCurrency";

export const ADRangeSlider = ({
  step = 1,
  min,
  max,
  onChange,
  id = uniqueId("ad-slider"),
  labels = { min: "Min", max: "Max" },
}) => {
  const [inputOneValue, setInputOneValue] = useState(0);
  const [inputTwoValue, setInputTwoValue] = useState(0);

  const handleInputOneChange = (event) => {
    const { target } = event;
    const { value } = target;
    const hasReachedMaxValue = parseFloat(value) > inputTwoValue;
    if (hasReachedMaxValue) return;
    setInputOneValue(parseFloat(value));
    onChange?.({ min: inputOneValue, max: inputTwoValue });
  };
  const handleInputTwoChange = (event) => {
    const { target } = event;
    const { value } = target;
    const hasReachedMaxValue = parseFloat(value) < inputOneValue;
    if (hasReachedMaxValue) return;
    setInputTwoValue(parseFloat(value));
    onChange?.({ min: inputOneValue, max: inputTwoValue });
  };
  return (
    <styles.Container className="ad-slider">
      <styles.LabelWrapper>
        <ADText
          variant="label"
          htmlFor={`${id}-min`}
          value={`${labels.min}: ${formatCurrency(inputOneValue)}`.toUpperCase()}
        />
        <ADText
          variant="label"
          htmlFor={`${id}-min`}
          value={`${labels.max}: ${formatCurrency(inputTwoValue)}`.toUpperCase()}
         />
      </styles.LabelWrapper>
      <div>
        <styles.SliderTrack />
        <styles.InputWrapper>
          <styles.Input
            type="range"
            id={`${id}-min`}
            min={min}
            max={max}
            step={step}
            value={inputOneValue}
            onChange={handleInputOneChange}
          />
          <styles.Input
            type="range"
            id={`${id}-max`}
            min={min}
            max={max}
            step={step}
            value={inputTwoValue}
            onChange={handleInputTwoChange}
          />
        </styles.InputWrapper>
      </div>
    </styles.Container>
  );
};
