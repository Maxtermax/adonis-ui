import { withTheme } from "@emotion/react";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import { layoutMicroStore, layoutHeaderStore } from "ADLayout/store/layout";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import * as drawerMutations from "ADDrawer/mutations/drawer";
import ADButton from "ADButton";
import * as mutations from "ADLayout/mutations/layout";
import * as queries from "ADLayout/queries/layout";
import { SEARCH_DRAWE_ID } from "constants";

export const ADLayoutSearch = withTheme(({ theme }) => {
  const handleClick = async () => {
    const store = layoutMicroStore.get(layoutHeaderStore);
    const isOpen = queries.getIsOpen(store);
    if (isOpen) {
      await mutations.blurOption(layoutMicroStore.get(layoutHeaderStore), [
        layoutHeaderStore,
      ]);
    }
    drawerMutations.setOpen({
      store: drawerMicroStore.get(SEARCH_DRAWE_ID),
      id: SEARCH_DRAWE_ID,
      value: true,
    });
  };

  return (
    <ADButton
      onClick={handleClick}
      className="ad-layout__header-search"
      variant="text"
    >
      <MagnifyingGlass
        color="inherit"
        size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.big)}
      />
    </ADButton>
  );
});
