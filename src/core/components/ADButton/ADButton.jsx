import * as styles from "./style";

export const ADButton = ({ children, className = "", ...rest }) => (
  <styles.Button className={`ad-button ${className}`} {...rest}>
    {children}
  </styles.Button>
);
