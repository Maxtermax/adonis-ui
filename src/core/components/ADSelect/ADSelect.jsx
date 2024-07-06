import { useState, forwardRef } from "react";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { ArrowIosUpward } from "@styled-icons/evaicons-solid/ArrowIosUpward";

import { ADText } from "ADText/ADText";
import * as styles from "./styles";

const Selected = ({ onClick, disabled, name, content, showOptions }) => {
  return (
    <styles.Label onClick={onClick} disabled={disabled}>
      {content ? content : <ADText variant="subtitle" value={name} />}
      {showOptions ? (
        <ArrowIosUpward size={26} />
      ) : (
        <ArrowIosDownward size={26} />
      )}
    </styles.Label>
  );
};

export const ADSelect = forwardRef(function ADSelect(
  {
    className = "",
    options = [],
    onSelect,
    label = "",
    maxHeight = "500px",
    width = "150px",
    variant = "primary",
    disabled = false,
    defaultOption,
  },
  ref,
) {
  const [displayOptions, setDiplayOptions] = useState(false);
  const [selected, setSelected] = useState(
    options?.find(({ id }) => id === defaultOption) ?? options[0],
  );
  const handleClickLabel = () => setDiplayOptions((prevVal) => !prevVal);
  const handleSelect = (value) => {
    let performDefault = true;
    const preventDefault = () => (performDefault = false);
    const event = {
      value,
      preventDefault,
      select: setSelected,
      displayOptions: setDiplayOptions,
    };
    onSelect?.(event);
    if (performDefault) {
      setSelected(value);
      setDiplayOptions(false);
    }
  };

  return (
    <styles.Container
      ref={ref}
      width={width}
      variant={variant}
      className={`ad-select ${className}`}
    >
      {selected?.label || label ? (
        <ADText
          variant="subtitle"
          value={selected.label || label}
          className="ad-selected__helper-text"
        />
      ) : null}

      <styles.Select role="select">
        {selected ? (
          <Selected
            onClick={handleClickLabel}
            disabled={disabled}
            name={selected.name}
            content={selected.content}
            showOptions={displayOptions}
          />
        ) : null}
        <styles.OptionsWrapper
          maxHeight={maxHeight}
          variant={variant}
          show={displayOptions}
        >
          {options.map((option) => (
            <styles.Option
              show={displayOptions}
              onClick={() => handleSelect(option)}
              role="option"
              key={option.id}
            >
              <styles.OptionContent>
                {option.content ? (
                  option.content
                ) : (
                  <ADText variant="subtitle" value={option.name} />
                )}
              </styles.OptionContent>
            </styles.Option>
          ))}
        </styles.OptionsWrapper>
      </styles.Select>
    </styles.Container>
  );
});
