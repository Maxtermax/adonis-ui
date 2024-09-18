import React from "react";
import { useMutations } from "hermes-io";
import { withTheme } from "@emotion/react";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import { Search } from "@styled-icons/feather/Search";
import { microTextFieldStore } from "ADTextField/store";
import { actions as searchActions } from "ADTextField/reducer";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import ADPopup from "ADPopup";
import ADButton from "ADButton";
import ADPanel from "ADPanel";
import ADLoader from "ADLoader";
import ADTextField from "ADTextField";
import { setOpen } from "ADPopup/mutations";
import { overlayMicroStore } from "ADOverlay/store";
import { disableInput, fireSearch } from "ADTextField/mutations";
import { actions } from "ADLayout/reducer";
import * as mutations from "ADLayout/mutations";
import * as queries from "ADLayout/queries";
import * as styles from "./styles";

export const SEARCH_MODAL = "SEARCH_MODAL";
export const SEARCH_TEXT_FIELD = "SEARCH_TEXT_FIELD";
const targets = [LAYOUT_HEADER_STORE];

const Content = ({ recommendations = [] }) => {
  const { state, onEvent } = useMutations({
    initialState: { isLoading: false, products: null },
    store: microTextFieldStore,
    id: SEARCH_TEXT_FIELD,
  });

  onEvent(searchActions.CHANGE, (value) => {
    const isLoading = value !== "";
    disableInput(SEARCH_TEXT_FIELD, isLoading);
    console.trace("LISTEN CHANGE");
    if (isLoading) {
      fireSearch(SEARCH_TEXT_FIELD);
    }
    return { isLoading };
  });

  onEvent(actions.SEARCH_COMPLETED, () => {
    disableInput(SEARCH_TEXT_FIELD, false);
    return { isLoading: false };
  });

  return (
    <styles.ContentWrapper>
      <ADPanel className="ad-layout-search__panel" variant="flat">
        {state.isLoading ? (
          <ADLoader text="Buscando..." />
        ) : (
          (state.products ?? recommendations)
        )}
      </ADPanel>
    </styles.ContentWrapper>
  );
};

export const ADLayoutSearch = withTheme(({ theme, recommendations = [] }) => {
  const handleClick = async () => {
    const headerStore = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    const isOpen = queries.getIsOpen(headerStore);
    if (isOpen) await mutations.blurOption(headerStore, targets);
    const store = overlayMicroStore.get(SEARCH_MODAL);
    setOpen({ store, id: SEARCH_MODAL, value: true });
  };

  return (
    <>
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

      <ADPopup
        id={SEARCH_MODAL}
        width={"600px"}
        height={"620px"}
        title={
          <ADTextField
            debounce={0}
            id={SEARCH_TEXT_FIELD}
            icon={<Search size={20} />}
            placeholder="Buscar vestidos en descuento..."
            variant="flat"
          />
        }
      >
        <Content recommendations={recommendations} />
      </ADPopup>
    </>
  );
});
