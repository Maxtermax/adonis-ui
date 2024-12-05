import React from "react";
import { useMutations } from "hermes-io";
import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADLayout/reducer";
import { actions as textFieldActions } from "ADTextField/reducer";
import ADPanel from "ADPanel";
import ADAdvice from "ADAdvice";
import ADFlex from "ADFlex";
import ADLoader from "ADLoader";
import { SEARCH_MODAL, SEARCH_TEXT_FIELD } from "../../ADLayoutSearch";
import ADRecommendations from "ADLayout/components/ADRecommendations";
import { overlayMicroStore } from "ADOverlay/store";
import { disableInput } from "ADTextField/mutations";
import * as overlayReducer from "ADOverlay/reducer";
import * as layoutMutations from "ADLayout/mutations";
import * as styles from "./styles";

export const Content = ({ recommendations = [] }) => {
  const overlayMutations = useMutations({
    initialState: { isOpen: false },
    store: overlayMicroStore,
    id: SEARCH_MODAL,
  });

  const { state, onEvent } = useMutations({
    initialState: { isLoading: false, isInputEmpty: false, products: null },
    store: microTextFieldStore,
    id: SEARCH_TEXT_FIELD,
  });

  overlayMutations.onEvent(overlayReducer.actions.SET_DISPLAY, (isOpen) => ({
    isOpen,
  }));

  onEvent(textFieldActions.CHANGE, (value) => {
    const isLoading = value !== "";
    disableInput(SEARCH_TEXT_FIELD, isLoading);
    if (isLoading) {
      layoutMutations.fireSearch(microTextFieldStore, SEARCH_TEXT_FIELD);
    }
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

  const isLoading = state.isLoading;
  const data = state.products ?? recommendations;

  return (
    <styles.ContentWrapper
      sx={{
        display: "flex",
        justifyContent: isLoading ? "space-between" : "center",
      }}
    >
      <ADPanel className="ad-layout-search__panel" variant="flat">
        <ADFlex
          sx={{
            placeContent: isLoading ? "center" : "flex-start",
            width: "100%",
            height: "100%",
            gap: isLoading ? "40px" : "0px",
          }}
          direction="column"
        >
          <ADAdvice
            sx={{ width: "100%", maxWidth: "500px", marginTop: "5px" }}
            variant="outlined"
            message="¿No encuentras el producto que buscas? Escríbenos por WhatsApp y te ayudamos al instante 👇"
            link="https://api.whatsapp.com/send?phone=573126093106&text=%C2%A1Hola!%20Estoy%20buscando%20un%20producto%20y%20me%20gustar%C3%ADa%20saber%20si%20pueden%20ayudarme.%20%F0%9F%98%8A"
          />
          {isLoading ? (
            <ADLoader text="Buscando..." />
          ) : (
            <ADRecommendations
              isOpen={overlayMutations.state.isOpen}
              data={data}
            />
          )}
        </ADFlex>
      </ADPanel>
    </styles.ContentWrapper>
  );
};
