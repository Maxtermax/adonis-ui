import * as styles from "./styles";

export const ADGrid = ({
  children,
  className = "",
  cols = 1,
  rows = 1,
  ...rest
}) => (
  <styles.Grid
    className={`ad-grid ${className}`}
    cols={cols}
    rows={rows}
    {...rest}
  >
    {children}
  </styles.Grid>
);
