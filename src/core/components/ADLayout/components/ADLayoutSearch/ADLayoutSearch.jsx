import React from "react";
import { withTheme } from "@emotion/react";
import { MagnifyingGlass } from "@styled-icons/fa-solid/MagnifyingGlass";
import { Search } from "@styled-icons/feather/Search";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store/layout";
import * as mutations from "ADLayout/mutations/layout";
import * as queries from "ADLayout/queries/layout";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import { setOpen } from "ADPopup/mutations/setOpen";
import ADPopup from "ADPopup";
import ADGrid, { ADGridCol } from "ADGrid";
import ADText from "ADText";
import ADButton from "ADButton";
import ADPanel from "ADPanel";
import ADTextField from "ADTextField";
import { SEARCH_MODAL } from "constants";
import * as styles from "./styles";

const id = SEARCH_MODAL;
const targets = [LAYOUT_HEADER_STORE];

const Product = () => {
  return (
    <ADPanel>
      <ADText variant="text" value="Test" />
    </ADPanel>
  );
};

const Recommendations = () => {
  return <ADGrid
    fullWidth
    md={{ cols: 2, rows: 1, gap: "0px" }}
    cols={"repeat(2, 1fr)"}
    rows={1}
  >
    <ADGridCol>
      <Product />
      <Product />
    </ADGridCol>

    <ADGridCol>
      <Product />
      <Product />
    </ADGridCol>
  </ADGrid>;
};

export const ADLayoutSearch = withTheme(({ theme }) => {
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
        height={"700px"}
        title={
          <ADTextField
            icon={<Search size={20} />}
            placeholder="Buscar vestidos en descuento..."
            variant="flat"
          />
        }
      >
        <styles.ContentWrapper>
          <ADPanel className="ad-layout-search__panel" variant="flat">
            <Recommendations />
          </ADPanel>
        </styles.ContentWrapper>
      </ADPopup>
    </>
  );
});
