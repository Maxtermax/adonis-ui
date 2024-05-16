import * as styles from "./style";
import { TEXT_VARIANTS } from "constants";

const { HEADING, TITLE, TEXT, SUBTITLE } = TEXT_VARIANTS;

export const ADText = ({ className = "", variant = TEXT, value, ...rest }) => {
  if (variant === HEADING)
    return (
      <styles.Heading
        className={`ad-heading ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Heading>
    );
  if (variant === TEXT)
    return (
      <styles.Text
        className={`ad-body ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Text>
    );
  if (variant === TITLE)
    return (
      <styles.Title
        className={`ad-title ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Title>
    );
  if (variant === SUBTITLE)
    return (
      <styles.SubTitle
        className={`ad-subtitle ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.SubTitle>
    );
  return null;
};
