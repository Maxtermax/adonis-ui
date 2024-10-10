import React from "react";
import { useMutations } from "hermes-io";
import ADLoader from "ADLoader";
import ADButton from "ADButton";
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import {
  nextPage,
  focusNextItem,
  setLoader,
  setHasReachedLastItem,
} from "ADCarousell/mutations";
import { actions } from "ADCarousell/reducer";
import { getLastItem, getHasReachedLastItem } from "ADCarousell/queries";

export const ADCarousellNext = ({ store, id }) => {
  const { state, onEvent } = useMutations({
    initialState: { isLoading: false },
    store,
    id,
  });

  const handleNext = async () => {
    const hasReachedLastItem = getHasReachedLastItem(store);
    if (!hasReachedLastItem) return focusNextItem({ store, id, value: null });
    const { id: lastItemId } = getLastItem(store);
    setLoader({ store, id, value: true });
    await nextPage({ store, id, value: lastItemId });
    setLoader({ store, id, value: false });
    setHasReachedLastItem({ store, id, value: false });
  };

  onEvent(actions.LOADING, (isLoading) => ({ isLoading }));

  onEvent(actions.UPDATE_UI_NEXT_PAGE, handleNext);

  if (state.isLoading) return <ADLoader />;

  return (
    <ADButton
      onClick={handleNext}
      variant="contained"
      className="ad-carousell__arrow __arrow-right"
    >
      <ArrowRight />
    </ADButton>
  );
};
