import { withTheme } from "@emotion/react";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import ADButton from "ADButton";

export const ADLayoutSearch = withTheme(({ theme }) => (
  <ADButton className="ad-layout__header-search" variant="text">
    <MagnifyingGlass
      color="inherit"
      size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.big)}
    />
  </ADButton>
));
