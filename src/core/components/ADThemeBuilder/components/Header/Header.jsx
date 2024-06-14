import * as styles from "./styles";
import { ADText } from "components/ADText/ADText";

const Header = ({ className = "", name, ...rest }) => {
  return (
    <styles.Content className={`__header ${className}`} {...rest}>
      <ADText value="Theme builder" variant="heading" />
      <ADText value={`Base: ${name}`} variant="subtitle" />
    </styles.Content>
  );
};

export default Header;
