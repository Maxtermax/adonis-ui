import { useRef, useState } from "react";
import { uniqueId } from "lodash";
import * as styles from "./styles";

const Radio = ({ onChange, id }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () =>
    setIsChecked((prevVal) => !prevVal) && onChange?.();

  return <styles.Radio id={id} isChecked={isChecked} onClick={handleToggle} />;
};

export const ADRadio = ({
  label,
  onChecked,
  onUnCheck,
  id = uniqueId("ad-radio-"),
  ...rest
}) => {
  const inputRef = useRef(null);
  const handleChange = (e) => {
    const { target } = e;
    target.checked = !target.checked;
    if (target.checked) return onChecked?.();
    onUnCheck?.();
  };
  return (
    <styles.Container className="ad-radio __container">
      <styles.Input className="__input" ref={inputRef} type="radio" {...rest} />
      <Radio onChange={handleChange} id={id} />

      {label ? (
        <styles.Label className="__label" htmlFor={id}>
          {label}
        </styles.Label>
      ) : null}
    </styles.Container>
  );
};
