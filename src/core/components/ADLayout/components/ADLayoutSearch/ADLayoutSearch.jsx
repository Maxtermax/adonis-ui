import React from "react";
import { useMutations } from "hermes-io";
import { withTheme } from "@emotion/react";
import { Search } from "@styled-icons/feather/Search";
import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADLayout/reducer";
import { actions as textFieldActions } from "ADTextField/reducer";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import ADPopup from "ADPopup";
import ADButton from "ADButton";
import ADPanel from "ADPanel";
import ADLoader from "ADLoader";
import ADTextField from "ADTextField";
import ADRecommendations from "ADLayout/components/ADRecommendations";
import { overlayMicroStore } from "ADOverlay/store";
import { disableInput } from "ADTextField/mutations";
import * as popupMutations from "ADPopup/mutations";
import * as layoutMutations from "ADLayout/mutations";
import * as layoutQueries from "ADLayout/queries";
import * as styles from "./styles";

export const SEARCH_MODAL = "SEARCH_MODAL";
export const SEARCH_TEXT_FIELD = "SEARCH_TEXT_FIELD";
const targets = [LAYOUT_HEADER_STORE];

const Content = ({ recommendations = [] }) => {
  const { state, onEvent } = useMutations({
    initialState: { isLoading: false, isInputEmpty: false, products: null },
    store: microTextFieldStore,
    id: SEARCH_TEXT_FIELD,
  });

  onEvent(textFieldActions.CHANGE, (value) => {
    const isLoading = value !== "";
    disableInput(SEARCH_TEXT_FIELD, isLoading);
    if (isLoading)
      layoutMutations.fireSearch(microTextFieldStore, SEARCH_TEXT_FIELD);
    const isInputEmpty = value === "";
    return {
      isLoading,
      isInputEmpty,
      products: isInputEmpty ? null : state.products,
    };
  });

  onEvent(actions.SEARCH_COMPLETED, (products) => {
    disableInput(SEARCH_TEXT_FIELD, false);
    return { isLoading: false, products };
  });

  return (
    <styles.ContentWrapper>
      <ADPanel className="ad-layout-search__panel" variant="flat">
        {state.isLoading ? (
          <ADLoader text="Buscando..." />
        ) : (
          <ADRecommendations data={state.products ?? recommendations} />
        )}
      </ADPanel>
    </styles.ContentWrapper>
  );
};

export const ADLayoutSearch = withTheme(({ theme, recommendations = [] }) => {
  const handleClick = async () => {
    const headerStore = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    const isOpen = layoutQueries.getIsOpen(headerStore);
    if (isOpen) await layoutMutations.blurOption(headerStore, targets);
    const store = overlayMicroStore.get(SEARCH_MODAL);
    popupMutations.setOpen({ store, id: SEARCH_MODAL, value: true });
  };

  return (
    <>
      <ADButton
        onClick={handleClick}
        className="ad-layout__header-search"
        variant="text"
      >
        <Search
          color="inherit"
          size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.extra)}
        />
      </ADButton>

      <ADPopup
        id={SEARCH_MODAL}
        width={"600px"}
        height={"620px"}
        title={
          <ADTextField
            debounce={300}
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
