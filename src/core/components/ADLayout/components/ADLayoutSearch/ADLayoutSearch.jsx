import React from "react";
import { useMutations } from "hermes-io";
import { withTheme } from "@emotion/react";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import { Search } from "@styled-icons/feather/Search";
import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADTextField/reducer";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store/layout";
import * as mutations from "ADLayout/mutations/layout";
import * as queries from "ADLayout/queries/layout";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import { setOpen } from "ADPopup/mutations/setOpen";
import ADPopup from "ADPopup";
import ADButton from "ADButton";
import ADPanel from "ADPanel";
import ADLoader from "ADLoader";
import ADTextField from "ADTextField";
import { SEARCH_MODAL } from "constants";
import * as styles from "./styles";

const id = SEARCH_MODAL;
const SEARCH_TEXT_FIELD = "search-text-field";
const targets = [LAYOUT_HEADER_STORE];

const Content = ({ body = [] }) => {
  const { state, onEvent } = useMutations({
    initialState: { isLoading: false },
    store: microTextFieldStore,
    id: SEARCH_TEXT_FIELD,
  });

  onEvent(actions.CHANGE, (value) => ({ isLoading: value !== "" }));

  return (
    <styles.ContentWrapper>
      <ADPanel className="ad-layout-search__panel" variant="flat">
        {state.isLoading ? <ADLoader text="Buscando..." /> : body}
      </ADPanel>
    </styles.ContentWrapper>
  );
};

export const ADLayoutSearch = withTheme(({ theme, recommendations = [] }) => {
  const handleClick = async () => {
    const headerStore = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    const isOpen = queries.getIsOpen(headerStore);
    if (isOpen) await mutations.blurOption(headerStore, targets);
    const store = overlayMicroStore.get(id);
    setOpen({ store, id, value: true });
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
            debounce={400}
            id={SEARCH_TEXT_FIELD}
            icon={<Search size={20} />}
            placeholder="Buscar vestidos en descuento..."
            variant="flat"
          />
        }
      >
        <Content body={recommendations} />
      </ADPopup>
    </>
  );
});