import React from "react";
import { withTheme } from "@emotion/react";
import { Search } from "@styled-icons/feather/Search";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import ADPopup, { variants } from "ADPopup";
import ADButton from "ADButton";
import ADLoader from "ADLoader";
import ADErrorMessage from "ADErrorMessage";
import ADTextField from "ADTextField";
import { overlayMicroStore } from "ADOverlay/store";
import * as popupMutations from "ADPopup/mutations";
import * as layoutMutations from "ADLayout/mutations";
import * as layoutQueries from "ADLayout/queries";
import useMediaQuery from "@/core/hooks/useMediaQuery";
import useLoaderData from "@/core/hooks/useLoaderData";
import Content from "./components/Content";

export const SEARCH_MODAL = "SEARCH_MODAL";
export const SEARCH_TEXT_FIELD = "SEARCH_TEXT_FIELD";
const targets = [LAYOUT_HEADER_STORE];

export const ADLayoutSearch = withTheme(({ theme }) => {
  const { actions, state, onEvent } = useLoaderData();
  const { data = [], isLoading, error } = state;
  onEvent(actions.SET_RECOMMENDATIONS, (value) => ({
    isLoading: false,
    error: null,
    data: value,
  }));

  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  const handleClick = async () => {
    const headerStore = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    const isOpen = layoutQueries.getIsOpen(headerStore);
    if (isOpen) await layoutMutations.blurOption(headerStore, targets);
    const store = overlayMicroStore.get(SEARCH_MODAL);
    popupMutations.setOpen({ store, id: SEARCH_MODAL, value: true });
  };

  if (isLoading) {
    return (
      <ADLoader
        sx={{
          "& .ad-loader__spinner": {
            border: `3px solid ${theme.colors.white}`,
            borderBottomColor: "transparent",
          },
        }}
      />
    );
  }
  if (error) {
    return (
      <ADErrorMessage message="Los sentimos ocurrio un error interno 😞" />
    );
  }
  if (data) {
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
          variant={isMobile ? variants.fullscreen : "normal"}
          width={"700px"}
          height={"750px"}
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
          <Content recommendations={data} />
        </ADPopup>
      </>
    );
  }
  return null;
});
