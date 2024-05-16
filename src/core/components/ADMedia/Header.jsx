import * as styles from "./style";
import { Eye } from "@styled-icons/entypo/Eye";
import { ADBadge } from "components/ADBadge/ADBadge";

export const Header = () => {
  return (
    <styles.Header>
      <ADBadge active>
        <Eye size={24} />
      </ADBadge>
    </styles.Header>
  );
};
